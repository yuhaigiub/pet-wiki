import React from "react";
import { useState, useEffect } from "react";
import { Autocomplete, TextField, Button, Box, CssBaseline } from "@mui/material";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import InfoDisplay from "./components/InfoDisplay/InfoDisplay";

const options = [
	{ id: "abys", name: "Abyssinian" },
	{ id: "aege", name: "Aegean" },
	{ id: "abob", name: "American Bobtail" },
	{ id: "acur", name: "American Curl" },
	{ id: "asho", name: "American Shorthair" },
	{ id: "awir", name: "American Wirehair" },
	{ id: "amau", name: "Arabian Mau" },
	{ id: "amis", name: "Australian Mist" },
	{ id: "bali", name: "Balinese" },
	{ id: "bamb", name: "Bambino" },
	{ id: "beng", name: "Bengal" },
	{ id: "birm", name: "Birman" },
	{ id: "bomb", name: "Bombay" },
	{ id: "bslo", name: "British Longhair" },
	{ id: "bsho", name: "British Shorthair" },
	{ id: "bure", name: "Burmese" },
	{ id: "buri", name: "Burmilla" },
	{ id: "cspa", name: "California Spangled" },
	{ id: "ctif", name: "Chantilly-Tiffany" },
	{ id: "char", name: "Chartreux" },
	{ id: "chau", name: "Chausie" },
	{ id: "chee", name: "Cheetoh" },
	{ id: "csho", name: "Colorpoint Shorthair" },
	{ id: "crex", name: "Cornish Rex" },
	{ id: "cymr", name: "Cymric" },
	{ id: "cypr", name: "Cyprus" },
	{ id: "drex", name: "Devon Rex" },
	{ id: "dons", name: "Donskoy" },
	{ id: "lihu", name: "Dragon Li" },
	{ id: "emau", name: "Egyptian Mau" },
	{ id: "ebur", name: "European Burmese" },
	{ id: "esho", name: "Exotic Shorthair" },
	{ id: "hbro", name: "Havana Brown" },
	{ id: "hima", name: "Himalayan" },
	{ id: "jbob", name: "Japanese Bobtail" },
	{ id: "java", name: "Javanese" },
	{ id: "khao", name: "Khao Manee" },
	{ id: "kora", name: "Korat" },
	{ id: "kuri", name: "Kurilian" },
	{ id: "lape", name: "LaPerm" },
	{ id: "mcoo", name: "Maine Coon" },
	{ id: "mala", name: "Malayan" },
	{ id: "manx", name: "Manx" },
	{ id: "munc", name: "Munchkin" },
	{ id: "nebe", name: "Nebelung" },
	{ id: "norw", name: "Norwegian Forest Cat" },
	{ id: "ocic", name: "Ocicat" },
	{ id: "orie", name: "Oriental" },
	{ id: "pers", name: "Persian" },
	{ id: "pixi", name: "Pixie-bob" },
	{ id: "raga", name: "Ragamuffin" },
	{ id: "ragd", name: "Ragdoll" },
	{ id: "rblu", name: "Russian Blue" },
	{ id: "sava", name: "Savannah" },
	{ id: "sfol", name: "Scottish Fold" },
	{ id: "srex", name: "Selkirk Rex" },
	{ id: "siam", name: "Siamese" },
	{ id: "sibe", name: "Siberian" },
	{ id: "sing", name: "Singapura" },
	{ id: "snow", name: "Snowshoe" },
	{ id: "soma", name: "Somali" },
	{ id: "sphy", name: "Sphynx" },
	{ id: "tonk", name: "Tonkinese" },
	{ id: "toyg", name: "Toyger" },
	{ id: "tang", name: "Turkish Angora" },
	{ id: "tvan", name: "Turkish Van" },
	{ id: "ycho", name: "York Chocolate" },
];

const header = {
	method: "GET",
	headers: {
		// "x-api-key": "",
	},
};

const App = () => {
	const [breedId, setBreedId] = useState("");
	const [data, setData] = useState([]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const id = options.find((x) => x.name === data.get("breedId")).id;
		setBreedId(id);
	};

	useEffect(() => {
		if (breedId !== "") {
			console.log(`looking for ${breedId}`);
			fetch(
				`https://api.thecatapi.com/v1/images/search?order=ASC&limit=100&page=0&breed_ids=${breedId}`,
				header
			)
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					console.log(response);
					setData(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [breedId]);

	return (
		<>
			<Box sx={{ height: "10vh" }}></Box>
			<Box display="flex" sx={{ width: "100vw", height: "90vh" }}>
				<CssBaseline />
				<Box
					sx={{
						width: "45%",
						height: "100%",
						px: "4%",
						boxSizing: "border-box",
					}}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							width: "100%",
							height: "5%",
							py: "10%",
						}}>
						<Autocomplete
							id="breed-combo-box"
							options={options}
							sx={{ width: "60%" }}
							getOptionLabel={(option) => option.name}
							renderInput={(params) => (
								<TextField required {...params} name="breedId" label="Select Breed" />
							)}
						/>
						<Button
							type="submit"
							size="large"
							variant="contained"
							color="primary"
							sx={{ ml: "2%" }}>
							Search
						</Button>
					</Box>
					{data.length !== 0 && (
						<ImageDisplay
							data={data}
							sx={{ width: "100%", height: "70%", border: "3px solid red" }}
						/>
					)}
				</Box>
				<Box sx={{ width: "65%", height: "100%", overflow: "auto", boxSizing: "border-box" }}>
					{data.length !== 0 && <InfoDisplay data={data} />}
				</Box>
			</Box>
		</>
	);
};

export default App;
