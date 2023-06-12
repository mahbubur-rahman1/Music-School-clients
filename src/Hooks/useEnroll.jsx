import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useEnroll= () => {
  const { user, loading } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    enabled: !loading,
    

    queryFn: async () => {
        const res = await axiosSecure(`/enroll?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;  
       
      }
  });
  return [cart, refetch];
};

export default useEnroll;