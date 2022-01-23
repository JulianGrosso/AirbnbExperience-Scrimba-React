import React from "react";
import styled from "styled-components";
import ExperiencesCard from "./components/ExperiencesCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import db from "./data";

function App() {
	return (
		<MainContainer>
			<AppContainer>
				<Navbar />
				<Hero />
				<CardsContainer>
					{db.map((experience) => (
						<ExperiencesCard key={experience.id} {...experience} />
					))}
				</CardsContainer>
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
	width: 600px;
	max-width: 800px;
	max-height: 830px;
	border-radius: 9px;
	background-color: #ffffff;

	overflow-x: hidden;
`;

const CardsContainer = styled.div`
	width: auto;

	margin-left: 36px;
	margin-right: 36px;

	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	flex-wrap: nowrap;
	overflow-x: auto;
`;
