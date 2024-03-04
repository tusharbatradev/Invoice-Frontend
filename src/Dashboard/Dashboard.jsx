import { Typography, Stack, Container, Box } from "@mui/material";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProfileButton from "./ProfileButton";
import DashboardPage from "./DashboardPage";
import axios from "axios";

function Dashboard() {
	const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
	console.log("isUserLoggedIn", isUserLoggedIn);
	const navigate = useNavigate();
	useEffect(() => {
		if (isUserLoggedIn === false) {
			navigate("/Login");
		}
	}, []);

	return (
		<Stack direction={'row'} spacing={'20px'} padding={"10px"} height={"97vh"} sx={{ backgroundColor: '#eeeff1' }}>
			<Box
				sx={{
					backgroundColor: "#0c1526",
					width: "20%",
					height: "100%",
					borderRadius: "8px",
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between'
				}}
			>
				<MenuList />
				<Box sx={{ padding: '0px' }}>
					<ProfileButton />
				</Box>
			</Box>
			<DashboardPage />
		</Stack>
	);
}

export default Dashboard;
