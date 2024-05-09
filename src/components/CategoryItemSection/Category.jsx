import { Link } from "react-router-dom";


const Category = ({ item }) => {

    const {_id, image, subcategory_Name, item_name, short_description, price, rating, customization, processing_time, stockStatus } = item;
    return (
        <div className="p-10 ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} className="w-96 h-40" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{subcategory_Name}</h2>
                    <p>{short_description}</p>
                    <div className="card-actions justify-end">
                    <Link className="btn btn-primary "
                        to={`/categoryDetails/${_id}`}
                    >View Details</Link>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Category
