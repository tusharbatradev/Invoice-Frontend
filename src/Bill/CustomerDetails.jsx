import { Box, Stack, Typography, Divider } from "@mui/material";

function CustomerDetails({ invoiceData }) {
  const { customer } = invoiceData;
  return (
    <Stack spacing={0.5}>
      <Box
        sx={{
          backgroundColor: "#0c1526",
          p: "4px 8px",
          width: "70px",
        }}
      >
        <Typography
          fontFamily={"Poppins"}
          fontWeight={400}
          fontSize={18}
          color={"white"}
        >
          Bill To
        </Typography>
      </Box>
      <Typography fontFamily={"Poppins"} fontWeight={400} fontSize={18}>
        {customer.customerFirstName} {customer.customerLastName}
      </Typography>
      <Typography fontFamily={"Poppins"} fontWeight={400} fontSize={18}>
        Mobile : {customer.customerContact}
      </Typography>
    </Stack>
  );
}

export default CustomerDetails;
