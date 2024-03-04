import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { TransactionIcon } from '../assets/CustomIcons/Icons';

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
    },
    {
        field: 'Contact',
        headerName: 'Contact Number',
        width: 150,
    },
    {
        field: 'Address',
        headerName: 'Address',
        width: 150,
    },
    {
        field: 'Date of Invoice',
        headerName: 'Date of Invoice',
        width: 150,
    },
    {
        field: 'Total Amount',
        headerName: 'Total Amount',
        width: 150,
    }
];



const rows = [
    { id: 1, firstName: 'John', lastName: 'Doe', Contact: '1234567890', Address: '123 Main St', 'Date of Invoice': '2024-03-05', 'Total Amount': 100 },
    { id: 2, firstName: 'Jane', lastName: 'Smith', Contact: '9876543210', Address: '456 Elm St', 'Date of Invoice': '2024-03-06', 'Total Amount': 200 },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', Contact: '4567890123', Address: '789 Oak St', 'Date of Invoice': '2024-03-07', 'Total Amount': 300 },
    { id: 4, firstName: 'Bob', lastName: 'Brown', Contact: '3210987654', Address: '321 Pine St', 'Date of Invoice': '2024-03-08', 'Total Amount': 400 },
    { id: 5, firstName: 'Eve', lastName: 'Williams', Contact: '7890123456', Address: '654 Cedar St', 'Date of Invoice': '2024-03-09', 'Total Amount': 500 },
    { id: 6, firstName: 'Charlie', lastName: 'Miller', Contact: '2109876543', Address: '987 Maple St', 'Date of Invoice': '2024-03-10', 'Total Amount': 600 },
    { id: 7, firstName: 'Grace', lastName: 'Davis', Contact: '8765432109', Address: '456 Birch St', 'Date of Invoice': '2024-03-11', 'Total Amount': 700 },
    { id: 8, firstName: 'David', lastName: 'Taylor', Contact: '5432109876', Address: '789 Cedar St', 'Date of Invoice': '2024-03-12', 'Total Amount': 800 },
    { id: 9, firstName: 'Olivia', lastName: 'Anderson', Contact: '1098765432', Address: '123 Oak St', 'Date of Invoice': '2024-03-13', 'Total Amount': 900 },
];



export default function InvoiceData() {
    return (<>
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize : 20,
            fontWeight : 500,
            display : 'flex',
            alignItems : 'center',
            gap : '4px'
        }}
        >
            Latest Transactions <TransactionIcon />
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
    </>
    );
}