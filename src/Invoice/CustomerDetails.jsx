import { useState } from 'react';
import { Box, Stack, TextField, Typography, Grid } from "@mui/material";

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
        </Stack>
    );
}

export default CustomerDetails;
