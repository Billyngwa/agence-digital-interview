"use client"

const Categories = () => {
    const [allCategories, setAllCategories] = useState([]);
    useEffect(()=> {
        const productCategories = async () => {
            const response = await fetch('https://dummyjson.com/products/category-list');
            const data = await response.json();
            return data
        }
        productCategories();
    },[])
  return (
    <div>Categories</div>
  )
}

export default Categories