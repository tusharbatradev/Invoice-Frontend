import { useEffect, useState } from "react";
import { Stack, Typography, IconButton, Divider, TextField, Box, Button, Skeleton } from "@mui/material";
import { BackIcon, StockLimit, ProductIcon, Search, CrossCancelIcon } from "../assets/CustomIcons/Icons";
import AddProduct from "./AddProduct";

function ProductHeader({ setReload }) {
    const [showAddProduct, setshowAddProduct] = useState(false)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Stack spacing={'8px'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                {loading ?
                    <Skeleton sx={{ width: '200px', height: '45px' }} />
                    :
                    <Typography sx={{
                        fontFamily: 'Poppins',
                        fontSize: 24,
                        fontWeight: 500,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        lineHeight: '45px'
                    }}>
                        All Products
                    </Typography>
                }
            </Stack>
            <Divider />

            {/* Loading State */}
            {loading ?
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Stack direction={'row'} spacing={'16px'}>
                        <Skeleton sx={{ width: '250px', height: '45px' }} />
                        <Skeleton sx={{ width: '250px', height: '45px' }} />
                    </Stack>
                    <Skeleton sx={{ width: '180px', height: '45px' }} />
                </Stack> :

                < Stack direction={'row'} justifyContent={'space-between'}>
                    <Box sx={{
                        display: 'flex',
                        gap: '16px'
                    }}>
                        <TextField
                            placeholder="Search Product"
                            InputProps={{
                                startAdornment: (
                                    <Search />
                                ),
                            }}
                            sx={{
                                "& .MuiInputBase-root": {
                                    height: "45px",
                                    width: '250px',
                                    borderRadius: "8px",
                                    fontFamily: 'Poppins',
                                    "&.Mui-focused fieldset": {
                                        borderColor: "#555555",
                                    },
                                },
                            }}
                        />

                        <Button sx={{
                            backgroundColor: 'transparent',
                            border: '1px solid #d5d5d5',
                            height: '45px',
                            borderRadius: '8px',
                            width: '200px',
                            color: '#0c1526',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                        }}>
                            <StockLimit /> Show Low Stock
                        </Button>
                    </Box>

                    <Stack direction={'row'} alignItems={'center'} spacing={1}>

                        <Button sx={{
                            backgroundColor: '#0c1526',
                            color: '#fff',
                            height: '45px',
                            width: '180px',
                            fontFamily: 'Poppins',
                            display: 'flex',
                            gap: '4px',
                            '&:hover': {
                                backgroundColor: '#0c1559',
                            },
                        }} onClick={() => setshowAddProduct(true)}>
                            Create Product
                            <ProductIcon />

                        </Button>

                        {/* Cross Icon */}
                        {showAddProduct &&
                            <IconButton onClick={() => setshowAddProduct(false)}>
                                <CrossCancelIcon />
                            </IconButton>}
                    </Stack>
                </Stack>
            }

            {showAddProduct && <AddProduct setReload={setReload} setshowAddProduct={setshowAddProduct} />}
        </Stack >
    );
}

export default ProductHeader;
