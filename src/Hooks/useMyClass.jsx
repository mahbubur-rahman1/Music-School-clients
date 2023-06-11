// import { useQuery } from '@tanstack/react-query';
// import useAuth from './useAuth';
// import useAxiosSecure from './useAxiosSecure';

import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyClass = () => {
    const { user, loading } = useAuth()
  const [axiosSecure] = useAxiosSecure()
  const { refetch, data: classes = [] } = useQuery({
    queryKey: ["classes", user?.email],
    enabled: !loading,
 


    queryFn: async () => {
        const res = await axiosSecure(`/my-class?email=${user?.email}`)
        console.log('res from axios', res)
        return res.data;  
       
      }
  });
  return [classes, refetch];
};

export default useMyClass;