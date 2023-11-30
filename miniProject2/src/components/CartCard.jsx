import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function CartCard({
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
}) {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", margin: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={thumbnail}
        alt={title}
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto", width: 800 }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
      </Box>
      <Box>
        <CardContent sx={{ flex: "1 0 auto", width: 150 }}>
          <Typography component="div" variant="h5">
            Sub total: {price}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
