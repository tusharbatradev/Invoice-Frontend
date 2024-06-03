import React from "react";
import { Box, Typography, Stack, Divider, Chip } from "@mui/material";
import InvoiceAnimation from "../assets/InvoiceAnimation.gif";
import { ForwardIcon } from "../assets/CustomIcons/Icons";
import { useNavigate } from "react-router-dom";

const InvoiceCard = ({
  date,
  invoice_id,
  customerFirstName,
  customerLastName,
  customerCity,
}) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        width: "45%",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        marginBottom: "16px",
        backgroundColor: "white",
      }}
    >
      <Stack>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "14px" }}
        >
          Invoice Id: {invoice_id}
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "14px" }}
        >
          Invoice Date: {date}
        </Typography>
        <Divider />
      </Stack>

      <Stack
        paddingY={"10px"}
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "18px" }}
          >
            {customerFirstName} {customerLastName}
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "18px" }}
          >
            {customerCity}
          </Typography>
          <Typography
            onClick={() => navigate("bill")}
            sx={{
              marginTop: "12px",
              paddingY: "2px",
              paddingX: "6px",
              border: "1px solid #0c1526",
              borderRadius: "16px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontSize: "12px",
              cursor: "pointer",
              width: "120px",
              minWidth: "110px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            More Details <ForwardIcon />
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={InvoiceAnimation} width={"200px"} />
          <Chip
            label="PAID"
            sx={{
              marginTop: "-15px",
              backgroundColor: "#93bb02",
              color: "white",
              width: "100px",
              fontFamily: "Poppins",
              fontSize: "16px",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default InvoiceCard;
