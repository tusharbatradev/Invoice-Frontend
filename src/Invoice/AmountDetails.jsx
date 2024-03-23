import { Typography, Box, Stack, TextField, Button, Skeleton } from "@mui/material"
import { InvoiceIcon } from "../assets/CustomIcons/Icons"
import { useEffect, useState } from "react";

function AmountDetails({ formData, setFormData, generateInvoice }) {
    const handleChange = (fieldName, value) => {
        setFormData({
            ...formData,
            invoice: {
                ...formData.invoice,
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

    return (<>
        {/* Total Amount Details */}
        <Stack padding={'16px'} spacing={'16px'}>
            {loading ?
                <Skeleton height={'80px'} />
                :
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
                            Total Amount
                        </Typography>
                        <TextField
                            value={formData.invoice.grandTotal}
                            onChange={(e) => handleChange('grandTotal', e.target.value)}
                            sx={{
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
                        <TextField
                            // value={formData.amountPaid.gst}
                            // onChange={(e) => handleChange('gst', e.target.value)}
                            sx={{
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
                            Discount
                        </Typography>
                        <TextField
                            value={formData.invoice.discount}
                            onChange={(e) => handleChange('discount', e.target.value)}
                            sx={{
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
                        <TextField
                            value={formData.invoice.amountPaid}
                            onChange={(e) => handleChange('amountPaid', e.target.value)}
                            sx={{
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
                            Remaining Balance
                        </Typography>
                        <TextField
                            value={formData.invoice.remainingBalance}
                            onChange={(e) => handleChange('remainingBalance', e.target.value)}
                            sx={{
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
                </Box>
            }


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
            }}
                variant="contained"
                onClick={generateInvoice}
            >
                Generate Invoice <InvoiceIcon />
            </Button>
        </Stack>
    </>)
}

export default AmountDetails