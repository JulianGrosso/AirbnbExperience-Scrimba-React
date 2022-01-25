import React from "react";
import styled from "styled-components";

const Hero = () => {
	return (
		<HeroContainer>
			<ImgHero src="./assets/photo-grid.png" alt="" />
			<TitleWrap>
				<Title>Online Experiences</Title>
				<Text>
					Join unique interactive activities led by one-of-a-kind hosts—all
					without leaving home.
				</Text>
			</TitleWrap>
		</HeroContainer>
	);
};

export default Hero;

const HeroContainer = styled.div`
	width: 100%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	padding: 40px;

	@media screen and (max-width: 375px) {
		flex-direction: column;
		padding-bottom: 0px;
	}
`;

const ImgHero = styled.img`
	width: 500px;

	@media screen and (max-width: 375px) {
		width: 300px;
	}
`;

const TitleWrap = styled.div`
	padding-top: 25px;
	padding-left: 40px;

	@media screen and (max-width: 375px) {
		padding-left: 0px;
	}
`;

const Title = styled.h1`
	text-align: left;
	margin-bottom: 10px;

	@media screen and (max-width: 375px) {
		font-size: 28px;
		text-align: center;
	}
`;

const Text = styled.p`
	max-width: 320px;

	text-align: left;
	font-size: 16px;
	line-height: 110%;
	color: #222222;

	@media screen and (max-width: 375px) {
		text-align: center;
	}
`;
