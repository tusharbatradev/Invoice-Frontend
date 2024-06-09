import { Stack, Typography } from "@mui/material";

function InvoiceDetails({ invoiceData }) {
  const { invoice_number } = invoiceData;
  return (
    <>
      <Stack padding={1}>
        <Typography fontFamily={"Poppins"} fontWeight={400} fontSize={16}>
          Invoice No. = {invoice_number}
        </Typography>
        <Typography fontFamily={"Poppins"} fontWeight={400} fontSize={16}>
          Invoice Date :- 08-03-2024
        </Typography>
      </Stack>
    </>
  );
}

export default InvoiceDetails;
