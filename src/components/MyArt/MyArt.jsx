// import React, { useContext, useEffect, useState } from 'react'
// import { AuthContext } from '../Provider/AuthProvider'
import { useLoaderData } from "react-router-dom";
import ArtCard from "../CraftItemSection/ArtCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
const MyArt = () => {

    const [craftAndItems, setCraftAndItems] = useState();
    // const loadedItems = useLoaderData();
    const { user } = useContext(AuthContext);
    console.log(user)
    const fatchDataa = async () => {
        try {
            const response = await axios.get('https://assaigment-10-server-site.vercel.app/add', {
                
            })
            console.log(response)
            const items = response.data.filter(item => item.userEmail === user.email)
            console.log(items)
            setCraftAndItems(items)
        }
        catch(error) {
            console.log(error)
        }
        // setCraftAndItems( loadedItems.data.filter(item => item.email === user.email)) 
        console.log(craftAndItems)
    }
    // const [craftAndItems, setCraftAndItems] = useState(loadedItems);
    useEffect(() => {
        fatchDataa()
    }, [user])

 console.log(craftAndItems);
    return (
        <div className="mb-20 mt-20 p-6 border border-indigo-600">

            <div className="text-center">
                <h1 className="text-3xl text-red-500">Add item:{craftAndItems?.length} </h1>
            </div>

            <div className="grid md:grid-cols-3 gap-4  mt-10 mb-10">
                {
                    craftAndItems?.map(craftAndItem => <ArtCard
                        key={craftAndItem._id}
                        craftAndItem={craftAndItem}
                        craftAndItems={craftAndItems}
                        setCraftAndItems={setCraftAndItems}
                    ></ArtCard>)
                }
            </div>
        </div>
    )
}










//     const {user } = useContext(AuthContext);
//     const [item, setItem] = useState({});

//     useEffect ( () => {
//         fetch(`https://assaigment-10-server-site.vercel.app/myArt/${user?.email}`)
//         .then(res => res.json())
//         .then(data => {
//             setItem(data);
//         })
//     },[]);
//     console.log(item)
//   return (

//     <div className='p-10'>
//         <h1>users:</h1>
//         {
//         item?.map( p => (
//             <div>
//                 <h1>hello:{p.name}</h1>
//             </div>
//         ))
//       }
//     </div>
//   )


export default MyArt
