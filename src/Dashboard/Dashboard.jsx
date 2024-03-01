import { Typography, Stack, Container } from "@mui/material"

function Dashboard() {
    return (
        <Container>
            <Stack height={"100vh"} justifyContent={'center'} alignItems={'center'}>
                <Typography fontSize={36} fontWeight={500} fontFamily={'Poppins'}>Web Builders</Typography>
            </Stack>
        </Container>
    )
}

export default Dashboard