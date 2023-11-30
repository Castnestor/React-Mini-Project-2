import { useAxios } from '../hooks/useAxios';
import ProductCard from './ProductCard';
import Grid from "@mui/material/Grid";


function ProductDisplay() {

    let limit = 30;
    
    const productData = useAxios("https://dummyjson.com/products?limit=" + limit, []);

    console.log(productData);

    const products = productData?.data?.products || [];
    
    const productList = products.map((product) => (
        <Grid key={product.id} item xs={12} md={4} lg={3}>
        <ProductCard title={product.title} 
        description={product.description} 
        thumbnail={product.thumbnail}
        price={product.price}/>
        </Grid>
    ));

    return (
        <Grid container spacing={6} my={4}>
        {productList}
        {console.log(productList)}
        </Grid>
    )
}

export default ProductDisplay;