import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateItem = () => {

    const artAndCraftUpdate = useLoaderData();
    console.log(artAndCraftUpdate)
    const {_id, name, Subcategory, Price, Rating, description, processing_time, customization, stockStatus, photoURL} = artAndCraftUpdate;

    const handleUpdateArtAndCraftItem = event =>{
        event.preventDefault();

        const form = event.target;
        console.log(form)

        // const userName = form.userName.value;
        // const userEmail = form.userEmail.value;
        const name = form.name.value;
        const Subcategory = form.Subcategory.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const description = form.description.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const photoURL = form.photoURL.value;


        const artAndCraftUpdated = { name, Subcategory, Price, Rating, description, processing_time, customization, stockStatus, photoURL}

        console.log(artAndCraftUpdated);

        // send data
        fetch(`https://assaigment-10-server-site.vercel.app/add/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(artAndCraftUpdated)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount> 0 ){
                Swal.fire({
                    title: 'Success!',
                    text: 'Art & Craft Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Okey'
                  })
            }
        })
    }

    return (
        <div className="bg-orange-200 p-24">
            <h1 className="text-center mb-10 text-3xl font-extrabold">Update Art & Craft: </h1>
            <form onSubmit={handleUpdateArtAndCraftItem} className="card-body">
                {/* row-1 */}
                {/* <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                User Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="Your Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                User Email
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="userEmail" placeholder="Your Email" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div> */}
                {/* row-2 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Art & Craft Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" defaultValue={name} placeholder="Art & Craft Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Subcategory Name
                            </span>
                        </label>
                        <div>
                            
                        </div>
                        <label className="input-group">
                            <input type="text" name="Subcategory" defaultValue={Subcategory}placeholder="Subcategory Name" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* row-3 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Price
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Price" defaultValue={Price} placeholder="Price" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Rating
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Rating" defaultValue={Rating} placeholder="Rating" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* row-4 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Short description
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="description" defaultValue={description}placeholder="description" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Processing Time
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" defaultValue={processing_time}placeholder="Processing Time" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* row-5 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Customization
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" defaultValue={customization}placeholder="Example- yes/no" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Stock Status
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" defaultValue={stockStatus} placeholder="Example- In stock/Made to Order" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* photo URL */}
                <div className=" mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-bold">
                                Photo URL
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photoURL" defaultValue={photoURL} placeholder="Photo URL" className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                    
                </div>
                {/* add button */}
                <input type="submit" value="Update Art & Craft"  className="mt-6 mb-6 btn btn-primary"/>
                
            </form>
        </div>
    )
}

export default UpdateItem
