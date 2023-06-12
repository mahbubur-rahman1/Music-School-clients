import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaTrashAlt } from "react-icons/fa";




const AllUsers = () => {
  const  [axiosSecure] = useAxiosSecure()
  const { data: users = [], refetch } = useQuery(["ussers"], async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  });

  const handleDelete = user =>{
    // console.log(id)

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
            fetch(`https://assignment-12-server-site-mahbubur-rahman1.vercel.app/user-delete/${user._id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){    
                    refetch();                      
                    Swal.fire(
                        'Deleted!',
                        'Users has been deleted.',
                        'success'
                    )
                }
                refetch()
            })

        }
      })

  }

  const handleMakeAdmin = id =>{
    console.log(id)
    fetch(`https://assignment-12-server-site-mahbubur-rahman1.vercel.app/users/admin/${id}`, {
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User has been Admin',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }

  const handleMakeInstructor = id =>{
    console.log(id)
    fetch(`https://assignment-12-server-site-mahbubur-rahman1.vercel.app/users/instructor/${id}`, {
        method: 'PATCH',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            refetch()
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User has been on Instructor',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
  }


  return (
    <div className="w-11/12 mx-auto">



      <div data-aos="fade-up" className="overflow-x-auto ">
      <h3 className="text-center text-3xl mb-5 font-bold mt-14 text-white ">
      Total User: <span className="text-red-500">{users.length}</span>
      </h3>
        <table className="table text-white  w-full">
            
          {/* head */}
          <thead>
            
            <tr className="text-white text-xl">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                users.map((user, index)=>
                <tr 
                 key={user._id}>
                <th>{index+1}</th>
                <td>{user.displayName}</td>
                <td>{user.email}</td>
                <td>{user.role === 'admin'? 'admin' :
                <button onClick={()=>handleMakeAdmin(user._id)} className="btn btn-sm bg-sky-500 text-white border-0 ">Admin</button>
                } </td>
                 <td>{user.role === 'instructor'? 'instructor' :
                <button onClick={()=>handleMakeInstructor(user._id)} className="btn btn-sm bg-sky-500 text-white border-0 ">instructor</button>
                } </td>
                                 

                <td><button onClick={()=>handleDelete(user)} className="btn btn-sm bg-red-500 text-white border-0 "><FaTrashAlt></FaTrashAlt> </button></td>
              </tr>
                )
            }
           
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
