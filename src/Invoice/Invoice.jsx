import { Divider, IconButton, Stack, Typography } from "@mui/material"
import { BackIcon } from "../assets/CustomIcons/Icons"
import BusinessDetails from "./CustomerDetails"
import InvoicePage from "./InvoicePage"


function Invoice() {
    return (<>
        <Stack spacing={'8px'} sx={{
            backgroundColor: '#fff',
            width: '100%',
            padding: '14px',
            borderRadius: '8px'
        }}>
            {/* Page Heading */}
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <IconButton>
                    <BackIcon />
                </IconButton>
                Create Sales Invoice
            </Typography>

            <Divider />
            
            <InvoicePage />
        </Stack>
    </>)
}

export default Invoice