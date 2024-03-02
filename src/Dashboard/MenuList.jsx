import { Stack, Box, Typography } from "@mui/material"

function MenuList() {
    return (
        <Stack>

            {/* Profile Box */}
            <Stack display={'flex'} direction={'row'} spacing={'12px'}>
                <Box sx={{ height: '50px', width: '50px', backgroundColor: '#fff', borderRadius: '50%' }} />
                {/* Business Decription */}
                <Stack>
                    <Typography color={'#fff'}>
                        Business Name
                    </Typography>
                    <Typography color={'#fff'}>
                        +91 9589540875
                    </Typography>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default MenuList