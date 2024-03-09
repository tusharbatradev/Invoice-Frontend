import { Stack, Typography, Box } from "@mui/material"
import InvoiceDetails from "./InvoiceDetails"
import BusinessDetails from "./BuisinessDetails"


function GeneratedBill() {
    return (

        <Stack sx={{
            width: '100%',
            backgroundColor: '#f2f2f2',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '12px'
        }}>
            {/* A4 Size Stack */}
            <Stack sx={{
                backgroundColor: '#fff',
                width: '21cm',
                height: '29.7cm',
                padding: '30px'
            }}>
                <Stack display={'flex'} direction={'row'} justifyContent={'space-between'}>
                    <BusinessDetails />
                    <InvoiceDetails />
                </Stack>
                
            </Stack>
        </Stack>

    )
}

export default GeneratedBill