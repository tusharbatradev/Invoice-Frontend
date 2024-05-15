import {
  Box,
  Stack,
  TextField,
  Typography,
  Grid,
  Button,
  Skeleton,
  Autocomplete,
} from "@mui/material";
import "./style.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fillProductsField,
  updateInvoiceField,
} from "../redux/Slices/invoiceSlice";
import { removeProduct } from "../redux/Slices/invoiceSlice";
import { CrossCancelIcon, DeleteBasketIcon, RemoveIcon } from "../assets/CustomIcons/Icons";

function ProductDetails({ id }) {
  const [availableProducts, setAvailableProducts] = useState([]);
  const [productValue, setProductValue] = useState("");
  console.log("productValue", productValue);
  const products = useSelector((state) => state.invoice.products);
  const product = products?.find((product) => product.id === id);
  const dispatch = useDispatch();

  const handleUpdateField = (e) => {
    const { name, value } = e.target;
    let updatedAmount = product.productAmount; // Default to current amount
    console.log("product", product);
    console.log("amount", product.productAmount);

    if (
      name === "productWeight" ||
      name === "productCost" ||
      name === "makingCharges" ||
      name === "productQuantity"
    ) {
      const parsedWeight =
        parseFloat(name === "productWeight" ? value : product.productWeight) ||
        0;
      const parsedRate =
        parseFloat(name === "productCost" ? value : product.productCost) || 0;
      const parsedMakingCharges =
        parseFloat(name === "makingCharges" ? value : product.makingCharges) ||
        0;
      const parsedQuantity =
        parseInt(
          name === "productQuantity" ? value : product.productQuantity
        ) || 1; // Default to 1 if invalid quantity

      const calculatedAmount =
        parsedWeight * parsedRate + parsedWeight * parsedMakingCharges;
      const totalAmount = isNaN(calculatedAmount)
        ? 0
        : calculatedAmount * parsedQuantity;
      updatedAmount = totalAmount.toFixed(2);
    }

    dispatch(fillProductsField({ id, field: name, value }));
    dispatch(
      fillProductsField({ id, field: "productAmount", value: updatedAmount })
    );
  };
  const handleSelectProductName = (value) => {
    dispatch(fillProductsField({ id, field: "product", value }));
  };
  const handleRemoveProduct = () => {
    dispatch(removeProduct({ id: id }));
  };
  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:3001/product", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });
      if (response.status === 200) {
        const availableProducts = response?.data
          ?.filter((product) => product?.availability === true)
          .map((product) => {
            return {
              label: product.productName,
              ...product,
            };
          });
        setAvailableProducts([...availableProducts]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack padding={"16px"} spacing={"4px"}>
      <Box
        sx={{
          padding: "16px",
          border: "1px solid #9fa8af",
          borderRadius: "12px",
          marginTop: "16px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={availableProducts}
              value={product.product}
              onChange={(e, newValue) => handleSelectProductName(newValue)}
              className="productAutocomplete"
              renderInput={(params) => (
                <TextField
                  {...params}
                  fullWidth
                  variant="outlined"
                  placeholder="Product name"
                  // name="product"
                  // value={product.product}
                  // onChange={handleUpdateField}
                  sx={{	
                    "& .MuiInputBase-root": {
                      borderRadius: "8px",
					  paddingY : '0px',
                      height: "40px",
                      "&.Mui-focused fieldset": {
                        borderColor: "#555555",
                      },
                    },
                  }}
                />
              )}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Product Weight"
              name="productWeight"
              type="number"
              value={product.productWeight}
              onChange={handleUpdateField}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#555555",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Product Cost"
              name="productCost"
              value={product.productCost}
              type="number"
              onChange={handleUpdateField}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#555555",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Making Charges"
              name="makingCharges"
              value={product.makingCharges}
              type="number"
              onChange={handleUpdateField}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#555555",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Product ID"
              name="id"
              value={product.id}
              onChange={handleUpdateField}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#555555",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Product Quantity"
              name="productQuantity"
              value={product.productQuantity}
              type="number"
              onChange={handleUpdateField}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#555555",
                  },
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              disabled
              fullWidth
              variant="outlined"
              placeholder="Product amount"
              name="productAmount"
              value={product.productAmount}
              sx={{
                "& .MuiInputBase-root": {
                  height: "40px",
                  backgroundColor: "#D0D5D7",
                  borderRadius: "8px",
                  "&.Mui-focused fieldset": {
                    borderColor: "#555555",
                  },
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
      <Grid item xs={6}>
        <Button
          variant="contained"
          fullWidth
          onClick={() => handleRemoveProduct(id)}
          sx={{
            bgcolor : '#e25454',
            color : 'white',
            fontFamily: "Poppins",
            marginTop: "12px",
            display : 'flex',
            gap : '4px',
            "&:hover": {
              backgroundColor: "#e60023",
            },
          }}
        >
          Remove this item <RemoveIcon />
        </Button>
      </Grid>
    </Stack>
  );
}

export default ProductDetails;
