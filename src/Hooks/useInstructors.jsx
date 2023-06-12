import { useQuery } from '@tanstack/react-query';


const useInstructors = () => {

    const {data: instructors = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['instructors'],
        queryFn: async() => {
            const res = await fetch('https://assignment-12-server-site-mahbubur-rahman1.vercel.app/popularIns')
            return res.json();
        }
    })
    return [instructors, loading, refetch]
   
};

export default useInstructors;