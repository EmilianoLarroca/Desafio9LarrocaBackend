import { useEffect, useState } from "react"
import { ProductsList } from "../components/ProductList/ProductsList.jsx"

export const ProductsPage = () => {
    const [products, setproducts] = useState([])
    
    useEffect(()=> {
        const getProducts = async () => {
            const dataJson = await fetch('http://localhost:8080/api/products')
            const data = await dataJson.json()
            setproducts(data.payload)
        }
        getProducts()
    }, [])
    
    return (
    <div>
       <ProductsList products={products}/> 
    </div>
  )
}
