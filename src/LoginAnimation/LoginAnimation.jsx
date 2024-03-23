import Animation3 from "../assets/Animation3.gif";
import { Stack, Typography } from "@mui/material";

function LoginAnimation() {
    return (
        <>
            <Stack sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', 
            }}
            >
                <img src={Animation3} alt="Welcome Image" />
                <Typography color={'#192c55'} fontSize={24} fontWeight={500} fontFamily={'Poppins'}>Powered by Web Builders</Typography>
            </Stack>
        </>
    )
}

export default LoginAnimation