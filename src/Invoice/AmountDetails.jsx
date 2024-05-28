import {
  Typography,
  Box,
  Stack,
  TextField,
  Button,
  Skeleton,
} from "@mui/material";
import { InvoiceIcon } from "../assets/CustomIcons/Icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateInvoiceField } from "../redux/Slices/invoiceSlice";
function AmountDetails({ formData, setFormData, generateInvoice }) {
  const dispatch = useDispatch();
  const invoice = useSelector((state) => state.invoice.invoice);
  const { grandTotal, total, gst, amountPaid, discount, remainingBalance } =
    invoice;
  const handleChange = (e, fieldName) => {
    const { value } = e.target;
    dispatch(
      updateInvoiceField({
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
    <>
      {/* Total Amount Details */}
      <Stack padding={"16px"} spacing={"16px"}>
        {loading ? (
          <Skeleton height={"80px"} />
        ) : (
          <Box
            sx={{
              border: "1px solid #9fa8af",
              padding: "8px",
              borderRadius: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
          >
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                Total amount
              </Typography>
              <TextField
                disabled
                value={total}
                onChange={(e) => handleChange(e, "total")}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                    borderRadius: "8px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    backgroundColor: "#D0D5D7",
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder="Enter total amount"
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                GST
              </Typography>
              <TextField
                value={gst}
                onChange={(e) => handleChange(e, "gst")}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                    borderRadius: "8px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder="Enter GST"
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                Discount
              </Typography>
              <TextField
                value={discount}
                onChange={(e) => handleChange(e, "discount")}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                    borderRadius: "8px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder="Enter discount"
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                Grand total
              </Typography>
              <TextField
                disabled
                value={grandTotal}
                onChange={(e) => handleChange(e, "grandTotal")}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                    borderRadius: "8px",
                    backgroundColor: "#D0D5D7",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                Amount paid
              </Typography>
              <TextField
                value={amountPaid}
                onChange={(e) => handleChange(e, "amountPaid")}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                    borderRadius: "8px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder="Enter amount paid"
              />
            </Stack>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography fontFamily={"Poppins"} fontWeight={500}>
                Remaining balance
              </Typography>
              <TextField
                value={remainingBalance}
                onChange={(e) => handleChange(e, "remainingBalance")}
                sx={{
                  "& .MuiInputBase-root": {
                    height: "30px",
                    borderRadius: "8px",
                    fontFamily: "Poppins",
                    fontWeight: 600,
                    "&.Mui-focused fieldset": {
                      borderColor: "#555555",
                    },
                  },
                }}
                placeholder="Enter remaining balance"
              />
            </Stack>
          </Box>
        )}

        <Button
          sx={{
            backgroundColor: "#0c1526",
            padding: "12px",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: 600,
            display: "flex",
            gap: "8px",
            "&:hover": {
              backgroundColor: "#1d2659",
            },
          }}
          variant="contained"
          onClick={generateInvoice}
        >
          Generate Invoice <InvoiceIcon />
        </Button>
      </Stack>
    </>
  );
}

export default AmountDetails;
