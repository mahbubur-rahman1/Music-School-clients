import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";
import useEnroll from "../Hooks/useEnroll";


const SelectetClass = () => {
    const [cart, refetch] = useEnroll();
    const total = cart.reduce((sum, item) => item.price + sum, 0)


    const handleDelete = (item) => {
        console.log(item)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-12-server-site-mahbubur-rahman1.vercel.app/enroll/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your Class has been deleted.',
                                'success'
                            )

                        }
                    })

            }
        })


    }



    return (
        <div className="w-full pb-[700px] pt-20  text-white">
            <Helmet>
                <title>Music School | Dashboard | my-Select-class</title>
            </Helmet>
            <div className="flex uppercase font-semibold justify-evenly items-center gap-4 mb-2">
                <h3 className="text-2xl">Total Class: <span className="text-red-500">{cart.length}</span></h3>
                <h3 className="text-2xl">Total Price: <span className="text-red-500">${total}</span></h3>
                <Link to="/dashboard/payment">

                    <button className="btn border-0 btn-primary ">Pay Now</button>
                </Link>
            </div>

            <div data-aos="fade-up" className="overflow-x-auto mt-5  w-full">
                <table
                    className="table w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-white text-xl">
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Instructors Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((item, index) => (
                            <tr
                                key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={item.picture}
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                               
                                <td className="">{item.price}$
                                </td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item)}
                                        className="btn bg-red-500 text-white border-0 "
                                    >
                                        <FaTrashAlt></FaTrashAlt>{" "}
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SelectetClass;
