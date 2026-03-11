import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main";
import PageWrapper from "../components/PageWrapper";
import Card from "../components/Card";
import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from 'react';
import supabase from "../utils/supabase";

const Register = () => {

	const [formData, setFormData] = useState({
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const handleInputChange = (event) => {
		const inputName = event.target.name;
		const inputValue = event.target.value;
		console.log(`Input label: ${inputName}, Input value: ${inputValue}`);
		setFormData({...formData,[inputName]: inputValue});
	}

	const handleSubmit = async () => {
		const { data, error } = await supabase.auth.signUp({
			email: formData.email,
			password: formData.password,
		})
		console.log(formData)
	}

	return (
		<PageWrapper>
			<Navbar />
			<Main className="flex justify-center">
				<div className="flex items-center">
					<Card>
						<h1 className="text-xl font-bold">Signup</h1>
						<Input
							label="Firstname"
							name="firstname"
							type="text"
							placeholder="Enter your firstname"
							onChange={handleInputChange}
						/>
						<Input
							label="Lastname"
							name="lastname"
							type="text"
							placeholder="Enter your lastname"
							onChange={handleInputChange}
						/>
						<Input
							label="Email"
							name="email"
							type="email"
							placeholder="Enter your email"
							onChange={handleInputChange}
						/>
						<Input
							label="Password"
							name="password"
							type="password"
							placeholder="Enter your password"
							onChange={handleInputChange}
						/>
						<Input
							label="Confirm Password"
							name="confirmPassword"
							type="password"
							placeholder="Confirm your password"
							onChange={handleInputChange}
						/>
						<button className="bg-white btn btn-neutral btn-outline px-32 hover:bg-gray-900" onClick={handleSubmit}>
							Register
						</button>
					</Card>
				</div>
			</Main>
			<Footer />
		</PageWrapper>
	);
}
export default Register;
