import React, { useState, useEffect } from "react";
import { Box, Chip, Stack, TextField, Typography } from "@mui/material";
import { Search, TransactionIcon } from "../assets/CustomIcons/Icons";
import axios from "axios";
import InvoiceCard from "./InvoiceCard";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "customerFirstName",
    headerName: "First name",
    width: 150,
  },
  {
    field: "customerLastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "customerContact",
    headerName: "Contact Number",
    width: 150,
  },
  {
    field: "customerAddress",
    headerName: "Address",
    width: 150,
  },
  {
    field: "invoiceDate",
    headerName: "Date of Invoice",
    width: 150,
  },
  {
    field: "grandTotal",
    headerName: "Total Amount",
    width: 150,
  },
];

export default function InvoiceData() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get(
          "https://new-invoice-backend.onrender.com/invoice/",
          {
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (response.status === 200) {
          const formattedData = response.data.invoice.map(
            (invoiceData, index) => {
              return {
                ...invoiceData.customer,
                id: index + 1,
                customerFirstName: invoiceData.customer.customerFirstName,
                customerLastName: invoiceData.customer.customerLastName,
                customerContact: invoiceData.customer.customerContact,
                customerAddress: invoiceData.customer.customerAddress,
                customerCity: invoiceData.customer.customerCity,
                customerPincode: invoiceData.customer.customerPincode,
                invoiceDate: invoiceData.invoice.date, // Change 'date' to the actual field name
                grandTotal: invoiceData.invoice.grandTotal,
                gst: invoiceData.invoice.gst,
                discount: invoiceData.invoice.discount,
                amountPaid: invoiceData.invoice.amountPaid,
                remainingBalance: invoiceData.invoice.remainingBalance,
                invoiceNumber: invoiceData.invoice.invoiceNumber, // Assuming 'invoiceNumber' is the field name
              };
            }
          );
          setRows(formattedData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Stack paddingX={"60px"} gap={"16px"}>
      <TextField
        InputProps={{
          endAdornment: <Search />,
        }}
        placeholder="Search for invoice by Customer's Name"
        sx={{
          width: "100%",
          "& .MuiInputBase-root": {
            height: "45px",
            borderRadius: "8px",
            "&.Mui-focused fieldset": {
              borderColor: "#0c1526",
            },
            "& input::placeholder": {
              fontFamily: "Poppins, sans-serif",
            },
          },
        }}
      />
      <Stack direction={"row"} gap={"8px"}>
        <Chip
          sx={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            backgroundColor: "#0c1526",
            color: "white",
          }}
          label="Paid"
        />
        <Chip
          sx={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            color: "#0c1526",
          }}
          label="Incomplete Payment"
        />
        <Chip
          sx={{
            fontFamily: "Poppins",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
            color: "#0c1526",
          }}
          label="Date"
        />
      </Stack>

      <Stack sx={{
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        backgroundColor : '#0c1526',
        padding : '16px',
        justifyContent : 'space-between',
        borderRadius : '16px'
      }}>   
        {rows.map((row) => (
          <InvoiceCard
            key={row.id}
            date={row.invoiceDate}
            invoiceNumber={row.invoiceNumber}
            customerFirstName={row.customerFirstName}
            customerLastName={row.customerLastName}
            customerAddress={row.customerAddress}
          />
        ))}
      </Stack>
    </Stack>
  );
}
