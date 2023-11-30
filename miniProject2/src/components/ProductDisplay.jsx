import { useAxios } from "../hooks/useAxios";
import ProductCard from "./ProductCard";
import Grid from "@mui/material/Grid";

function ProductDisplay({ category, limit }) {
  let categoryUrl = "";
  if (!category == "") {
    categoryUrl = "category/" + category;
  }

  const url =
    "https://dummyjson.com/products/" + categoryUrl + "?limit=" + limit;

  const productData = useAxios(url, []);

  console.log(url);

  const products = productData?.data?.products || [];

  const productList = products.map((product) => (
    <Grid key={product.id} item xs={12} md={4} lg={3}>
      <ProductCard
        id={product.id}
        title={product.title}
        description={product.description}
        price={product.price}
        brand={product.brand}
        category={product.category}
        thumbnail={product.thumbnail}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={6} my={4}>
      {productList}
      {/* {console.log(productList)} */}
    </Grid>
  );
}

export default ProductDisplay;
