import { Box, Stack, TextField, Typography, Grid, Button } from "@mui/material";

function ProductDetails({ formData, setFormData }) {

    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            product: {
                ...formData.product,
                [fieldName]: value
            }
        });
    };

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
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Product Name"
                            value={formData.product.productName}
                            onChange={(e) => handleChange('productName', e.target.value)}
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
                            placeholder="Product Weight"
                            value={formData.product.productWeight}
                            onChange={(e) => handleChange('productWeight', e.target.value)}
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
                            value={formData.product.productCost}
                            onChange={(e) => handleChange('productCost', e.target.value)}
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
                            value={formData.product.makingCharges}
                            onChange={(e) => handleChange('makingCharges', e.target.value)}
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
                            value={formData.product.id}
                            onChange={(e) => handleChange('id', e.target.value)}
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
                            value={formData.product.productQuantity}
                            onChange={(e) => handleChange('productQuantity', e.target.value)}
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
            <Button
                sx={{
                    backgroundColor: '#0c1526',
                    width: '100%',
                    fontFamily: 'Poppins',
                    "&:hover": {
                        backgroundColor: "#1d2659",
                    },
                }}
                variant="contained"
            >
                Add Product +
            </Button>
        </Stack>
    );
}

export default ProductDetails;
