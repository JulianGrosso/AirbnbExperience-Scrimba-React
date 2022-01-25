import React from "react";
import styled from "styled-components";
import ExperiencesCard from "./components/ExperiencesCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import db from "./data";

function App() {
	return (
		<MainContainer>
			<Navbar />
			<Home>
				<Hero />
				<CardsContainer>
					{db.map((experience) => (
						<ExperiencesCard key={experience.id} {...experience} />
					))}
				</CardsContainer>
			</Home>
		</MainContainer>
	);
}

export default App;

const MainContainer = styled.div`
	width: 100vw;
	padding-bottom: 40px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Home = styled.div`
	width: 100%;
	max-width: 1440px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

const CardsContainer = styled.div`
	width: 100%;
	max-width: 900px;
	padding: 25px 0px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 20px;

	@media screen and (max-width: 375px) {
		flex-wrap: nowrap;
		justify-content: flex-start;
		overflow: auto hidden !important;
		padding-left: 20px;
		padding-right: 20px;
	}
`;
