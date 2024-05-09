import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const ArtCard = ({ craftAndItem, craftAndItems, setCraftAndItems }) => {

    const { _id, userName, userEmail, name, Subcategory, Price, Rating, description, processing_time, customization, stockStatus, photoURL } = craftAndItem;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //   Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                //   });
                console.log('delete confirmed')
                fetch(`https://assaigment-10-server-site.vercel.app/add/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Your file has been Deleted Successfully',
                                icon: 'success',
                                confirmButtonText: 'Okey!'
                            })
                            const remaining = craftAndItems.filter(craftAndItem => craftAndItem._id !== _id)
                            setCraftAndItems(remaining);

                        }
                    })

            }
        });
    }


    return (
        <div className="card w-90 bg-base-100 shadow-xl mt-4 mb-4 border border-indigo-400 hover:scale-105  hover:border-indigo-200">
            <figure><img src="https://i.ibb.co/0ZBttbH/Screenshot-2024-04-28-133321.png" alt="Shoes" className=" h-70" /></figure>
            <div className="card-body">
                <h2 className="text-center text-xl font-bold">
                    {name}
                </h2>
                <div className="flex justify-between mb-2 mt-3">
                    <h6 className="gap-2"><a className="font-bold">Price:</a> {Price}</h6>
                    <h6 className="gap-2"><a className="font-bold">Rating:</a> {Rating}</h6>

                </div>
                <div className="flex justify-between mb-5 mt-2">
                    <h6 className=""><a className="font-bold">Stock Status: </a> {stockStatus}</h6>
                    <h6 className=""><a className="font-bold">customization: </a> {customization}</h6>
                </div>
                <Link to={`/update/${_id}`}>
                    <button className=" border-b-2 btn btn-success w-full mb-4">
                        update
                    </button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-accent mt-4 mb-4">delete
                </button>


            </div>
        </div>
    )
}

export default ArtCard
