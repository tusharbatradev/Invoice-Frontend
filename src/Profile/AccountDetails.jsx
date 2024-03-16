import { Stack, Box, TextField, Typography, Button } from "@mui/material"
import Logo from "../assets/Logo.jpg";
import { ContactIcon, EditedIcon, UserIcon } from "../assets/CustomIcons/Icons";


function AccountDetails() {
    return (
        <Stack padding={4} direction={'row'} spacing={6} alignItems={'center'}>

            {/* Logo Stack */}
            <Stack>
                <Box sx={{
                    backgroundColor: 'black',
                    width: '350px',
                    height: '350px',
                    borderRadius: '50%',
                    // backgroundImage: `url(${Logo})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }} />

                <Button sx={{
                    fontSize: '18px',
                    fontFamily: 'Poppins',
                    color: 'black'
                }}>EDIT LOGO</Button>
            </Stack>


            <Stack padding={2} spacing={3}>
                {/* UserName */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}>
                    <Typography fontFamily={'Poppins'}>UserName:-</Typography>
                    <TextField
                        value={'__web_builders__'}
                        disabled
                        InputProps={{
                            endAdornment: (
                                <UserIcon />
                            ),
                        }}
                        sx={{
                            "& .MuiInputBase-root": {
                                height: "40px",
                                width: '250px',
                                borderRadius: "8px",
                                "&.Mui-focused fieldset": {
                                    borderColor: "#555555",
                                },
                            },
                        }}
                    />
                </Box>

                {/* Name */}
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}>
                    <Typography fontFamily={'Poppins'}>Your Name:-</Typography>
                    <TextField
                        value={'Web Builders'}
                        disabled
                        InputProps={{
                            endAdornment: (
                                <UserIcon />
                            ),
                        }}
                        sx={{
                            "& .MuiInputBase-root": {
                                height: "40px",
                                width: '250px',
                                borderRadius: "8px",
                                "&.Mui-focused fieldset": {
                                    borderColor: "#555555",
                                },
                            },
                        }}
                    />
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px'
                }}>
                    <Typography fontFamily={'Poppins'}>Contact Number:-</Typography>
                    <TextField
                        value={'9589540876'}
                        disabled
                        InputProps={{
                            endAdornment: (
                                <ContactIcon />
                            ),
                        }}
                        sx={{
                            "& .MuiInputBase-root": {
                                height: "40px",
                                width: '250px',
                                borderRadius: "8px",
                                "&.Mui-focused fieldset": {
                                    borderColor: "#555555",
                                },
                            },
                        }}
                    />
                </Box>

            </Stack>
        </Stack>
    )
}

export default AccountDetails