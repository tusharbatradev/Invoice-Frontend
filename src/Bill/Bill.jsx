import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { BackIcon } from "../assets/CustomIcons/Icons";
import axios from "axios";
import BillHeader from "./BillHeader";
import GeneratedBill from "./GeneratedBill";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
function Bill() {
  const { id } = useParams();
  const [invoiceData, setInvoiceData] = useState();
  async function fetchInvoiceById() {
    try {
      const response = await axios.get(
        `https://new-invoice-backend.onrender.com/invoice/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      );
      if (response.status === 200) {
        setInvoiceData(response?.data?.invoice);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  useEffect(() => {
    fetchInvoiceById();
  }, [id]);
  return (
    <>
      <Stack
        spacing={"8px"}
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          padding: "14px",
          borderRadius: "8px",
        }}
      >
        <BillHeader />

        {invoiceData && <GeneratedBill invoiceData={invoiceData} />}
      </Stack>
    </>
  );
}

export default Bill;
