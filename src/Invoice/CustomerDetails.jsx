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
          Customer Details
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
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                First name
                <span
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "2px",
                  }}
                >
                  *
                </span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={firstName}
                placeholder="Enter first name"
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
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Last name
                <span
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "2px",
                  }}
                >
                  *
                </span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={lastName}
                placeholder="Enter last name"
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
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Contact number
                <span
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "2px",
                  }}
                >
                  *
                </span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={contactNumber}
                placeholder="Enter contact number"
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
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Address
                <span
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "2px",
                  }}
                >
                  *
                </span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={address}
                placeholder="Enter address"
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
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                City / Village
                <span
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "2px",
                  }}
                >
                  *
                </span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={cityOrVillage}
                placeholder="Enter city / village"
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
              <Typography
                fontFamily={"Poppins"}
                fontSize={"16px"}
                fontWeight={500}
                color={"#0c1526"}
              >
                Pincode
                <span
                  style={{
                    color: "red",
                    alignSelf: "center",
                    marginLeft: "2px",
                  }}
                >
                  *
                </span>
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={pincode}
                placeholder="Enter pincode"
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
