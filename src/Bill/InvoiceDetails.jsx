import { Stack, Typography } from "@mui/material"

function InvoiceDetails() {
    return (<>
        <Stack padding={1}>
            <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16}>
               Invoice No. = 101
            </Typography>
            <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16}>
                Invoice Date :- 08-03-2024
            </Typography>
        </Stack>
    </>)
}

export default InvoiceDetails