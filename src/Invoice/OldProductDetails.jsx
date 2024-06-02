import {
  Radio,
  FormControlLabel,
  Stack,
  Typography,
  Skeleton,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  updateOldGoldField,
  updateOldSilverField,
  updateInvoiceField,
} from "../redux/Slices/invoiceSlice";
import { useDispatch } from "react-redux";

function OldProductDetails() {
  const [selectedOption, setSelectedOption] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const oldGold = useSelector((state) => state.invoice.oldGold);
  const oldSilver = useSelector((state) => state.invoice.oldSilver);
  const invoice = useSelector((state) => state.invoice.invoice);
  function handleChangeOldSilver(e) {
    const { name, value } = e.target;
    dispatch(updateOldSilverField({ key: name, value: value }));
  }
  function handleChangeOldGold(e) {
    const { name, value } = e.target;
    dispatch(updateOldGoldField({ key: name, value: value }));
  }
  const handleSubtraction = () => {
    const total_old = Number(oldSilver?.cost) + Number(oldGold?.cost);

    const revised_grand_total =
      invoice.total +
      invoice.total * (invoice.gst / 100) -
      invoice.discount -
      total_old;
    dispatch(
      updateInvoiceField({ key: "grandTotal", value: revised_grand_total })
    );
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
                Old silver weight
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="weight"
                value={oldSilver?.weight}
                onChange={(e) => handleChangeOldSilver(e)}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px",
                    borderRadius: "8px",
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder="Enter old silver weight"
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
                name="cost"
                onChange={(e) => handleChangeOldSilver(e)}
                value={oldSilver?.cost}
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
                Old gold weight
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                name="weight"
                value={oldGold?.weight}
                onChange={(e) => handleChangeOldGold(e)}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "40px",
                    borderRadius: "8px",
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder={"Enter old gold weight"}
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
                name="cost"
                value={oldGold?.cost}
                onChange={(e) => handleChangeOldGold(e)}
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
      <Stack paddingX={"16px"} spacing={"4px"} paddingY={"16px"}>
        <Button
          onClick={handleSubtraction}
          sx={{
            backgroundColor: "#0c1526",
            height: "35px",
            width: "100%",
            fontFamily: "Poppins",
            marginTop: "16px",
            "&:hover": {
              backgroundColor: "#1d2659",
            },
          }}
          variant="contained"
        >
          Click here to Subtract old products cost from total amount.
        </Button>
      </Stack>
    </Stack>
  );
}

export default OldProductDetails;
