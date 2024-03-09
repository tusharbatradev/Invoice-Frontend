import { Stack, Typography, Box } from "@mui/material"

function BusinessDetails() {
    return (
    <Stack display={'flex'} direction={'row'} spacing={'10px'}>
        {/* Logo */}
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '120px',
                width: '120px',
                backgroundColor: '#282725',
                borderRadius: '50%',
                color: '#fff',
                textAlign: 'center'
            }}
        >
            Logo
        </Box>
        {/* Business Decription */}
        <Stack padding={1}>
            <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16}>
                Business Name :- WEB BUILDERS
            </Typography>
            <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16}>
                Mobile No. :- +91 9589540876
            </Typography>
            <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16}>
                Address :- Example Colony
            </Typography>
            <Typography fontFamily={'Poppins'} fontWeight={400} fontSize={16}>
                GST NO. :- ***********
            </Typography>
        </Stack>
    </Stack>)
}

export default BusinessDetails