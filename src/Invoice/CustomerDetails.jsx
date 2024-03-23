import { useEffect, useState } from 'react';
import { Box, Stack, TextField, Typography, Grid, Skeleton } from "@mui/material";

function CustomerDetails({ formData, setFormData }) {
    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            customer: {
                ...formData.customer,
                [fieldName]: value
            }
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
                    Customer Details <span style={{ color: 'red', alignSelf: 'center' }}>*</span>
                </Typography>
            }

            {loading ?
                <Skeleton height={'185px'} />
                :
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
                                value={formData.customer.firstName || ''}
                                onChange={(e) => handleChange('firstName', e.target.value)}
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
                                value={formData.customer.lastName || ''}
                                onChange={(e) => handleChange('lastName', e.target.value)}
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
                                value={formData.customer.contactNumber || ''}
                                onChange={(e) => handleChange('contactNumber', e.target.value)}
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
                                value={formData.customer.address || ''}
                                onChange={(e) => handleChange('address', e.target.value)}
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
                                value={formData.customer.cityOrVillage || ''}
                                onChange={(e) => handleChange('cityOrVillage', e.target.value)}
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
                                value={formData.customer.pincode || ''}
                                onChange={(e) => handleChange('pincode', e.target.value)}
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
            }

        </Stack>
    );
}

export default CustomerDetails;
