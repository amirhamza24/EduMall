import { useContext } from "react"
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../providers/AuthProvider";


const useInstructor = () => {
    const { user, loading } = useContext(AuthContext);

    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();

    // console.log(token);

    const { data: isInstructor, isLoading: isInstructorLoading } = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,

        queryFn: async () => {
            const res = await fetch(`https://edumall-server-ju560qe31-amirhamza24.vercel.app/users/role/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    const roleInsTructor = isInstructor?.role;
    // console.log(classes);
    return [ roleInsTructor, isInstructorLoading ]
};

export default useInstructor;