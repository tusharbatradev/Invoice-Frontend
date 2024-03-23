import { useState } from "react";
import { Divider, Stack, Typography, Box, TextField, Autocomplete, Button, Snackbar } from "@mui/material"
import { AddIcon, SuccessIcon } from "../assets/CustomIcons/Icons"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateProductField } from "../redux/Slices/productSlice";

function AddProduct({ setshowAddProduct, setReload }) {

    const product = useSelector(state => state.product);
    const [snackBar, setSnackBar] = useState(false);
    const [snackBarColor, setSnackBarColor] = useState('')
    const dispatch = useDispatch();

    const handleInputChange = (key, value) => {
        if (key === 'availability') {
            value = value === 'Available';
        }
        dispatch(updateProductField({ key, value }));
    };


    const submit = async () => {
        setSnackBar(true);
        try {
            const response = await axios.post(
                "http://localhost:3001/product",
                product,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        "Authorization": localStorage.getItem("token")
                    }
                }
            )
            setSnackBarColor("green")
            console.log(response);
            if (response.status === 200) {
                // setSnackBarMessage(response.data.msg);
                setReload(true);
                console.log("Added Successfully");
            }
        } catch (error) {
            // setSnackBarMessage("Cannot Add");
            setSnackBarColor("green")
            console.warn(error);
        }
    };

    // Close SnackBar
    const handleCloseSnackBar = () => {
        setshowAddProduct(false)
        setTimeout(() => {
            setSnackBar(false);
        }, 1000);
    };

    return (
        <Stack spacing={'12px'}>
            <Divider />
            <Typography fontFamily={'Poppins'} fontSize={18} fontWeight={500}>
                Add Product here
            </Typography>

            {/* Stack for Products */}
            <Stack justifyContent={'space-between'} direction={'row'}>
                {/* Product Details in this Box */}
                <Box sx={{
                    display: 'flex',
                    gap: '16px'
                }}
                >
                    <TextField
                        placeholder="Product Name"
                        value={product.productName}
                        onChange={(e) => handleInputChange('productName', e.target.value)}
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
                    <Autocomplete
                        sx={{
                            height: '10px',
                            width: '300px'
                        }}
                        disablePortal
                        id="combo-box-demo"
                        options={['Available', 'Not Available']}
                        renderInput={(params) =>
                            <TextField
                                placeholder="Availability"
                                value={product.availability ? 'Available' : 'Not Available'}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    console.log("New Value:", newValue);
                                    handleInputChange('availability', newValue === 'Not Available');
                                }}
                                sx={{
                                    "& .MuiInputBase-root": {
                                        height: "45px",
                                        width: '200px',
                                        padding: '0px',
                                        paddingLeft: '8px',
                                        borderRadius: "8px",
                                        fontFamily: 'Poppins',
                                        "&.Mui-focused fieldset": {
                                            borderColor: "#555555",
                                        },
                                    },
                                }}  {...params}
                            />}
                    />
                </Box>
                <Button sx={{
                    backgroundColor: '#0c1526',
                    color: '#fff',
                    width: '180px',
                    fontFamily: 'Poppins',
                    display: 'flex',
                    gap: '4px',
                    '&:hover': {
                        backgroundColor: '#0c1559',
                    },
                }} onClick={() => submit()}>
                    Add Product
                    <AddIcon />
                </Button>
            </Stack>

            <Snackbar
                ContentProps={{
                    sx: {
                        backgroundColor: snackBarColor
                    }
                }}
                open={snackBar}
                autoHideDuration={1000}
                message={
                    <Typography sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        fontFamily: 'Poppins'
                    }}>
                        Product Added <SuccessIcon />
                    </Typography>
                }
                onClose={handleCloseSnackBar}
                anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            />
        </Stack>
    )
}

export default AddProduct;