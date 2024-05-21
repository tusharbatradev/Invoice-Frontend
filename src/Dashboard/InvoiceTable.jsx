import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TransactionIcon } from '../assets/CustomIcons/Icons';
import axios from 'axios';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'customerFirstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'customerLastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'customerContact',
        headerName: 'Contact Number',
        width: 150,
    },
    {
        field: 'customerAddress',
        headerName: 'Address',
        width: 150,
    },
    {
        field: 'invoiceDate',
        headerName: 'Date of Invoice',
        width: 150,
    },
    {
        field: 'grandTotal',
        headerName: 'Total Amount',
        width: 150,
    }
];

export default function InvoiceData() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get("https://new-invoice-backend.onrender.com/invoice/", {
                    headers: {
                        Authorization: localStorage.getItem("token"),
                    },
                });
                if (response.status === 200) {
                    const formattedData = response.data.invoice.map((invoiceData, index) => {
                        return {
                            ...invoiceData.customer,
                            id: index + 1,
                            customerFirstName: invoiceData.customer.customerFirstName,
                            customerLastName: invoiceData.customer.customerLastName,
                            customerContact: invoiceData.customer.customerContact,
                            customerAddress: invoiceData.customer.customerAddress,
                            customerCity: invoiceData.customer.customerCity,
                            customerPincode: invoiceData.customer.customerPincode,
                            invoiceDate: invoiceData.invoice.date, // Change 'date' to the actual field name
                            grandTotal: invoiceData.invoice.grandTotal,
                            gst: invoiceData.invoice.gst,
                            discount: invoiceData.invoice.discount,
                            amountPaid: invoiceData.invoice.amountPaid,
                            remainingBalance: invoiceData.invoice.remainingBalance
                        };
                    });
                    setRows(formattedData);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }
        fetchProducts();
    }, []); 

    return (
        <>
            <Typography sx={{
                fontFamily: 'Poppins',
                fontSize: 20,
                fontWeight: 500,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
            }}
            >
                Latest Transactions <TransactionIcon />
            </Typography>
            <Box sx={{ height: 400, padding: '8px' }}>
                {rows.length > 0 && (
                    <DataGrid
                        sx={{ fontFamily: 'Poppins', padding : '8px' }}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        // checkboxSelection
                        disableRowSelectionOnClick
                        getRowClassName={(params) => 'custom-row'} 
                    />
                )}
            </Box>
        </>
    );
}
