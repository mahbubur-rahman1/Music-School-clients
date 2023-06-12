import { useContext } from "react";
import { AuthContext } from "../AuthProviter/AuthProviders";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
  const {user} = useContext(AuthContext)
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgUrl = imgResponse.data.display_url;
          const { price, instructorName, danceName, rating,  availableSeats, email } = data;
          const newItem = {
            instructorName,
            price: parseFloat(price),
            danceName,
            availableSeats: parseFloat(availableSeats),
            image: imgUrl,
            email,
            rating : parseFloat(rating)
          };
        //   console.log(newItem);
          axiosSecure.post("/addClass", newItem).then((data) => {
            console.log("after posting new class", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-center",
                icon: "success",
                title: "Your Class is added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

//   danceName, image, instructorName, price, rating, availableSeats

  console.log(errors);
  return (
    <div data-aos="fade-up" className=" w-full p-11 ">
      <h2 className="text-sky-500 text-4xl font-bold text-center my-16">Add Music Information</h2>
      <form  onSubmit={handleSubmit(onSubmit)} className="grid md:w-8/12 mx-auto gap-2">
        <input
          type="text"
          placeholder="Music name"
          {...register("musicName", { required: true, maxLength: 80 })}
          className="input input-bordered w-full "
        />

        <input
          type="text"
          placeholder="Instructor name"
          {...register("instructorName", { required: true, maxLength: 80 })}
          className="input input-bordered w-full "
        />

        <input
          type="email"
          defaultValue={user?.email}
          {...register("email", { required: true, maxLength: 80 })}
          className="input input-bordered w-full "
        />

        <input
          type="number"
          placeholder="Available Seats"
          {...register("availableSeats", { required: true, maxLength: 80 })}
          className="input input-bordered w-full "
        />

        <input
          type="number"
          placeholder="Price"
          {...register("price", { required: true, maxLength: 80 })}
          className="input input-bordered w-full "
        />

<input
          type="number"
          defaultValue="4.5"
          {...register("rating", { required: true, maxLength: 80 })}
          className="input input-bordered w-full text-black "
        />

        

        {/* <div className="grid grid-cols-2 gap-2">
          <select
            {...register("category", { required: true })}
            className="input input-bordered w-full "
          >
            <option value="salad">salad</option>
            <option value="dessert">dessert</option>
            <option value="soup">soup</option>
            <option value="pizza">pizza</option>
          </select>       
        </div> */}


        {/* <textarea
          {...register("Details", { required: true, maxLength: 400 })}
          className="textarea textarea-bordered"
          placeholder="Class Details"
        ></textarea> */}

        <input
          type="file"
          {...register("image", { required: true })}
          className="file-input file-input-bordered w-full max-w-xs"
        />

        <input type="submit" value="Add class" className="btn btn-primary" />
      </form>
    </div>
  );
};

export default AddClass;
