import React, { useState, useEffect } from "react";
import {
  Box,
  Chip,
  Skeleton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Search, TransactionIcon } from "../assets/CustomIcons/Icons";
import axios from "axios";
import InvoiceCard from "./InvoiceCard";
import { debounce } from "../utils";

export default function InvoiceData() {
  const [invoices, setInvoices] = useState([]);
  const [filteredInvoices, setFilteredInvoices] = useState([]);
  const [search, setSearch] = useState("");
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
                invoiceDate: invoiceData.invoice.date,
                grandTotal: invoiceData.invoice.grandTotal,
                gst: invoiceData.invoice.gst,
                discount: invoiceData.invoice.discount,
                amountPaid: invoiceData.invoice.amountPaid,
                remainingBalance: invoiceData.invoice.remainingBalance,
                invoiceNumber: invoiceData.invoice.invoiceNumber,
              };
            }
          );
          setInvoices(formattedData);
          setFilteredInvoices(formattedData);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  useEffect(() => {
    debounce(() => {
      const filtered = invoices?.reverse().filter((invoice) => {
        if (
          `${invoice.customerFirstName} ${invoice.customerLastName}`
            .toLowerCase()
            .includes(search.toLowerCase())
        )
          return invoice;
      });
      setFilteredInvoices(filtered);
    }, 1000)();
  }, [search]);

  return (
    <Stack paddingX={"60px"} gap={"16px"}>
      <TextField
        InputProps={{
          endAdornment: <Search />,
        }}
        placeholder="Search for invoice by Customer's Name"
        onChange={(e) => setSearch(e.target.value)}
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

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          backgroundColor: "#0c1526",
          padding: "16px",
          justifyContent: "space-between",
          borderRadius: "16px",
        }}
      >
        {filteredInvoices.reverse().map((row) => (
          <InvoiceCard
            key={row.id}
            date={row.invoiceDate}
            invoiceNumber={row.invoiceNumber}
            customerFirstName={row.customerFirstName}
            customerLastName={row.customerLastName}
            customerCity={row.customerCity}
          />
        ))}
      </Stack>
    </Stack>
  );
}
