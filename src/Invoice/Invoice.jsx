import { useEffect, useState } from "react"
import { Divider, IconButton, Stack, Typography, Skeleton } from "@mui/material"
import { BackIcon } from "../assets/CustomIcons/Icons"
import BusinessDetails from "./CustomerDetails"
import InvoicePage from "./InvoicePage"
import { useNavigate } from "react-router-dom"

function Invoice() {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    return (<>
        <Stack spacing={'8px'} sx={{
            backgroundColor: '#fff',
            width: '100%',
            padding: '14px',
            borderRadius: '8px'
        }}>
            {/* Page Heading */}
            {loading ?
                <Skeleton sx={{ width: '300px', height: '45px' }} />
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
                    Create Sales Invoice
                </Typography>
            }
            <Divider />

            <InvoicePage />
        </Stack>
    </>)
}

export default Invoice