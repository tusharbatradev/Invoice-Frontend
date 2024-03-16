import { Typography, Stack, Divider } from "@mui/material"
import AccountDetails from "./AccountDetails"

function Profile() {
    return (
        <Stack spacing={'8px'} sx={{
            backgroundColor: '#fff',
            width: '100%',
            padding: '14px',
            borderRadius: '8px'
        }}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: 24,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                Profile :-
            </Typography>
            <Divider />
            <AccountDetails />
        </Stack>
    )
}

export default Profile