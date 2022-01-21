import React from "react";
import styled from "styled-components";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
	return (
		<MainContainer>
			<AppContainer>
				<Navbar />
				<Hero />
			</AppContainer>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div`
	width: 100vw;
	height: 100vh;

	display: flex;
	justify-content: center;

	background-color: #0a0a0a;
`;

const AppContainer = styled.div`
	width: 550px;
	max-width: 550px;
	border-radius: 9px;
	background-color: #ffffff;
`;
