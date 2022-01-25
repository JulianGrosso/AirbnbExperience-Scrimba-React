import React from "react";
import styled from "styled-components";

const Navbar = () => {
	return (
		<NavContainer>
			<Wrap>
				<Logo src="./assets/airbnb-logo.png" alt="" />
			</Wrap>
		</NavContainer>
	);
};

export default Navbar;

const NavContainer = styled.div`
	height: 80px;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;

	box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);

	@media screen and (max-width: 375px) {
		height: 60px;
	}
`;

const Wrap = styled.div`
	width: 100%;
	max-width: 1440px;
	padding: 20px 36px;

	@media screen and (max-width: 375px) {
		display: flex;
		justify-content: center;
	}
`;

const Logo = styled.img`
	max-width: 100px;
`;
