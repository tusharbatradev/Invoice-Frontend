import { Box, Stack, TextField, Typography, Grid, Button, Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
// import { UseSelector, useDispatch } from "react-redux";

function ProductDetails({ formData, setFormData }) {

    const handleChange = (index, fieldName, value) => {
        const updatedProducts = [...formData.product];
        updatedProducts[index] = {
            ...updatedProducts[index],
            [fieldName]: value
        };

        setFormData({
            ...formData,
            product: updatedProducts
        });
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack padding={'16px'} spacing={'4px'}>
            {loading ? <Skeleton width={'140px'} height={'25px'} />
                :
                <Typography lineHeight={'25px'} fontFamily={'Poppins'} fontWeight={500}>
                    Product Details <span style={{ color: 'red', alignSelf: 'center' }}>*</span>
                </Typography>
            }

            {loading ?
                <Skeleton height={'185px'} />
                :
                formData.product.map((product, index) => (
                    <Box key={index} sx={{
                        padding: '16px',
                        border: '1px solid #9fa8af',
                        borderRadius: '12px',
                        marginTop: '16px'
                    }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Product Name"
                                    value={product.productName}
                                    onChange={(e) => handleChange(index, 'productName', e.target.value)}
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
                                    value={product.productWeight}
                                    onChange={(e) => handleChange(index, 'productWeight', e.target.value)}
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
                                    placeholder="Product Cost"
                                    value={product.productCost}
                                    onChange={(e) => handleChange(index, 'productCost', e.target.value)}
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
                                    value={product.makingCharges}
                                    onChange={(e) => handleChange(index, 'makingCharges', e.target.value)}
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
                                    value={product.id}
                                    onChange={(e) => handleChange(index, 'id', e.target.value)}
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
                                    placeholder="Product Quantity"
                                    value={product.productQuantity}
                                    onChange={(e) => handleChange(index, 'productQuantity', e.target.value)}
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
                ))
            }

            {loading ?
                <Skeleton height={'35px'} width={'100%'} />
                :
                <Button
                    sx={{
                        backgroundColor: '#0c1526',
                        height : '35px',
                        width: '100%',
                        fontFamily: 'Poppins',
                        marginTop: '16px',
                        "&:hover": {
                            backgroundColor: "#1d2659",
                        },
                    }}
                    variant="contained"
                >
                    Add Product +
                </Button>
            }

        </Stack>
    );
}

export default ProductDetails;