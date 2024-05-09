import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Category from './Category';

const CategoryItemSection = () => {

    const CategoryItem = useLoaderData();
    console.log(CategoryItem)
    //     fetch(`https://assaigment-10-server-site.vercel.app/craftItem`)
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // const result = data.data
    //             // setCategories(result)
    //             // console.log(categories);
    //         })
    // // }, [])
    const {image, subcategory_Name, item_name, short_description, price, rating, customization, processing_time, stockStatus } = CategoryItem;

    return (
        <div className='border-dashed border-y border-stone-950'>
            {
                CategoryItem.slice(0, 6).map(item => <Category key={item._id} item={item}></Category>)
            }
        </div>
    )
}

export default CategoryItemSection;
