import Dashboard from "./Dashboard/Dashboard";
import LoginPage from "./UserLogin/Login";
import RegistrationPage from "./UserRegistration/Registration";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function App() {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Navigate to="/SignUp" />} />
				<Route path="/Login" element={<LoginPage />} />
				<Route path="/SignUp" element={<RegistrationPage />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			</Routes>
		</Router>
	)
}

export default App
