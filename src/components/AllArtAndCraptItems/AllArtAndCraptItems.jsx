

import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const AllArtAndCraptItems = ({ crafts }) => {
  const craftsd = useLoaderData() || [];
  const { _id } = craftsd;
  console.log(craftsd);
  // delete
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
    <div className="overflow-x-auto">

      <div className="text-center">
        <h1 className="text-3xl text-red-500">Total Card:{craftsd?.length} </h1>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Subcategory Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>View details</th>
            </tr>
          </thead>
          {craftsd?.map((craft, index) => (
            <tbody>
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-24 h-24">
                        <img src={craft.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="text-sm">{craft.subcategory_Name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {craft.short_description}
                </td>
                <td>{craft.price}</td>
                <th>
                  <Link to={`/allArtDetails/${craft._id}`}>
                    <button className="btn btn-sm bg-blue-600">View Details</button>
                  </Link>
                </th>
                {/* <th>
                  <button
                    onClick={() => handleDelete(_id)}
                    className="btn btn-accent mt-4 mb-4">delete
                  </button>
                </th> */}
              </tr>
            </tbody>
          ))}

        </table>
      </div>

    </div>

  );
}

export default AllArtAndCraptItems;

