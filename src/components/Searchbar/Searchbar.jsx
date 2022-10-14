import React from "react";
import { Button, Autocomplete, TextField, Box } from "@mui/material";

const Searchbar = ({ animalType, handleSubmit, options }) => {
	return (
		<Box
			component="form"
			onSubmit={handleSubmit}
			sx={{
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				width: {
					xs: "90vw",
					sm: "90vw",
					md: "90vw",
					lg: "90vw",
					xl: "40vw",
				},
				pt: "8%",
				pb: "5%",
			}}>
			<Autocomplete
				id="breed-combo-box"
				options={options}
				sx={{ width: "90%" }}
				getOptionLabel={(option) => option.name}
				renderInput={(params) => (
					<TextField required {...params} name="breedId" label="Select Breed" />
				)}
			/>
			<Button
				type="submit"
				size="large"
				variant="contained"
				color={animalType ? "success" : "primary"}
				sx={{ ml: "2%" }}>
				Search
			</Button>
		</Box>
	);
};

export default Searchbar;
