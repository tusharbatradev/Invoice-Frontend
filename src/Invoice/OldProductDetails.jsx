import {
  Radio,
  FormControlLabel,
  Stack,
  Typography,
  Skeleton,
  TextField,
  Box,
  Grid,
} from "@mui/material";
import { useEffect, useState } from "react";

function OldProductDetails() {
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack spacing={1} alignItems="flex-start" padding={"16px"}>
      {loading ? (
        <Skeleton height={"25px"} width={"350px"} />
      ) : (
        <Typography lineHeight={"25px"} fontFamily="Poppins" fontWeight={500}>
          Is the customer selling an old product?
        </Typography>
      )}

      

        <Box
          sx={{
            padding: "16px",
            border: "1px solid #9fa8af",
            borderRadius: "12px",
            width: "100%",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Product Quantity"
                name="productQuantity"
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
                name="productQuantity"
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
          </Grid>
        </Box>
      
    </Stack>
  );
}

export default OldProductDetails;
