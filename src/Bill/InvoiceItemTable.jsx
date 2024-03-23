import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function InvoiceItemTable({ dummyData }) {

    const { products } = dummyData;

    const columnStyles = {
        backgroundColor: 'black',
        color: 'white',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontWeight: 400
    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={columnStyles}>S.NO.</TableCell>
                        <TableCell sx={columnStyles}>ITEMS</TableCell>
                        <TableCell sx={columnStyles}>QTY.</TableCell>
                        <TableCell sx={columnStyles}>RATE</TableCell>
                        <TableCell sx={columnStyles}>AMOUNT</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product, index) => (
                        <TableRow key={product._id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{product.productName}</TableCell>
                            <TableCell>{product.productQuantity} PCS</TableCell>
                            <TableCell>{product.productCost}</TableCell>
                            <TableCell>{product.productAmount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default InvoiceItemTable;
