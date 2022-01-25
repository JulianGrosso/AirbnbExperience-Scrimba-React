import React from "react";
import styled from "styled-components";

const ExperiencesCard = (props) => {
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = "SOLD OUT";
	} else if (props.location === "Online") {
		badgeText = "Online";
	}

	return (
		<CardContainer>
			<ImageWrap>
				<Photo src={`./assets/${props.coverImg}`} alt="" />
				{badgeText && <State>{badgeText}</State>}
			</ImageWrap>
			<InfoWrap>
				<Rating>
					<Star src="./assets/star.png" alt="rating" />
					<Score>{props.stats.rating}</Score>
					<ReviewsCuntry>
						({props.stats.reviewCount}) • {props.location}
					</ReviewsCuntry>
				</Rating>
				<Title>{props.title}</Title>
				<Price>
					<strong>From ${props.price}</strong> / person
				</Price>
			</InfoWrap>
		</CardContainer>
	);
};

export default ExperiencesCard;

const CardContainer = styled.div`
	height: 300px;
	width: 176px;
	max-height: 300px;
	max-width: 176px;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	
	margin-top: 10px;
	margin-bottom: 10px;

	cursor: pointer;
`;

const ImageWrap = styled.div`
	position: relative;
	width: 176px;
	height: 235px;
`;

const Photo = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 9px;
	z-index: 1;
`;

const State = styled.p`
	position: absolute;
	top: 10px;
	left: 10px;

	font-size: 10px;
	text-transform: uppercase;
	font-weight: 600;
	color: #222222;

	padding: 4px 6px;

	background-color: #fff;
	border-radius: 2px;

	z-index: 10;
`;

const InfoWrap = styled.div`
	width: 100%;
	margin-top: 5px;
	font-size: 12px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const Rating = styled.div`
	display: flex;
	align-items: center;
`;

const Star = styled.img`
	width: 14px;
	height: 14px;
	margin-right: 5px;
	margin-top: -3px;
`;

const Score = styled.p`
	margin-right: 4px;
`;

const ReviewsCuntry = styled.p`
	color: #918e9b;
`;

const Title = styled.p`
	margin-top: 3px;
`;

const Price = styled.p`
	margin-top: 3px;
`;
