import { Typography, Stack, Container, Box } from "@mui/material";
import MenuList from "./MenuList";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react"; // Import useState
import ProfileButton from "./ProfileButton";
import DashboardPage from "./DashboardPage";
import axios from "axios";
import Invoice from "../Invoice/Invoice";
import Bill from "../Bill/Bill";
import Product from "../Product/Product";
import Profile from "../Profile/Profile";
import LoginAnimation from "../LoginAnimation/LoginAnimation";

function Dashboard() {
	const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
	console.log("isUserLoggedIn", isUserLoggedIn);
	const navigate = useNavigate();
	const [showAnimation, setShowAnimation] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setShowAnimation(false);
			if (!isUserLoggedIn) {
				navigate("/Login");
			}
		}, 800);

		return () => clearTimeout(timeout);
	}, [isUserLoggedIn]);

	return (
		<>
			{showAnimation ?
				<LoginAnimation /> :
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
					<Routes>
						<Route path="/" element={<DashboardPage />} />
						<Route path="invoice" element={<Invoice />} />
						<Route path="bill" element={<Bill />} />
						<Route path="product" element={<Product />} />
						<Route path="profile" element={<Profile />} />
					</Routes>
				</Stack>
			}
		</>
	);
}

export default Dashboard;
