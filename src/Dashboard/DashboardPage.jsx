import { Typography, Stack, Divider, Paper, Box } from "@mui/material"
import InvoiceData from "./InvoiceTable"
import { DashboardIcon } from "../assets/CustomIcons/Icons"

function DashboardPage() {

    return (
        <Stack spacing={'16px'} sx={{
            backgroundColor: '#fff',
            width: '100%',
            padding: '14px',
            borderRadius: '8px'
        }}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}>Your Dashboard <DashboardIcon />
            </Typography>

            <Divider />

            <InvoiceData />
        </Stack>)
}

export default DashboardPage