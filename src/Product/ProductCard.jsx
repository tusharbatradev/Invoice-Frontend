import {
  Typography,
  IconButton,
  Box,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import {
  CrossCancelIcon,
  EditedIcon,
  DeleteBasketIcon,
  SaveIcon,
  ProductIcon,
  StockLimit,
} from "../assets/CustomIcons/Icons";
import { useState } from "react";

export default function ProductCard() {
  const [editMode, setEditMode] = useState(true);

  const handleEditToggle = () => {
    setEditMode((prev) => !prev);
  };

  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "30%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
      }}
    >
      <TextField
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ProductIcon />
            </InputAdornment>
          ),
          sx: {
            display: "flex",
            alignItems: "center",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "18px",
          },
        }}
        value="Product Name"
        sx={{
          ".MuiInputBase-input": {
            display: "flex",
            alignItems: "center",
            gap: "4px",
          },
        }}
      />
      <TextField
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <StockLimit />
            </InputAdornment>
          ),
          sx: {
            display: "flex",
            alignItems: "center",
            fontFamily: "Poppins",
            fontWeight: 500,
            fontSize: "16px",
            height : '40px'
          },
        }}
        value="Product Availability"
        sx={{
          ".MuiInputBase-input": {
            display: "flex",
            alignItems: "center",
            gap: "4px",
          },
        }}
      />

      <Stack direction={"row"} justifyContent={"space-between"} gap={"4px"}>
        {editMode ? (
          <Typography
            onClick={handleEditToggle}
            sx={{
              fontFamily: "Poppins",
              display: "flex",
              backgroundColor: "#0c1526",
              color: "white",
              padding: "6px",
              gap: "4px",
              width: "50%",
              cursor: "pointer",
              borderRadius: "18px",
            }}
          >
            <EditedIcon />
            Edit Product!
          </Typography>
        ) : (
          <Typography
            onClick={handleEditToggle}
            sx={{
              fontFamily: "Poppins",
              display: "flex",
              backgroundColor: "#0c1526",
              color: "white",
              padding: "6px",
              gap: "4px",
              width: "50%",
              cursor: "pointer",
              borderRadius: "18px",
            }}
          >
            <SaveIcon />
            Save Product!
          </Typography>
        )}

        <Typography
          sx={{
            fontFamily: "Poppins",
            display: "flex",
            backgroundColor: "#df6161",
            color: "white",
            padding: "6px",
            gap: "4px",
            width: "50%",
            cursor: "pointer",
            borderRadius: "18px",
          }}
        >
          <DeleteBasketIcon bgColor={"red"} />
          Delete Product!
        </Typography>
      </Stack>
    </Box>
  );
}
