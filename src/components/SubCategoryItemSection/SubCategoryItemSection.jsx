import { useEffect } from "react";
import SubCategory from "./SubCategory";
import { useLoaderData } from "react-router-dom";


const SubCategoryItemSection = () => {

    const CategoryItems = useLoaderData();
    console.log(CategoryItems)
    
    const { image, subcategory_Name, item_name, short_description, price, rating, customization, processing_time, stockStatus } = CategoryItems;

    return (
        <div className='border-dashed border-y border-stone-950'>
            {
                CategoryItems.slice(6, 12).map(items => <SubCategory  key={items._id} items={items}></SubCategory>)
            }
        </div>

    )
}

export default SubCategoryItemSection
