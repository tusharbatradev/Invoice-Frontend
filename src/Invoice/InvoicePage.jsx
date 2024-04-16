import { useState } from "react";
import { Stack, Button, Typography } from "@mui/material";
import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";
import OldProductDetails from "./OldProductDetails";
import AmountDetails from "./AmountDetails";
import axios from "axios";
import { addProduct } from "../redux/Slices/invoiceSlice";
import { useSelector, useDispatch } from "react-redux";

function InvoicePage() {
  const products = useSelector((state) => state.invoice.products);
  console.log("invoice products", products);
  const dispatch = useDispatch();
  const handleAddNewProduct = (e) => {
    e.preventDefault();
    const newId = Math.max(...products.map((product) => product.id), 0) + 1;
    console.log(newId);
    dispatch(
      addProduct({
        id: newId,
        product: "",
        productWeight: 0,
        productCost: 0,
        productQuantity: 1,
        makingCharges: 0,
        productId: "",
        productAmount: 0,
      })
    );
  };

  console.log("invoice slice data", products);
  const [formData, setFormData] = useState({
    customer: {
      firstName: "",
      lastName: "",
      contactNumber: "",
      address: "",
      cityOrVillage: "",
      pincode: "",
    },
    product: [
      {
        productName: "",
        productWeight: "",
        productCost: "",
        makingCharges: "",
        productId: "",
        productQuantity: "",
        id: "",
      },
    ],
    // oldProducts: {},
    invoice: {
      grandTotal: 100,
      gst: 20,
      amountPaid: 100,
      discount: 10,
      remainingBalance: 10,
    },
  });

  const generateInvoice = () => {
    axios
      .post("http://localhost:3001/invoice/", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((response) => {
        console.log("Invoice generated successfully:", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Stack spacing={"-15px"}>
      <CustomerDetails formData={formData} setFormData={setFormData} />
      {products.length !== 0 && (
        <Typography lineHeight={"25px"} fontFamily={"Poppins"} fontWeight={500}>
          Product Details{" "}
          <span style={{ color: "red", alignSelf: "center" }}>*</span>
        </Typography>
      )}
      {products.map((prod) => (
        <ProductDetails id={prod?.id} />
      ))}
      <Button
        onClick={handleAddNewProduct}
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
        Add products +
      </Button>
      <OldProductDetails />
      <AmountDetails
        formData={formData}
        setFormData={setFormData}
        generateInvoice={generateInvoice}
      />
    </Stack>
  );
}

export default InvoicePage;
