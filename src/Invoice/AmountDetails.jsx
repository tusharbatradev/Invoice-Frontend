import { Typography, Box, Stack, TextField, Button } from "@mui/material"
import { InvoiceIcon } from "../assets/CustomIcons/Icons"

function AmountDetails() {
    return (<>
        {/* Total Amount Details */}
        <Stack padding={'16px'} spacing={'16px'}>
            <Box sx={{
                border: '1px solid #9fa8af',
                padding: '8px',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
            }}>

                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography fontFamily={'Poppins'} fontWeight={500}>
                        Amount
                    </Typography>
                    <TextField value={'₹ 400'} sx={{
                        "& .MuiInputBase-root": {
                            height: "30px",
                            borderRadius: "8px",
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            "&.Mui-focused fieldset": {
                                borderColor: "#555555",
                            },
                        },
                    }} />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography fontFamily={'Poppins'} fontWeight={500}>
                        GST
                    </Typography>
                    <TextField value={'₹ 100'} sx={{
                        "& .MuiInputBase-root": {
                            height: "30px",
                            borderRadius: "8px",
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            "&.Mui-focused fieldset": {
                                borderColor: "#555555",
                            },
                        },
                    }} />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography fontFamily={'Poppins'} fontWeight={500}>
                        Total Amount
                    </Typography>
                    <TextField value={'₹ 500'} sx={{
                        "& .MuiInputBase-root": {
                            height: "30px",
                            borderRadius: "8px",
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            "&.Mui-focused fieldset": {
                                borderColor: "#555555",
                            },
                        },
                    }} />
                </Stack>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Typography fontFamily={'Poppins'} fontWeight={500}>
                        Amount Paid
                    </Typography>
                    <TextField sx={{
                        "& .MuiInputBase-root": {
                            height: "30px",
                            borderRadius: "8px",
                            fontFamily : 'Poppins',
                            fontWeight : 600,
                            "&.Mui-focused fieldset": {
                                borderColor: "#555555",
                            },
                        },
                    }} />
                </Stack>
            </Box>

            <Button sx={{
                backgroundColor: '#0c1526',
                padding: '12px',
                fontFamily: 'Poppins',
                fontSize: '18px',
                fontWeight: 600,
                display: 'flex',
                gap: '8px',
                "&:hover": {
                    backgroundColor: "#1d2659",
                },
            }} variant="contained">
                Generate Invoice <InvoiceIcon />
            </Button>
        </Stack>
    </>)
}

export default AmountDetails