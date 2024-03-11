import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { ProductIcon, TransactionIcon } from '../assets/CustomIcons/Icons';
import { Stack } from '@mui/system';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'ProductName',
        headerName: 'Product name',
        width: 150,
    },
    {
        field: 'itemCode',
        headerName: 'Item Code',
        width: 150,
    },
    {
        field: 'StockQuantity',
        headerName: 'Stock Quantity',
        width: 150,
    },
    {
        field: 'sellingPrice',
        headerName: 'Selling Price',
        width: 150,
    },
    {
        field: 'purchasePrice',
        headerName: 'Purchase Price',
        width: 150,
    },
];



const rows = [
    { id: 1, ProductName: 'Product 1', itemCode: '001', StockQuantity: 10, sellingPrice: '$50', purchasePrice: '$40', 'Date of Invoice': '2024-03-05', 'Total Amount': 100 },
    { id: 2, ProductName: 'Product 2', itemCode: '002', StockQuantity: 20, sellingPrice: '$60', purchasePrice: '$45', 'Date of Invoice': '2024-03-06', 'Total Amount': 200 },
    { id: 3, ProductName: 'Product 3', itemCode: '003', StockQuantity: 30, sellingPrice: '$70', purchasePrice: '$55', 'Date of Invoice': '2024-03-07', 'Total Amount': 300 },
    { id: 4, ProductName: 'Product 4', itemCode: '004', StockQuantity: 40, sellingPrice: '$80', purchasePrice: '$65', 'Date of Invoice': '2024-03-08', 'Total Amount': 400 },
    { id: 5, ProductName: 'Product 5', itemCode: '005', StockQuantity: 50, sellingPrice: '$90', purchasePrice: '$75', 'Date of Invoice': '2024-03-09', 'Total Amount': 500 },
    { id: 6, ProductName: 'Product 6', itemCode: '006', StockQuantity: 60, sellingPrice: '$100', purchasePrice: '$85', 'Date of Invoice': '2024-03-10', 'Total Amount': 600 },
    { id: 7, ProductName: 'Product 7', itemCode: '007', StockQuantity: 70, sellingPrice: '$110', purchasePrice: '$95', 'Date of Invoice': '2024-03-11', 'Total Amount': 700 },
    { id: 8, ProductName: 'Product 8', itemCode: '008', StockQuantity: 80, sellingPrice: '$120', purchasePrice: '$105', 'Date of Invoice': '2024-03-12', 'Total Amount': 800 },
    { id: 9, ProductName: 'Product 9', itemCode: '009', StockQuantity: 90, sellingPrice: '$130', purchasePrice: '$115', 'Date of Invoice': '2024-03-13', 'Total Amount': 900 },
];




export default function Table() {
    return (<>
        <Stack paddingTop={2}>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}
            >
                All Products <ProductIcon />
            </Typography>
            <Box sx={{ height: 400, padding: '8px' }}>
                <DataGrid
                    sx={{ fontFamily: 'Poppins' }}
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
        </Stack>
    </>
    );
}