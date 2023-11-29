import { useAxios } from '../hooks/useAxios'
import ProductCard from './ProductCard';


function ProductDisplay() {

    let limit = 5;
    
    const productData = useAxios("https://dummyjson.com/products?limit=" + limit, []);

    console.log(productData);

    const products = productData?.data?.products || [];
    
    const productList = products.map((product) => (
        <>
        <ProductCard key={product.id} title={product.title} 
        description={product.description} 
        thumbnail={product.thumbnail}
        price={product.price}/>
        </>
    ));

    return (
        <div>
        {productList}
        {console.log(productList)}
        </div>
    )
}

export default ProductDisplay;