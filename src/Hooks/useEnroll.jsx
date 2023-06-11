import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnroll= () => {
  const { user, loading } = useAuth()
//   const token = localStorage.getItem("access-token");
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    // queryFn: async () => {
    //   const res = await fetch(
    //     `http://localhost:5000/carts?email=${user?.email}`,
    //     {
    //       Headers: {
    //         authorization: `bearer ${token}`,
    //       },
    //     }
    //   );
    //   return res.json();
    // },


    queryFn: async () => {
        const res = await axiosSecure(`/enroll?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;  
       
      }
  });
  return [cart, refetch];
};

export default useEnroll;