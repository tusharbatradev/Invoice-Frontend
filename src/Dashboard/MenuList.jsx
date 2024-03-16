import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material"
import { DashboardIcon, ProductIcon, InvoiceIcon } from "../assets/CustomIcons/Icons";

function MenuList() {
    // State for background color of Chips
    const [dashboardColor, setdashboardColor] = useState('#2b386a');
    const [productColor, setProductColor] = useState('');
    const [InvoiceColor, setInvoiceColor] = useState('');

    const navigate = useNavigate();
    // Products function for navigation
    const Product = () => {
        setProductColor('#2b386a');
        setdashboardColor('');
        setInvoiceColor('');
        navigate('/dashboard/product')
    }

    const Invoice = () => {
        setInvoiceColor('#2b386a');
        setProductColor('');
        setdashboardColor('');
        navigate('/dashboard/invoice')
    }

    const Dashboard = () => {
        setInvoiceColor('');
        setProductColor('');
        setdashboardColor('#2b386a');
        navigate('/dashboard')
    }


    return (
        <Box sx={{padding: "12px 12px 0px 12px",}}>

            {/* Profile Box */}
            <Stack display={'flex'} direction={'row'} spacing={'12px'}>
                <Box sx={{ height: '50px', width: '50px', backgroundColor: '#fff', borderRadius: '50%' }} />
                {/* Business Decription */}
                <Stack justifyContent={'center'}>
                    <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16} color={'#fff'}>
                        Business Name
                    </Typography>
                    <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={'0.8rem'} color={'#fff'}>
                        +91 9589540875
                    </Typography>
                </Stack>
            </Stack>

            {/* Dashboard list items Chips */}
            <Stack mt={5} spacing={2}>

                {/* Dashboard Navigation Chip */}
                <Typography sx={{
                    backgroundColor: dashboardColor,
                    padding: '8px 12px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                    fontWeight: '16px',
                    color: '#fff',
                }}
                    onClick={Dashboard}
                >
                    <DashboardIcon /> Dashboard
                </Typography>

                {/* Create Product Navigation Chip */}
                <Typography sx={{
                    backgroundColor: productColor,
                    padding: '8px 12px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                    fontWeight: '16px',
                    color: '#fff',
                }}
                    onClick={Product}
                >
                    <ProductIcon /> Products
                </Typography>

                {/* Invoice Navigation Chip */}
                <Typography sx={{
                    backgroundColor: InvoiceColor,
                    padding: '8px 12px',
                    borderRadius: '100px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer',
                    fontFamily: 'Poppins',
                    fontWeight: '16px',
                    color: '#fff',
                }}
                    onClick={Invoice}
                >
                    <InvoiceIcon /> Invoice
                </Typography>
            </Stack>
        </Box>
    )
}

export default MenuList