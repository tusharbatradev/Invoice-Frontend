import { Divider, IconButton, Stack, Typography } from "@mui/material"
import { BackIcon } from "../assets/CustomIcons/Icons"
import BusinessDetails from "./CustomerDetails"
import InvoicePage from "./InvoicePage"
import { useNavigate } from "react-router-dom"


function Invoice() {

    const navigate = useNavigate();

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
                fontSize: 24,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <IconButton onClick={() => navigate('/dashboard')}>
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