import React from "react";
import { ImageList, ImageListItem } from "@mui/material";

const ImageDisplay = ({ data, sx }) => {
	return (
		<ImageList sx={sx} cols={2}>
			{data.map((item) => {
				return (
					<ImageListItem key={item.id}>
						<img src={item.url} alt=" " loading="lazy" />
					</ImageListItem>
				);
			})}
		</ImageList>
	);
};

export default ImageDisplay;
