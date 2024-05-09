import { useContext, useState } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const AddItem = () => {

    const { user } = useContext(AuthContext);
    console.log("this is ",user);
    const [formErrors, setFormErrors] = useState({});
    const Navigate = useNavigate();

    const handleAddArtAndCraftItem = event => {
        event.preventDefault();

        const form = event.target;

        const userName = form.userName.value;
        const userEmail = form.userEmail.value;
        const name = form.name.value;
        const Subcategory = form.Subcategory.value;
        const Price = form.Price.value;
        const Rating = form.Rating.value;
        const description = form.description.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const photoURL = form.photoURL.value;

        // Object to store error messages for each field
        const errors = {};
        // Check for empty fields and set error messages
        if (!photoURL) errors.photoURL = 'Photo Url is required';
        if (!name) errors.name = 'Item Name is required';
        if (!description) errors.description = 'Short Description is required';
        if (!Price) errors.Price = 'Price is required';
        if (!Rating) errors.Rating = 'Rating is required';
        if (!processing_time) errors.processing_time = 'Processing Time is required';
        if (!userEmail) errors.userEmail = 'Email is required';
        if (!userName) errors.userName = 'User Name is required';

        // Set formErrors state with errors object
        setFormErrors(errors);

        // If any error exists, exit the function
        if (Object.keys(errors).length !== 0) return;

        const newArtAndCraftAdd = { userName, userEmail, name, Subcategory, Price, Rating, description, processing_time, customization, stockStatus, photoURL }

        // console.log(newArtAndCraftAdd);

        // send data
        fetch('https://assaigment-10-server-site.vercel.app/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newArtAndCraftAdd)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Add Item Successfully',
                        icon: 'success',
                        confirmButtonText: 'Okey'
                    })
                }
            })
    }

    console.log('name is ', user.displayName)
    return (
        <div className="bg-cyan-100 p-24">
            <h1 className="text-center mb-10 text-3xl font-extrabold">Add New Art & Craft item</h1>
            <form onSubmit={handleAddArtAndCraftItem} className="card-body">
                {/* row-1 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                User Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="userName" placeholder="Your Name" value={user?.displayName} className="input input-bordered w-full" readOnly id="" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                User Email
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="email" name="userEmail" placeholder="Your Email" value={user?.email} className="input input-bordered w-full" id="" />
                        </label>
                    </div>
                </div>
                {/* row-2 */}
                <div className="md:flex gap-4 mb-2">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Art & Craft Name
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Art & Craft Name" className={`input input-bordered w-full ${formErrors.name ? 'input-error' : ''}`} id="" />
                            {formErrors.name && <p className="text-red-400">{formErrors.name}</p>}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Subcategory Name
                            </span>
                        </label>

                        <label className="input-group">
                            <select type="text" name="Subcategory" placeholder="Subcategory Name" className="select select-bordered w-full" id="">
                                <option disabled selected>Subcategory Name</option>
                                <option>Wooden Furniture & Sculptures</option>
                                <option>Wooden Home Decor</option>
                                <option>Wooden Utensils and Kitchenware</option>
                                <option>Jute Home Decor</option>
                                <option>Jute Kitchenware & utensils</option>
                                <option>Jute and wooden jowellery</option>

                            </select>
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
                            <input type="text" name="Price" placeholder="Price" className={`input input-bordered w-full ${formErrors.Price ? 'input-error' : ''}`} id="" />
                            {formErrors.Price && <p className="text-red-400 text-sm">{formErrors.Price}</p>}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Rating
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="Rating" placeholder="Rating" className={`input input-bordered w-full ${formErrors.Rating ? 'input-error' : ''}`} id="" />
                            {formErrors.Rating && <p className="text-red-400 text-sm">{formErrors.Rating}</p>}
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
                            <input type="text" name="description" placeholder="description" className={`input input-bordered w-full ${formErrors.description ? 'input-error' : ''}`} id="" />
                            {formErrors.description && <p className="text-red-400 text-sm">{formErrors.description}</p>}
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Processing Time
                            </span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="Processing Time" className={`input input-bordered w-full ${formErrors.processing_time ? 'input-error' : ''}`} id="" />
                            {formErrors.processing_time && <p className="text-red-400 text-sm">{formErrors.processing_time}</p>}
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
                            <select type="text" name="customization" placeholder="Example- yes/no" className="select select-bordered w-full" id="" >
                                <option disabled selected>Example</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">
                                Stock Status
                            </span>
                        </label>
                        <label className="input-group">
                            <select type="text" name="stockStatus" placeholder="Example- In stock/Made to Order" className="select select-bordered w-full" id="">
                                <option disabled selected>Example</option>
                                <option>In stock</option>
                                <option>Made to Order</option>
                            </select>
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
                            <input type="text" name="photoURL" placeholder="Photo URL" className={`input input-bordered w-full ${formErrors.photoURL ? 'input-error' : ''}`} id="" />
                            {formErrors.photoURL && <p className="text-red-400 text-sm ">{formErrors.photoURL}</p>}
                        </label>
                    </div>

                </div>
                {/* add button */}
                <input type="submit" value="Add Art & Craft Item" className="mt-6 mb-6 btn btn-primary" />

            </form>
        </div>
    )
}

export default AddItem
