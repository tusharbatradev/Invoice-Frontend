import { useEffect, useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Skeleton,
  Snackbar,
  Typography,
} from "@mui/material";
import {
  CrossCancelIcon,
  EditedIcon,
  ProductIcon,
  SaveIcon,
} from "../assets/CustomIcons/Icons";
import { Stack } from "@mui/system";
import axios from "axios";
import { DeleteBasketIcon } from "../assets/CustomIcons/Icons";
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import ProductCard from "./ProductCard";

export default function Table({ reload, setReload }) {
  const columns = [
    {
      field: "productName",
      headerName: "Product name",
      width: 300,
      editable: true,
    },
    {
      field: "availability",
      headerName: "Status",
      width: 300,
      editable: true,
    },
    {
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 300,
      cellClassName: "actions",
      getActions: (params) => {
        const { id } = params.row;
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={() => handleSaveClick(params)}
            />,
            <GridActionsCellItem
              icon={<CrossCancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={() => handleCancelClick(params)}
              color="inherit"
            />,
          ];
        }

        return [
          <GridActionsCellItem
            icon={<EditedIcon />}
            label="Edit"
            className="textPrimary"
            onClick={() => handleEditClick(params)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteBasketIcon />}
            label="Delete"
            onClick={() => handleDelete(params)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const [rowModesModel, setRowModesModel] = useState({});
  const [rows, setRows] = useState([]);
  const [snackBar, setSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState("");
  const [snackBarColor, setSnackBarColor] = useState("");

  // Edit click handler
  const handleEditClick = (params) => {
    const { id } = params.row;
    setSnackBarMessage("Please Edit the Product");
    setSnackBar(true);
    setSnackBarColor("green");
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  // Save click handler
  const handleSaveClick = async (params) => {
    try {
      // Convert the "availability" field to a Boolean value
      const availability = params.row.availability === "Available";

      const updatedProduct = await axios.post(
        `https://new-invoice-backend.onrender.com/product/${params.row._id}`,
        { ...params.row, availability: availability },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (updatedProduct.status === 200) {
        fetchProducts();
        setSnackBarMessage(updatedProduct.data.msg);
        setSnackBar(true);
        setSnackBarColor("green");
      }
    } catch (error) {
      console.error("Error updating document:", error);
      setSnackBarMessage("Error updating product");
      setSnackBar(true);
      setSnackBarColor("red");
    }
    setRowModesModel({
      ...rowModesModel,
      [params.row._id]: { mode: GridRowModes.View },
    });
  };

  // Cancel click handler
  const handleCancelClick = (params) => {
    const { id } = params.row;
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  // Delete function for the product
  const handleDelete = async (params) => {
    try {
      const deletedProduct = await axios.delete(
        `https://new-invoice-backend.onrender.com/product/${params.row._id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (deletedProduct.status === 200) {
        fetchProducts();
      }
      setSnackBarMessage("Product Deleted");
      setSnackBar(true);
      setSnackBarColor("red");
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  // Fetch products from API
  async function fetchProducts() {
    try {
      const response = await axios.get(
        "https://new-invoice-backend.onrender.com/product",
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        let count = 0;
        const rowData = response.data.map((item) => {
          count++;
          return {
            ...item,
            id: count,
            availability: item.availability ? "Available" : "Not Available",
          };
        });
        setRows(rowData);
        setReload(false);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  // Fetch products on component mount and reload change
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (reload === true) fetchProducts();
  }, [reload]);

  // Close SnackBar
  const handleCloseSnackBar = () => {
    setTimeout(() => {
      setSnackBar(false);
    }, 500);
  };

  // Loading State
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    // <Stack paddingX={2}>
    //   {loading ? (
    //     <Skeleton sx={{ height: "450px" }} />
    //   ) : (
    //     <Box height={400} padding={2}>
    //       <DataGrid
    //         rows={rows}
    //         columns={columns}
    //         editMode="row"
    //         rowModesModel={rowModesModel}
    //         onRowEditStop={(params, event) => {
    //           if (params.reason === GridRowEditStopReasons.rowFocusOut) {
    //             event.defaultMuiPrevented = true;
    //           }
    //         }}
    //         pageSize={5}
    //         checkboxSelection
    //         disableRowSelectionOnClick
    //       />
    //     </Box>
    //   )}

    //   <Snackbar
    //     ContentProps={{
    //       sx: {
    //         backgroundColor: snackBarColor,
    //       },
    //     }}
    //     open={snackBar}
    //     autoHideDuration={1000}
    //     message={
    //       <Typography
    //         sx={{
    //           width: "100%",
    //           display: "flex",
    //           alignItems: "center",
    //           gap: "8px",
    //           fontFamily: "Poppins",
    //         }}
    //       >
    //         {snackBarMessage}
    //       </Typography>
    //     }
    //     onClose={handleCloseSnackBar}
    //     anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    //   />
    // </Stack>
    <Stack direction={"row"} gap={"8px"} flexWrap={"wrap"}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Stack>
  );
}
