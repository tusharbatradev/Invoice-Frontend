import PersonIcon from '@mui/icons-material/Person';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


export const UserIcon=()=> {
    return(<>
        <PersonIcon />
    </>)
}

export const OpenEyeIcon=()=> {
    return(<>
        <RemoveRedEyeIcon />
    </>)
}

export const CloseEyeIcon=()=> {
    return(<>
        <VisibilityOffIcon />
    </>)
}

export const DashboardIcon=()=> {
    return(<>
        <SpaceDashboardIcon />
    </>)
}

export const ProductIcon=()=> {
    return(<>
        <Inventory2Icon />
    </>)
}

export const InvoiceIcon=()=> {
    return(<>
        <DescriptionIcon />
    </>)
}

export const ProfileIcon=()=> {
    return(<>
        <AccountCircleIcon sx={{ fontSize: '30px' }} />
    </>)
}

