import { Box, Typography, Button, Dialog, Stack } from "@mui/material";
import { ProfileIcon, LogOutIcon } from "../assets/CustomIcons/Icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileButton() {

    const [open, setOpen] = useState(false)

    function LogOut() {
        localStorage.removeItem("token");
        window.location.reload();
    }

    const navigate = useNavigate();

    return (
        <Box sx={{ p: '0px', backgroundColor: '#1d2646', }}>
            <Box
            onClick={() => navigate('/dashboard/profile')}
            sx={{
                padding: '8px 12px 35px',
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

            <Box sx={{
                padding: '8px 12px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                fontFamily: 'Poppins',
                fontWeight: '28px',
                fontSize: '1.25rem',
                color: '#fff',
            }}
                onClick={() => setOpen(true)}
            >
                <LogOutIcon /> LogOut
            </Box>
            <Dialog
                PaperProps={{
                    sx: {
                        padding: '45px 35px',
                        display : 'flex',
                        flexDirection : 'column',
                        gap : '20px'
                    }
                }}
                open={open}
            >
                <Typography fontSize={22} fontWeight={500} fontFamily={'Poppins'}>Are you sure you want to log out?</Typography>
                <Stack direction={'row'} justifyContent={'center'} spacing={2}>
                    <Button
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize : '18px',
                            width : '100px',
                            color: 'white',
                            backgroundColor : '#060a13',
                            "&:hover": {
								backgroundColor: "#0e1335"
							}
                        }}
                        onClick={() => LogOut()}
                    >
                        YES
                    </Button>
                    <Button
                        sx={{
                            fontFamily: 'Poppins',
                            fontWeight: 500,
                            fontSize : '18px',
                            width : '100px',
                            color: 'black',
                            border : '1px solid #060a13',
                            padding : '12px'
                        }}
                        onClick={() => setOpen(false)}
                    >
                        NO
                    </Button>
                </Stack>
            </Dialog>
        </Box>)
}

export default ProfileButton