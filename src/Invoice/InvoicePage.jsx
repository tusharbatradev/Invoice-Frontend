import { Stack, Typography, Box, TextField } from "@mui/material"
import CustomerDetails from "./CustomerDetails"
import ProductDetails from "./ProductDetails"
import OldProductDetails from "./OldProductDetails"
import AmountDetails from "./AmountDetails"


function InvoicePage() {
    return (
        <Stack spacing={'-15px'}>
            <CustomerDetails />
            <ProductDetails />
            <OldProductDetails />
            <AmountDetails />         
        </Stack>
    )
}

export default InvoicePage