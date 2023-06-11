
import { Rating } from "@smastrom/react-rating";
import React from "react";

const AllInstructors = ({ data }) => {
//   console.log(data);
  const { image, name, email, rating, students } = data;
  return (
    <div data-aos="fade-up"
     className="md:flex gap-5 bg-black bg-opacity-60 rounded-md">

      <div className="">
        <img className="h-48 w-48 rounded-md mx-auto" src={image} alt="" />
      </div>

      <div className=" py-5 pl-5">
        <h2>
          <span>Name: </span>
          <span>{name}</span>
        </h2>
        <p>
          <span>Email: </span> <span>{email}</span>
        </p>
        <p>
          <span>Student: </span> <span>{students}</span>
        </p>
        <p></p>
        <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
      </div>

    </div>
  );
};

export default AllInstructors;
