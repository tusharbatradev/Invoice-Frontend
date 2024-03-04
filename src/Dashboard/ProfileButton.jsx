import { Box, Typography } from "@mui/material";
import { ProfileIcon } from "../assets/CustomIcons/Icons";

function ProfileButton() {
    return (
        <Box sx={{ p: '0px', backgroundColor: '#1d2646', }}>
            <Box sx={{
                padding: '8px 12px 45px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontWeight: '28px',
                fontSize: '1.25rem',
                color: '#fff',
            }}
            >
                <ProfileIcon /> Profile
            </Box>
            <Box sx={{padding:'5px'}}>
                <Typography color={'#fff'}>
                    Powered by __web_builders__
                </Typography>
            </Box>

        </Box>)
}

export default ProfileButton