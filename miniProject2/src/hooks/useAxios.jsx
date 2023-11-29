import { useState, useEffect } from "react";
import axios from "axios";

export function useAxios(url, defaultValue = {}) {
    
    const [products, setProducts] = useState(defaultValue);

    useEffect(() =>{
        if(url) {
            let ignore = false;
            axios(url)
            .then((json) => {
                if (!ignore) {
                    setProducts(json);
                }
            })
            .catch(error => setProducts(error.message));

            return () => {
                ignore = true;
            }
        }
    }, [url])

    return products;
}