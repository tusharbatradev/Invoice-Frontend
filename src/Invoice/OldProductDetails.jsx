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
        <Skeleton width={"140px"} height={"25px"} />
      ) : (
        <Typography lineHeight={"25px"} fontFamily={"Poppins"} fontWeight={500}>
          Enter old product details
        </Typography>
      )}
      {loading ? (
        <Skeleton height={"174px"} width={"100%"} />
      ) : (
        <Box
          sx={{
            padding: "16px",
            border: "1px solid #9fa8af",
            borderRadius: "12px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Old silver quantity
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
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
                placeholder="Enter old silver quantity"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Old silver cost
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
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
                placeholder={"Enter old silver cost"}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Old gold quantity
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
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
                placeholder={"Enter old gold quantity"}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Old gold cost
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
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
                placeholder={"Enter old gold cost"}
              />
            </Grid>
          </Grid>
        </Box>
      )}
    </Stack>
  );
}

export default OldProductDetails;
