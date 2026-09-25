import { useEffect, useState } from "react";
import Blogs from "./HomeComponents/Blogs";
import Category from "./HomeComponents/Category";
import CategoryBlog from "./HomeComponents/CategoryBlog";


const Home = () =>{
    const [blogs, setBlogs] = useState([])
    const [categories, setCatagories] = useState([])
    const [selectCategory, setSelectCategory] = useState("")

    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    useEffect(()=>{
        fetch("category.json")
        .then(res => res.json())
        .then(data => setCatagories(data))
    },[])

    const handleCategory = (categoryName) =>{
        setSelectCategory(categoryName);
    }
    return (
        <div className="container max-auto  mt-12">
          
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                <div className="col-span-8 lg:order-1 order-2">
                    <Blogs blogs={blogs}/>
                </div>
                <div className="col-span-4 w-96 lg:w-auto lg:order-2 order-1 border border-gray-200 px-4 py-4 rounded-md">
                    <Category categories={categories} handleCategory={handleCategory} />
                    <CategoryBlog selectCategory={selectCategory} blogs={blogs}/>
                </div>
            </div>

        </div>
    );
};

export default Home;