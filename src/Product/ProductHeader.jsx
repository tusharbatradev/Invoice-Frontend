import { useState } from "react";
import { Stack, Typography, IconButton, Divider, TextField, Box, Button } from "@mui/material";
import { BackIcon, StockLimit, ProductIcon, Search, CrossCancelIcon } from "../assets/CustomIcons/Icons";
import AddProduct from "./AddProduct";

function ProductHeader() {
    const [showAddProduct, setshowAddProduct] = useState(false)

    return (
        <Stack spacing={'8px'}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography sx={{
                    fontFamily: 'Poppins',
                    fontSize: 20,
                    fontWeight: 500,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <IconButton>
                        <BackIcon />
                    </IconButton>
                    All Products
                </Typography>

            </Stack>
            <Divider />

            {/* Search Bar for Category and Product */}
            <Stack direction={'row'} justifyContent={'space-between'}>
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
            {showAddProduct && <AddProduct setshowAddProduct={setshowAddProduct} />}
        </Stack>
    );
}

export default ProductHeader;
