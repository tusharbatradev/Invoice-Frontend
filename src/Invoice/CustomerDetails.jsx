import { Box, Stack, TextField, Typography, Grid } from "@mui/material"


function CustomerDetails() {
    return (
        <Stack padding={'16px'} spacing={'4px'}>

            <Typography fontFamily={'Poppins'} fontWeight={500}>
                Customer Details
            </Typography>

            <Box sx={{
                padding: '16px',
                border: '1px solid #9fa8af',
                borderRadius: '12px'
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter first name"
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    borderRadius: "8px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter last name"
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    borderRadius: "8px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter contact number"
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    borderRadius: "8px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter address"
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    borderRadius: "8px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter city or village"
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    borderRadius: "8px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Enter pincode"
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "40px",
                                    borderRadius: "8px",
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>

        </Stack>
    )
}

export default CustomerDetails