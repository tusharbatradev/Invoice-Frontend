import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import GetAppIcon from '@mui/icons-material/GetApp';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

export const UserIcon = () => {
    return (<>
        <PersonIcon />
    </>)
}

export const PrinterIcon = () => {
    return (<>
        <PrintIcon sx={{ color: '#959595' }} />
    </>)
}

export const Share = () => {
    return (<>
        <ShareIcon sx={{ color: '#959595' }} />
    </>)
}

export const OpenEyeIcon = () => {
    return (<>
        <RemoveRedEyeIcon />
    </>)
}

export const CloseEyeIcon = () => {
    return (<>
        <VisibilityOffIcon />
    </>)
}

export const DashboardIcon = () => {
    return (<>
        <SpaceDashboardIcon />
    </>)
}

export const ProductIcon = () => {
    return (<>
        <Inventory2Icon />
    </>)
}

export const InvoiceIcon = () => {
    return (<>
        <DescriptionIcon />
    </>)
}

export const ProfileIcon = () => {
    return (<>
        <AccountCircleIcon sx={{ fontSize: '30px' }} />
    </>)
}

export const TransactionIcon = () => {
    return (<>
        <ReceiptLongIcon />
    </>)
}

export const BackIcon = () => {
    return (<>
        <KeyboardBackspaceIcon />
    </>)
}

export const EditedIcon = () => {
    return (<>
        <EditIcon sx={{ color: '#959595' }} />
    </>)
}

export const DeleteButtonIcon = () => {
    return (<>
        <DeleteIcon sx={{ color: '#e47a7a' }} />
    </>)
}

export const DownloadIcon = () => {
    return (<>
        <GetAppIcon sx={{ color: '#959595' }} />
    </>)
}

