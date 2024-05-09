import { Link } from "react-router-dom";


const SubCategory = ({ items }) => {

    const { _id, image, subcategory_Name, item_name, short_description, price, rating, customization, processing_time, stockStatus } = items;

    return (
        <div>
            <div className="p-10">
                <div className="card lg:card-side bg-base-100 shadow-xl border border-indigo-400">
                    <figure><img src={image} className="w-96 h-40" alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{subcategory_Name}</h2>
                        <p className="py-6">{short_description}</p>
                        <div className="card-actions justify-end flex">
                            <Link className="btn btn-primary "
                                to={`/subCategoryDetails/${_id}`}
                            >View Details</Link>
                            <Link to={`/update/${_id}`}>
                                <button className=" border-b-2 btn btn-success mt-5 mb-4">
                                    update
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubCategory
