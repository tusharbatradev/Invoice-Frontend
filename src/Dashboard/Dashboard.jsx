import { Typography, Stack, Container, Box } from "@mui/material"
import MenuList from "./MenuList"

function Dashboard() {
    return (
            <Stack padding={'9px'} height={'97vh'}>
                <Box sx={{ backgroundColor: '#0c1526', width: '17.5%', height: '100%', borderRadius:'8px', padding:'12px' }}>
                    <MenuList />
                </Box>
            </Stack>
    )
}

export default Dashboard