import React from "react";
import { Typography, Rating, Box } from "@mui/material";

const SimpleRating = ({ label, value }) => {
	return (
		<>
			<Typography component="legend">{label}</Typography>
			<Rating name={label} value={value} />
		</>
	);
};

const InfoDisplay = ({ bio }) => {
	return (
		<Box>
			<Typography component="h1" variant="h2">
				{bio.name}
			</Typography>
			<Typography>{bio.description}</Typography>
			<br />
			<SimpleRating label="Adaptability" value={bio.adaptability} />
			<SimpleRating label="Affection Level" value={bio.affection_level} />
			<Typography>Temperament: {bio.temperament}</Typography>
			<br />
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
