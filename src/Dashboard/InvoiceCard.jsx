import React from "react";
import { Box, Typography } from "@mui/material";

const InvoiceCard = ({
  date,
  invoiceNumber,
  customerFirstName,
  customerLastName,
  customerAddress,
}) => {
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "45%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
        backgroundColor : 'white'
      }}
    >
      <Typography
        variant="h6"
        sx={{ fontFamily: "Poppins, sans-serif", marginBottom: "8px" }}
      >
        Invoice Date: {date}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif" }}>
        Invoice Number: {invoiceNumber}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif" }}>
        Customer: {customerFirstName} {customerLastName}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Poppins, sans-serif" }}>
        Address: {customerAddress}
      </Typography>
    </Box>
  );
};

export default InvoiceCard;
