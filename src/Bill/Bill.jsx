import { Divider, IconButton, Stack, Typography } from "@mui/material"
import { BackIcon } from "../assets/CustomIcons/Icons"
import BillHeader from "./BillHeader"
import GeneratedBill from "./GeneratedBill"

function Bill() {
    return (
        <>
            <Stack spacing={'8px'} sx={{
                backgroundColor: '#fff',
                width: '100%',
                padding: '14px',
                borderRadius: '8px'
            }}>
                <BillHeader />

                <GeneratedBill />
            </Stack>
        </>
    )
}

export default Bill