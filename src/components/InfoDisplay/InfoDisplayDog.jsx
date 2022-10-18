import React from "react";
import { Typography, Box } from "@mui/material";

const InfoDisplayDog = ({ bio, sx }) => {
	console.log(`bio dog is ${JSON.stringify(bio)}`);
	return (
		<Box
			sx={{
				...sx,
				px: 3,
				py: 3,
				boxSizing: "border-box",
				width: {
					xs: "90vw",
					sm: "90vw",
					md: "90vw",
					lg: "90vw",
					xl: "45vw",
				},
				// border: "5px solid black",
			}}>
			<Typography
				component="h1"
				sx={{
					fontSize: {
						xl: "4rem",
						lg: "rem",
						md: "3rem",
						sm: "3rem",
						xs: "3rem",
					},
					my: "1%",
				}}>
				{bio.name}
			</Typography>
			{/* <Typography sx={{ my: 2 }}>{bio.description}</Typography> */}
			<Typography sx={{ mb: "5%" }}>
				Temperament: {bio.temperament || "unknown"}
			</Typography>
			<Typography sx={{ mb: "5%" }}>
				Bred for: {bio.bred_for || "unknown"}
			</Typography>
			<Typography sx={{ mb: "5%" }}>
				Height: {bio.height ? bio.height.metric + "(meters)" : "unknown"}
			</Typography>
			<Typography sx={{ mb: "5%" }}>
				Weight: {bio.weight ? bio.weight.metric + "(kilograms)" : "unknown"}
			</Typography>
			<Typography sx={{ mb: "5%" }}>
				Life Span: {bio.life_span || "unknown"}
			</Typography>
			<Typography sx={{ mb: "5%" }}>
				Origin: {bio.origin || "unknown"}
			</Typography>
		</Box>
	);
};

export default InfoDisplayDog;
