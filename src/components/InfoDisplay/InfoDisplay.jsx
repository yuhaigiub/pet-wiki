import React from "react";
import { Typography, Rating, Box } from "@mui/material";

const SimpleRating = ({ label, value }) => {
	return (
		<>
			<Typography component="legend">{label}</Typography>
			<Rating readOnly name={label} value={value} />
		</>
	);
};

const InfoDisplay = ({ bio, sx }) => {
	return (
		<Box sx={{ ...sx, px: 3, boxSizing: "border-box" }}>
			<Typography
				component="h1"
				sx={{ fontSize: { xl: "4rem", lg: "rem", md: "3rem", sm: "3rem", xs: "3rem" }, my: "1%" }}>
				{bio.name}
			</Typography>
			<Typography sx={{ my: 2 }}>{bio.description}</Typography>
			<Typography sx={{ mb: "5%" }}>Temperament: {bio.temperament}</Typography>
			<SimpleRating label="Adaptability" value={bio.adaptability} />
			<SimpleRating label="Affection Level" value={bio.affection_level} />
			<SimpleRating label="Child Friendly" value={bio.child_friendly} />
			<SimpleRating label="Dog Friendly" value={bio.dog_friendly} />
			<SimpleRating label="Stranger Frienly" value={bio.stranger_friendly} />
			<SimpleRating label="Social Needs" value={bio.social_needs} />
			<SimpleRating label="Energy Level" value={bio.energy_level} />
			<SimpleRating label="Grooming" value={bio.grooming} />
			<SimpleRating label="Hairless" value={bio.hairless} />
			<SimpleRating label="Health Issues" value={bio.health_issues} />
			<SimpleRating label="Intelligence" value={bio.intelligence} />
		</Box>
	);
};

export default InfoDisplay;
