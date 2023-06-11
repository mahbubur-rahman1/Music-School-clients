import { Helmet } from "react-helmet";
import useInstructors from "../../../Hooks/useInstructors";
import AllInstructors from "./AllInstructors";


const InstructorsPage = () => {
    const [instructors] = useInstructors()


    return (
        <div className='w-10/12 mx-auto'>
             <Helmet>
        <title>Music School | All-Instrauctors</title>
            </Helmet>
            <div className='grid md:grid-cols-2 gap-8 justify-center'>
                {
                    instructors.map(data => <AllInstructors data= {data} key={data._id} ></AllInstructors> )
                }
            </div>
        </div>
    );
};

export default InstructorsPage;