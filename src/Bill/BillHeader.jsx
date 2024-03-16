import { Stack, Typography, Box, IconButton, Divider } from "@mui/material"
import { BackIcon, DeleteButtonIcon, DownloadIcon, EditedIcon, PrinterIcon, Share } from "../assets/CustomIcons/Icons"


function BillHeader() {
    return (
        <Stack
            direction={'column'}
            spacing={'8px'}
        //     // sx={{ position: 
        //     'sticky', 
        //     top: '0', 
        //     zIndex: '1000' 
        // }}
        >

            {/* Stack for Delete and Edit Button */}
            <Stack direction={'row'} justifyContent={'space-between'} >
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
                    Sales Invoice #1
                </Typography>

                <Box sx={{
                    display: 'flex',
                    gap: '20px'
                }}>
                    {/* Edit Box Button */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #959595 ',
                        padding: '8px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}>
                        <EditedIcon />
                        <Typography color={'#959595'} fontFamily={'Poppins'}>EDIT</Typography>
                    </Box>
                    {/* Delete Box Button */}
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        border: '1px solid #e47a7a ',
                        padding: '8px',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}>
                        <DeleteButtonIcon />
                        <Typography color={'#e47a7a'} fontFamily={'Poppins'}>DELETE</Typography>
                    </Box>
                </Box>
            </Stack>

            <Divider />

            <BillsButton />
        </Stack>
    )
}

export default BillHeader

function BillsButton() {
    return (
        <Stack direction={'row'} spacing={4}>
            {/* Download Button */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid #959595 ',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                minWidth: '140px'
            }}>
                <DownloadIcon />
                <Typography
                    fontSize={18}
                    fontWeight={500}
                    fontFamily={'Poppins'}
                    color={'#959595'}>
                    Download
                </Typography>
            </Box>

            {/* Print Button */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid #959595 ',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                minWidth: '140px'
            }}>
                <PrinterIcon />
                <Typography
                    fontSize={18}
                    fontWeight={500}
                    fontFamily={'Poppins'}
                    color={'#959595'}>
                    Print Bill
                </Typography>
            </Box>

            {/* Share Button */}
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                border: '1px solid #959595 ',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                minWidth: '140px'
            }}>
                <Share />
                <Typography
                    fontSize={18}
                    fontWeight={500}
                    fontFamily={'Poppins'}
                    color={'#959595'}>
                    Share Bill
                </Typography>
            </Box>

        </Stack>
    )
}