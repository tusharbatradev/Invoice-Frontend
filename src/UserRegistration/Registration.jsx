import { useState, useEffect } from "react";
import { Stack, TextField, Typography, Button, IconButton, Skeleton, Snackbar } from "@mui/material";
import JewelryImage from '../assets/jewellery.jpg';
import { CloseEyeIcon, OpenEyeIcon, UserIcon } from "../assets/CustomIcons/Icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {

    const [showPassword, setShowPassword] = useState(false);
    const [inputType, setInputType] = useState('password');
    const [loading, setLoading] = useState(true);
    const [snackBar, setSnackBar] = useState(false);
    const [snackBarMessage, setSnackBarMessage] = useState('');
    const [credentials, setCredentials] = useState({
        name: '',
        username: '',
        password: ''
    });

    // Login Functionality
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
        setInputType((prevInputType) => prevInputType === 'password' ? 'text' : 'password');
    };

    const submit = async () => {
        setSnackBar(true);
        try {
            const response = await axios.post("https://new-invoice-backend.onrender.com/user/signup", credentials);
            console.log(response);
            if (response.status === 200) {
                setSnackBarMessage(response.data.msg);
                console.log('Signup Successfully');

                setTimeout(() => {
                    navigate('/login');
                }, 800);
            } else {
                setSnackBarMessage(response.data.msg);
                console.log('User Not Found');
            }
        } catch (error) {
            setSnackBarMessage('An error occurred while signing up');
            console.warn(error);
        }
    };

    const handleCloseSnackBar = () => {
		setTimeout(() => {
			setSnackBar(false);
		}, 500); 
	};

    return (
        <Stack
            sx={{
                backgroundImage: `url(${JewelryImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100vw',
                height: '100vh',
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: -1,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Stack
                spacing={'18px'}
                alignItems={'center'}
                sx={{
                    padding: '50px',
                    width: '350px',
                    textAlign: 'left',
                    backgroundColor: '#ebebeb',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
                    borderRadius: '12px'
                }}
            >
                {loading ? (
                    <Skeleton variant="rectangular" width='150px' height={45} />
                ) : (
                    <Typography color={'#555555'} fontSize={'32px'} fontWeight={500} fontFamily={'Poppins'}>
                        Sign Up
                    </Typography>
                )}

                <Stack spacing={'12px'} width={'100%'}>
                    {/* User Name */}
                    {loading ? (
                        <Skeleton variant="rectangular" width='100%' height={40} />
                    ) : (
                        <TextField
                            type="text"
                            placeholder="your name"
                            fullWidth
                            value={credentials.name}
                            onChange={(e) => setCredentials({ ...credentials, name: e.target.value })}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <UserIcon />
                                    </IconButton>
                                )
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    borderRadius: '8px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#555555'
                                    },
                                },
                            }}
                        />
                    )}

                    {/* User's username */}
                    {loading ? (
                        <Skeleton variant="rectangular" width='100%' height={40} />
                    ) : (
                        <TextField
                            type="text"
                            placeholder="username"
                            fullWidth
                            value={credentials.username}
                            onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <UserIcon />
                                    </IconButton>
                                )
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    borderRadius: '8px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#555555'
                                    },
                                },
                            }}
                        />
                    )}

                    {/* User's Passsword */}
                    {loading ? (
                        <Skeleton variant="rectangular" width='100%' height={40} />
                    ) : (
                        <TextField
                            type={inputType}
                            placeholder="password"
                            fullWidth
                            value={credentials.password}
                            onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                            InputProps={{
                                endAdornment: (
                                    <IconButton onClick={togglePasswordVisibility} >
                                        {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
                                    </IconButton>
                                )
                            }}
                            sx={{
                                '& .MuiInputBase-root': {
                                    height: '40px',
                                    borderRadius: '8px',
                                    '&.Mui-focused fieldset': {
                                        borderColor: '#555555'
                                    },
                                },
                            }}
                        />
                    )}

                </Stack>

                {/* Login Redirection */}
                {loading ? (
                    <Skeleton variant="rectangular" width={250} height={18} />
                ) : (
                    <Typography fontSize={'14px'}
                        fontWeight={600}
                        fontFamily={'Poppins'}
                        color={'#555555'}
                    >
                        Already have a account? <span onClick={() => navigate('/Login')} style={{ cursor: 'pointer', color: '#252525' }}>Sign In</span>
                    </Typography>
                )}

                {/* Submit Button */}
                {loading ?
                    (<Skeleton variant="rectangular" height={40} width={'100%'} />)
                    :
                    (
                        <Button variant="contained" fullWidth height={40}
                            sx={{
                                backgroundColor: '#555555',
                                textTransform: 'none',
                                '&:hover': {
                                    backgroundColor: '#757575'
                                },
                                fontFamily: 'Poppins'
                            }}
                            onClick={submit}
                        >

                            Sign Up💍
                        </Button>)
                }

            </Stack>

            <Snackbar
                open={snackBar}
                autoHideDuration={6000}
                message={snackBarMessage}
                onClose={handleCloseSnackBar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </Stack>
    );
}

export default RegistrationPage;

