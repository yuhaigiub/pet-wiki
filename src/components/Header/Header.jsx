import React from "react";
import { Box, Typography, Switch } from "@mui/material";

const Header = ({ animalType, switchHandler }) => {
	return (
		<Box
			sx={{
				backgroundColor: animalType ? "success.light" : "primary.main",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				position: "relative",
				px: "4%",
				py: "1%",
				boxSizing: "border-box",
			}}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
				}}>
				<Switch color="error" checked={animalType} onChange={switchHandler} />
				<Typography
					sx={{
						color: "white",
						fontSize: {
							xl: "2rem",
							lg: "1.5rem",
							md: "1.25rem",
							sm: "1rem",
							xs: "0.5rem",
						},
					}}>
					Switch to dog
				</Typography>
			</Box>
			<Typography
				sx={{
					color: "white",
					fontFamily: "Audiowide, san-serif",
					fontSize: {
						xl: "3rem",
						lg: "2.75rem",
						md: "2.5rem",
						sm: "1rem",
						xs: "0.75rem",
					},
					// border: "1px solid red",
				}}>
				Welcome to the Pet Wiki
			</Typography>
		</Box>
	);
};

export default Header;
