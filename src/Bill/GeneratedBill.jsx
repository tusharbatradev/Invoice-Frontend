import { Stack, Typography, Box, Divider } from "@mui/material";
import InvoiceDetails from "./InvoiceDetails";
import BusinessDetails from "./BuisinessDetails";
import CustomerDetails from "./CustomerDetails";
import { dummyData } from "./dummyData";
import InvoiceItemTable from "./InvoiceItemTable";

function GeneratedBill({ invoiceData }) {
  return (
    <Stack
      sx={{
        width: "100%",
        backgroundColor: "#f2f2f2",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px",
      }}
    >
      {/* A4 Size Stack */}
      <Stack
        spacing={8}
        sx={{
          backgroundColor: "#fff",
          width: "21cm",
          height: "29.7cm",
          padding: "30px",
        }}
      >
        <Stack
          display={"flex"}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <BusinessDetails />
          <InvoiceDetails invoiceData={invoiceData} />
        </Stack>
        <CustomerDetails invoiceData={invoiceData} />
        <InvoiceItemTable invoiceData={invoiceData} />
      </Stack>
    </Stack>
  );
}

export default GeneratedBill;
