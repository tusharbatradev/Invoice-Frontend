import React, { useState } from "react";
import { Divider, Stack } from "@mui/material";
import ProductHeader from "./ProductHeader";
import Table from "./ProductTable";

function Product() {
  const [reload, setReload] = useState(false);
  return (
    <Stack
      spacing={"8px"}
      sx={{
        backgroundColor: "#fff",
        width: "100%",
        padding: "14px",
        borderRadius: "8px",
      }}
    >
      <ProductHeader setReload={setReload} />
      <Divider />
      <Table reload={reload} setReload={setReload} />
    </Stack>
  );
}

export default Product;
