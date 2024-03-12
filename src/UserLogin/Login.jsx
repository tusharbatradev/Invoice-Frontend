import { useState, useEffect } from "react";
import {
	Stack,
	TextField,
	Typography,
	Button,
	IconButton,
	Skeleton,
	Snackbar,
} from "@mui/material";
import JewelryImage from "../assets/jewellery.jpg";
import {
	CloseEyeIcon,
	OpenEyeIcon,
	UserIcon,
	SuccessIcon
} from "../assets/CustomIcons/Icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login } from "../redux/Slices/authSlice";

function LoginPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [inputType, setInputType] = useState("password");
	const [loading, setLoading] = useState(true);
	const [snackBar, setSnackBar] = useState(false);
	const [snackBarMessage, setSnackBarMessage] = useState("");
	const [credentials, setCredentials] = useState({
		name: "",
		username: "",
		password: "",
	});
	const [token,setToken]=useState(null);
	const dispatch = useDispatch();

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
		setInputType((prevInputType) =>
			prevInputType === "password" ? "text" : "password"
		);
	};

	// Submit Function
	const submit = async () => {
		setSnackBar(true);
		try {
			const response = await axios.post(
				"http://localhost:3001/user/login",
				credentials
			);
			console.log(response);
			if (response.status === 200) {
				setSnackBarMessage(response.data.msg);
				dispatch(Login());
				localStorage.setItem('token',response?.data?.token);
				console.log("Login Successfully");

				setTimeout(() => {
					navigate("/dashboard");
				}, 800);
			}
		} catch (error) {
			setSnackBarMessage("User Not Found");
			console.warn(error);
		}
	};

	// Close SnackBar
	const handleCloseSnackBar = () => {
		setTimeout(() => {
			setSnackBar(false);
		}, 1000);
	};

	return (
		<Stack
			sx={{
				backgroundImage: `url(${JewelryImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				width: "100vw",
				height: "100vh",
				position: "fixed",
				top: 0,
				left: 0,
				zIndex: -1,
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Stack
				spacing={"18px"}
				alignItems={"center"}
				sx={{
					padding: "50px",
					width: "350px",
					textAlign: "left",
					backgroundColor: "#ebebeb",
					backdropFilter: "blur(10px)",
					boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.2)",
					borderRadius: "12px",
				}}
			>
				{loading ? (
					<Skeleton variant="rectangular" width="150px" height={45} />
				) : (
					<Typography
						color={"#555555"}
						fontSize={"32px"}
						fontWeight={500}
						fontFamily={"Poppins"}
					>
						Sign In
					</Typography>
				)}

				<Stack spacing={"12px"} width={"100%"}>
					{/* User's username */}
					{loading ? (
						<Skeleton variant="rectangular" width="100%" height={40} />
					) : (
						<TextField
							type="text"
							placeholder="username"
							fullWidth
							value={credentials.username}
							onChange={(e) =>
								setCredentials({ ...credentials, username: e.target.value })
							}
							InputProps={{
								endAdornment: (
									<IconButton>
										<UserIcon />
									</IconButton>
								),
							}}
							sx={{
								"& .MuiInputBase-root": {
									height: "40px",
									borderRadius: "8px",
									"&.Mui-focused fieldset": {
										borderColor: "#555555",
									},
								},
							}}
						/>
					)}

					{/* User's Passsword */}
					{loading ? (
						<Skeleton variant="rectangular" width="100%" height={40} />
					) : (
						<TextField
							type={inputType}
							placeholder="password"
							fullWidth
							value={credentials.password}
							onChange={(e) =>
								setCredentials({ ...credentials, password: e.target.value })
							}
							InputProps={{
								endAdornment: (
									<IconButton onClick={togglePasswordVisibility}>
										{showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
									</IconButton>
								),
							}}
							sx={{
								"& .MuiInputBase-root": {
									height: "40px",
									borderRadius: "8px",
									"&.Mui-focused fieldset": {
										borderColor: "#555555",
									},
								},
							}}
						/>
					)}
				</Stack>

				{loading ? (
					<Skeleton variant="rectangular" width={250} height={18} />
				) : (
					<Typography
						fontSize={"14px"}
						fontWeight={600}
						fontFamily={"Poppins"}
						color={"#555555"}
					>
						Don't have a account?{" "}
						<span
							onClick={() => navigate("/Signup")}
							style={{ cursor: "pointer", color: "#252525" }}
						>
							Sign Up
						</span>
					</Typography>
				)}

				{loading ? (
					<Skeleton variant="rectangular" height={40} width={"100%"} />
				) : (
					<Button
						variant="contained"
						fullWidth
						height={40}
						sx={{
							backgroundColor: "#555555",
							textTransform: "none",
							"&:hover": {
								backgroundColor: "#757575",
							},
							fontFamily: "Poppins",
						}}
						onClick={submit}
					>
						Sign In💍
					</Button>
				)}
			</Stack>

			<Snackbar
				ContentProps={{
					sx: {
						backgroundColor: 'green'
					}
				}}
				open={snackBar}
				autoHideDuration={6000}
				message={
					<Typography sx={{
						width: '100%',
						display: 'flex',
						alignItems: 'center',
						gap: '8px',
						fontFamily: 'Poppins'
					}}>
						{snackBarMessage} <SuccessIcon />
					</Typography>
					}
			onClose={handleCloseSnackBar}
			anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
			/>
		</Stack>
	);
}

export default LoginPage;
