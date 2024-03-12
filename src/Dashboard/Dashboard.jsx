import { Typography, Stack, Container, Box } from "@mui/material";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProfileButton from "./ProfileButton";
import DashboardPage from "./DashboardPage";
import axios from "axios";
import Invoice from "../Invoice/Invoice";
import Bill from "../Bill/Bill";
import Product from "../Product/Product";

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
		<Stack direction={'row'} spacing={'20px'} padding={"10px"} sx={{ backgroundColor: '#eeeff1' }}>
			<Box
				sx={{
					backgroundColor: "#0c1526",
					width: "20%",
					height: '97vh',
					borderRadius: "8px",
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					position: 'sticky',
					top: 0, 
					zIndex: 1,
					overflowY: 'auto', 
				}}
			>
				<MenuList />
				<Box sx={{ padding: '0px' }}>
					<ProfileButton />
				</Box>
			</Box>
			{/* <DashboardPage /> */}
			<Invoice />
			{/* <Bill /> */}
			{/* <Product /> */}
		</Stack>
	);
}

export default Dashboard;
