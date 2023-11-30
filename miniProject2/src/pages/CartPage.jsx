import { Grid } from "@mui/material";
import CartCard from "../components/CartCard";
import { useCartContext } from "../context/CartContext";
import { useUserContext } from "../context/userContext";

export default function CartPage() {
  const { logedUser } = useUserContext();

  let total = 0;

  const { cart } = useCartContext();
  console.log(cart);

  function calculateTotal() {
    const myCount = cart.map((subtotal) => (total = total + subtotal.price));
  }

  const myCart = cart.map((item) => (
    <Grid item key={item.id} xs={12}>
      <CartCard
        title={item.title}
        description={item.description}
        price={item.price}
        brand={item.brand}
        category={item.category}
        thumbnail={item.thumbnail}
      />
    </Grid>
  ));

  calculateTotal();

  if (!logedUser.name)
    return (
      <>
        <h3>You are not Logged in</h3>
      </>
    );

  return (
    <>
      <Grid container spacing={1} mx={4}>
        <h1>{logedUser.name}'s Cart</h1>
        <div>{myCart}</div>
      </Grid>
      <div>
        <h3>Total</h3>
        <h3>{total}</h3>
      </div>
    </>
  );
}
