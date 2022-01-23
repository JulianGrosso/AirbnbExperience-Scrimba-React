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
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	padding: 0px 36px;
	margin: 24px 0px;
`;

const ImgHero = styled.img`
	max-width: 390px;
	align-self: center;
	margin: 10px 0px;
`;

const TitleWrap = styled.div`
	width: 100%;
`;

const Title = styled.h1`
	text-align: left;
	margin-bottom: 16px;
`;

const Text = styled.p`
	text-align: left;
	font-size: 16px;
	line-height: 110%;

	color: #222222;

	max-width: 320px;
`;
