import React from "react";
import { useState, useEffect, useMemo } from "react";
import { Box, CssBaseline } from "@mui/material";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";
import InfoDisplayCat from "./components/InfoDisplay/InfoDisplayCat";
import InfoDisplayDog from "./components/InfoDisplay/InfoDisplayDog";
import Header from "./components/Header/Header";
import Searchbar from "./components/Searchbar/Searchbar";

const optionsCats = [
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

const optionsDogs = [
	{ id: "1", name: "Affenpinscher" },
	{ id: "2", name: "Afghan Hound" },
	{ id: "3", name: "African Hunting Dog" },
	{ id: "4", name: "Airedale Terrier" },
	{ id: "5", name: "Akbash Dog" },
	{ id: "6", name: "Akita" },
	{ id: "7", name: "Alapaha Blue Blood Bulldog" },
	{ id: "8", name: "Alaskan Husky" },
	{ id: "9", name: "Alaskan Malamute" },
	{ id: "10", name: "American Bulldog" },
	{ id: "11", name: "American Bully" },
	{ id: "12", name: "American Eskimo Dog" },
	{ id: "13", name: "American Eskimo Dog (Miniature)" },
	{ id: "14", name: "American Foxhound" },
	{ id: "15", name: "American Pit Bull Terrier" },
	{ id: "16", name: "American Staffordshire Terrier" },
	{ id: "17", name: "American Water Spaniel" },
	{ id: "18", name: "Anatolian Shepherd Dog" },
	{ id: "19", name: "Appenzeller Sennenhund" },
	{ id: "21", name: "Australian Cattle Dog" },
	{ id: "22", name: "Australian Kelpie" },
	{ id: "23", name: "Australian Shepherd" },
	{ id: "24", name: "Australian Terrier" },
	{ id: "25", name: "Azawakh" },
	{ id: "26", name: "Barbet" },
	{ id: "28", name: "Basenji" },
	{ id: "29", name: "Basset Bleu de Gascogne" },
	{ id: "30", name: "Basset Hound" },
	{ id: "31", name: "Beagle" },
	{ id: "32", name: "Bearded Collie" },
	{ id: "33", name: "Beauceron" },
	{ id: "34", name: "Bedlington Terrier" },
	{ id: "36", name: "Belgian Malinois" },
	{ id: "38", name: "Belgian Tervuren" },
	{ id: "41", name: "Bernese Mountain Dog" },
	{ id: "42", name: "Bichon Frise" },
	{ id: "43", name: "Black and Tan Coonhound" },
	{ id: "45", name: "Bloodhound" },
	{ id: "47", name: "Bluetick Coonhound" },
	{ id: "48", name: "Boerboel" },
	{ id: "50", name: "Border Collie" },
	{ id: "51", name: "Border Terrier" },
	{ id: "53", name: "Boston Terrier" },
	{ id: "54", name: "Bouvier des Flandres" },
	{ id: "55", name: "Boxer" },
	{ id: "56", name: "Boykin Spaniel" },
	{ id: "57", name: "Bracco Italiano" },
	{ id: "58", name: "Briard" },
	{ id: "59", name: "Brittany" },
	{ id: "61", name: "Bull Terrier" },
	{ id: "62", name: "Bull Terrier (Miniature)" },
	{ id: "64", name: "Bullmastiff" },
	{ id: "65", name: "Cairn Terrier" },
	{ id: "67", name: "Cane Corso" },
	{ id: "68", name: "Cardigan Welsh Corgi" },
	{ id: "69", name: "Catahoula Leopard Dog" },
	{ id: "70", name: "Caucasian Shepherd (Ovcharka)" },
	{ id: "71", name: "Cavalier King Charles Spaniel" },
	{ id: "76", name: "Chesapeake Bay Retriever" },
	{ id: "78", name: "Chinese Crested" },
	{ id: "79", name: "Chinese Shar-Pei" },
	{ id: "80", name: "Chinook" },
	{ id: "81", name: "Chow Chow" },
	{ id: "84", name: "Clumber Spaniel" },
	{ id: "86", name: "Cocker Spaniel" },
	{ id: "87", name: "Cocker Spaniel (American)" },
	{ id: "89", name: "Coton de Tulear" },
	{ id: "92", name: "Dalmatian" },
	{ id: "94", name: "Doberman Pinscher" },
	{ id: "95", name: "Dogo Argentino" },
	{ id: "98", name: "Dutch Shepherd" },
	{ id: "101", name: "English Setter" },
	{ id: "102", name: "English Shepherd" },
	{ id: "103", name: "English Springer Spaniel" },
	{ id: "104", name: "English Toy Spaniel" },
	{ id: "105", name: "English Toy Terrier" },
	{ id: "107", name: "Eurasier" },
	{ id: "108", name: "Field Spaniel" },
	{ id: "110", name: "Finnish Lapphund" },
	{ id: "111", name: "Finnish Spitz" },
	{ id: "113", name: "French Bulldog" },
	{ id: "114", name: "German Pinscher" },
	{ id: "115", name: "German Shepherd Dog" },
	{ id: "116", name: "German Shorthaired Pointer" },
	{ id: "119", name: "Giant Schnauzer" },
	{ id: "120", name: "Glen of Imaal Terrier" },
	{ id: "121", name: "Golden Retriever" },
	{ id: "123", name: "Gordon Setter" },
	{ id: "124", name: "Great Dane" },
	{ id: "125", name: "Great Pyrenees" },
	{ id: "127", name: "Greyhound" },
	{ id: "128", name: "Griffon Bruxellois" },
	{ id: "129", name: "Harrier" },
	{ id: "130", name: "Havanese" },
	{ id: "134", name: "Irish Setter" },
	{ id: "135", name: "Irish Terrier" },
	{ id: "137", name: "Irish Wolfhound" },
	{ id: "138", name: "Italian Greyhound" },
	{ id: "140", name: "Japanese Chin" },
	{ id: "141", name: "Japanese Spitz" },
];

const dogsURL = "https://api.thedogapi.com/v1/";
const catsURL = "https://api.thecatapi.com/v1/";

const App = () => {
	const [breedId, setBreedId] = useState("");
	const [data, setData] = useState([]);
	const [bio, setBio] = useState([]);
	const [animalType, setAnimalType] = useState(false);

	const options = useMemo(() => {
		return animalType ? optionsDogs : optionsCats;
	}, [animalType]);

	const header = useMemo(() => {
		return {
			method: "GET",
			headers: {
				"x-api-key": animalType
					? process.env.REACT_APP_DOG_API_KEY
					: process.env.REACT_APP_CAT_API_KEY,
			},
		};
	}, [animalType]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.currentTarget);
		const id = options.find((x) => x.name === data.get("breedId")).id;
		setBreedId(id);
	};

	// get image
	useEffect(() => {
		console.log("fetching image");
		const url =
			(animalType ? dogsURL : catsURL) +
			`images/search?order=ASC&limit=100&page=0&breed_ids=${breedId}`;

		if (breedId !== "") {
			console.log(`looking for ${breedId}`);

			fetch(url, header)
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
	}, [breedId, header, animalType]);

	useEffect(() => {
		setBreedId("");
		setBio([]);
	}, [animalType]);

	//get breeds data
	useEffect(() => {
		const url = (animalType ? dogsURL : catsURL) + "breeds";
		console.log("looking for bio");
		if (bio.length === 0) {
			fetch(url, header)
				.then((response) => {
					return response.json();
				})
				.then((response) => {
					console.log(response);
					setBio(response);
				})
				.catch((error) => {
					console.log(error);
				});
		}
	}, [bio, header, animalType]);

	return (
		<>
			<Header
				animalType={animalType}
				switchHandler={() => {
					setAnimalType((type) => !type);
				}}
			/>
			<Box
				sx={{
					display: "flex",
					flexDirection: {
						xl: "row",
						lg: "column",
						md: "column",
						sm: "column",
						xs: "column",
					},
					justifyContent: {
						xl: "space-between",
					},
				}}>
				<CssBaseline />
				<Box
					sx={{
						px: "4%",
						boxSizing: "border-box",
						mb: 3,
					}}>
					<Searchbar
						animalType={animalType}
						handleSubmit={handleSubmit}
						options={options}
					/>

					{data.length !== 0 ? (
						<ImageDisplay
							data={data}
							sx={{
								width: {
									xs: "90vw",
									sm: "90vw",
									md: "90vw",
									lg: "90vw",
									xl: "40vw",
								},
								height: {
									xs: "70vh",
									sm: "70vh",
									md: "70vh",
									lv: "60vh",
									xl: "63vh",
								},
								border: "5px solid black",
							}}
						/>
					) : (
						<Box
							sx={{
								width: {
									xs: "90vw",
									sm: "90vw",
									md: "90vw",
									lg: "90vw",
									xl: "40vw",
								},
								height: {
									xs: "70vh",
									sm: "70vh",
									md: "70vh",
									lv: "60vh",
									xl: "63vh",
								},
								// border: "3px solid red",
								backgroundColor: animalType ? "success.light" : "primary.main",
							}}></Box>
					)}
				</Box>
				<Box
					sx={{
						// overflow: { xl: "auto" },
						px: "4%",
						boxSizing: "border-box",
						mb: 5,
					}}>
					{breedId !== "" && !animalType && (
						<InfoDisplayCat
							bio={bio.find((value) => value.id.toString() === breedId) || {}}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: {
									xl: "flex-start",
									lg: "flex-start",
									md: "center",
									sm: "center",
									xs: "center",
								},
								textAlign: {
									xl: "left",
									lg: "left",
									md: "center",
									sm: "center",
									xs: "center",
								},
							}}
						/>
					)}
					{breedId !== "" && animalType && (
						<InfoDisplayDog
							bio={bio.find((value) => value.id.toString() === breedId) || {}}
							sx={{
								display: "flex",
								flexDirection: "column",
								alignItems: {
									xl: "flex-start",
									lg: "flex-start",
									md: "center",
									sm: "center",
									xs: "center",
								},
								textAlign: {
									xl: "left",
									lg: "left",
									md: "center",
									sm: "center",
									xs: "center",
								},
							}}
						/>
					)}
				</Box>
			</Box>
		</>
	);
};

export default App;
