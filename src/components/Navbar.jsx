import React from "react";
import styled from "styled-components";
import LogoAirBnb from "../assets/airbnb-logo.png";

const Navbar = () => {
	return (
		<NavContainer>
			<Logo src={LogoAirBnb} alt="" />
		</NavContainer>
	);
};

export default Navbar;

const NavContainer = styled.div`
	height: 80px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 20px 36px;

	box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
	max-width: 100px;
`;
