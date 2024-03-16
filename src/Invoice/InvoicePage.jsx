import { useState } from 'react';
import { Stack } from "@mui/material";
import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";
import OldProductDetails from "./OldProductDetails";
import AmountDetails from "./AmountDetails";
import axios from 'axios';

function InvoicePage() {
    const [formData, setFormData] = useState({
        customer: {
            firstName: '',
            lastName: '',
            contactNumber: '',
            address: '',
            cityOrVillage: '',
            pincode: ''
        },
        product: [{
            productName: '',
            productWeight: '',
            productCost: '',
            makingCharges: '',
            productId: '',
            productQuantity: '',
            id: ''
        }],
        // oldProducts: {},
        invoice: {
            grandTotal: 100,
            gst: 20,
            amountPaid: 100,
            discount: 10,
            remainingBalance: 10
        }
    });

    const generateInvoice = () => {
        axios.post('http://localhost:3001/invoice/', formData, {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log('Invoice generated successfully:',
                    response.data);
            }
            )
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <Stack spacing={'-15px'}>
            <CustomerDetails formData={formData} setFormData={setFormData} />
            <ProductDetails formData={formData} setFormData={setFormData} />
            <OldProductDetails />
            <AmountDetails formData={formData} setFormData={setFormData} generateInvoice={generateInvoice} />
        </Stack>
    );
}

export default InvoicePage;