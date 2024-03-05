import { Box, Stack, TextField, Typography, Grid, Button } from "@mui/material"


function ProductDetails() {
    return (
        <Stack padding={'16px'} spacing={'4px'}>

            <Typography fontFamily={'Poppins'} fontWeight={500}>
                Product Details
            </Typography>

            <Box sx={{
                padding: '16px',
                border: '1px solid #9fa8af',
                borderRadius: '12px'
            }}>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        
                        <Button sx={{
                            backgroundColor :'#0c1526',
                            width : '100%',
                            fontFamily : 'Poppins',
                            "&:hover": {
                                backgroundColor: "#1d2659",
                            },
                        }} variant="contained">Add Product +</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Product Weight"
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
                            placeholder="Rate"
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
                            placeholder="Making Charges"
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
                            placeholder="Product ID"
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
                            placeholder="Quantity"
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

export default ProductDetails