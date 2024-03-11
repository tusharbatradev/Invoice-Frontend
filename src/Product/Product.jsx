import React from 'react';
import { Divider, Stack } from "@mui/material";
import ProductHeader from "./ProductHeader";
import Table from "./ProductTable";

function Product() {
    return (
        <Stack spacing={'8px'} sx={{
            backgroundColor: '#fff',
            width: '100%',
            padding: '14px',
            borderRadius: '8px'
        }}>

            <ProductHeader />
            <Divider />
            <Table />
        </Stack>
    );
}

export default Product;
