import { Typography, Stack, Divider, Paper, Box } from "@mui/material"
import InvoiceData from "./InvoiceTable"
import { DashboardIcon } from "../assets/CustomIcons/Icons"

function DashboardPage() {

    return (
        <Stack spacing={'8px'} sx={{
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

            {/* Stack for showing the Gold and Silver Price */}
            <Stack padding={'16px'} direction={'row'} spacing={'16px'}>
                <Box
                    sx={{
                        border: '1px solid #d9dfe5',
                        padding: '12px',
                        width: '50%',
                        borderRadius: '8px',
                        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s ease',
                        fontSize: '18px',
                        fontWeight: 500,
                        display: 'flex',
                        justifyContent: 'space-between',
                        '&:hover': {
                            boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    Gold Price(Per Gram)
                    <span>
                        ₹ 6,347
                    </span>
                </Box>
                <Box
                    sx={{
                        border: '1px solid #d9dfe5',
                        padding: '12px',
                        width: '50%',
                        borderRadius: '8px',
                        boxShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
                        transition: 'box-shadow 0.3s ease',
                        fontSize: '18px',
                        fontWeight: 500,
                        display: 'flex',
                        justifyContent: 'space-between',
                        '&:hover': {
                            boxShadow: '3px 3px 6px rgba(0, 0, 0, 0.2)'
                        }
                    }}
                >
                    Silver Price(Per Gram)
                    <span>
                        ₹ 73.60
                    </span>
                </Box>
            </Stack>
            <Divider />

            <InvoiceData />
        </Stack>)
}

export default DashboardPage