import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useUserContext } from "../context/userContext";
import { NavLink, useNavigate } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import ProductPage from "../pages/ProductPage";

export default function ProductCard({
  id,
  title,
  description,
  price,
  brand,
  category,
  thumbnail,
  quantity = 1
}) {
  const { handleCartUpdate } = useCartContext();
  const { logedUser } = useUserContext();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);

  // const [cart, setCart] = React.useState([]);

  const handleAddToCart = () => {
    if (logedUser.name) {
      handleCartUpdate({
        id,
        title,
        description,
        price,
        brand,
        category,
        thumbnail,
        quantity,
      });
      console.log("added to cart");
      setOpen(true);
    } else {
      navigate("/login");
    }
  };

  const handleProductPage = () => {
    // <NavLink to="/product" id={id} title={title}></NavLink>
    console.log("redirecting");
    return <ProductPage />;
  };

  return (
    <>
      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Your {title} has been added to cart
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleProductPage}>
          <CardMedia
            component="img"
            height="140"
            image={thumbnail}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Typography variant="body2" color="text.primary">
          Brand: {brand}
        </Typography>
        <Typography variant="body2" color="text.primary">
          Price: {price}
        </Typography>
        <CardActions>
          <Button size="small" color="primary" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
