import { useEffect, useState } from "react";
import {
  Box,
  Stack,
  TextField,
  Typography,
  Grid,
  Skeleton,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateCustomerField } from "../redux/Slices/invoiceSlice";
function CustomerDetails({ formData, setFormData }) {
  const dispatch = useDispatch();
  const customer = useSelector((state) => state.invoice.customer);
  const {
    firstName,
    lastName,
    contactNumber,
    address,
    cityOrVillage,
    pincode,
  } = customer;
  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    console.log(value);
    console.log("fieldName", fieldName);
    dispatch(
      updateCustomerField({
        key: fieldName,
        value: value,
      })
    );
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack padding={"16px"} spacing={"4px"}>
      {loading ? (
        <Skeleton width={"140px"} height={"25px"} />
      ) : (
        <Typography lineHeight={"25px"} fontFamily={"Poppins"} fontWeight={500}>
          Customer Details{" "}
          <span style={{ color: "red", alignSelf: "center" }}>*</span>
        </Typography>
      )}

      {loading ? (
        <Skeleton height={"185px"} />
      ) : (
        <Box
          sx={{
            padding: "16px",
            border: "1px solid #9fa8af",
            borderRadius: "12px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => handleChange(e, "firstName")}
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
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => handleChange(e, "lastName")}
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
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) => handleChange(e, "contactNumber")}
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
                placeholder="Enter address"
                value={address}
                onChange={(e) => handleChange(e, "address")}
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
                placeholder="Enter city or village"
                value={cityOrVillage}
                onChange={(e) => handleChange(e, "cityOrVillage")}
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
                placeholder="Enter pincode"
                value={pincode}
                onChange={(e) => handleChange(e, "pincode")}
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
      )}
    </Stack>
  );
}

export default CustomerDetails;
