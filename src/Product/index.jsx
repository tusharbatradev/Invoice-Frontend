import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search } from "../assets/CustomIcons/Icons";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "productName",
    headerName: "Product Name",
    width: 150,
    editable: false,
  },
  {
    field: "availability",
    headerName: "In stock",
    width: 150,
    editable: false,
  },
];

const rows = [
  { id: 1, productName: "Ring", availability: true },
  { id: 2, productName: "Kada", availability: true },
  { id: 3, productName: "Haar", availability: true },
  { id: 4, productName: "Mangal Sutra", availability: true },
  { id: 5, productName: "Pendal", availability: false },
  { id: 6, productName: "Bitchiya", availability: true },
];

export default function Product() {
  return (
    <>
      <Stack
        display={"flex"}
        direction={"row"}
        justifyContent={"space-between"}
        padding={5}
      >
        <TextField
          InputProps={{
            startAdornment: <Search />,
          }}
        ></TextField>

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#4c3cce",
            "&:hover": {
              backgroundColor: "#4c3cce",
            },
          }}
        >
          Create product
        </Button>
      </Stack>

      <Box
        sx={{
          height: 400,
          width: "100%",
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </>
  );
}
