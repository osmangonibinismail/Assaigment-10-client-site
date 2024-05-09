import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

const CategoryDetais = () => {

    const [category, setCategory] = useState({});
    const { _id, image, subcategory_Name, item_name, short_description, price, rating, customization, processing_time, stockStatus } = category;
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
        fetch(`https://assaigment-10-server-site.vercel.app/craftItem`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCategory(data.find(item => item._id == id))

            });
    }, [id])
    console.log(category);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h2 className="text-center text-xl font-bold"><a className="font-bold">Title: </a>{subcategory_Name}</h2>
                        <p className="text-center text-large"><a className="font-bold">Description: </a>{short_description} </p>
                        <div className='flex justify-between'>
                            <h3 className="text-xl font-semibold"><a className="font-bold">Price: </a>{price}</h3>
                            <h3 className=""><a className="font-bold">Rating: </a>{rating} </h3>
                        </div>
                        <div className='flex justify-between'>
                            <h6 className="text-xl font-semibold"><a className="font-bold">Stock Status:  </a>{stockStatus}</h6>
                            <h6 className=""><a className="font-bold">Customization: </a>{customization}</h6>
                        </div>
                        <h6 className=""><a className="font-bold">Processing Time: </a>{processing_time} </h6>
                        <Link to={`/update/${_id}`}>
                            <button className=" border-b-2 btn btn-success mt-5 mb-4">
                                update
                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CategoryDetais;
