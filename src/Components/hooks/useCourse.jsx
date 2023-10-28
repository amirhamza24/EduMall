import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const useCourse = () => {
    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();

    // console.log(token);

    const { refetch, data:classes = [] } = useQuery({
        queryKey: ['classesAll', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await axiosSecure(`/classes?email=${user?.email}`)
        //     console.log('res from axios', res)
        //     return res.data;
        // },
        queryFn: async () => {
            const res = await fetch(`https://edumall-server-ju560qe31-amirhamza24.vercel.app/classes/student/${user?.email}`, {
                headers: {
                    authorization: `bearer ${token}`
                }
            })
            return res.json();
        },
    })
    console.log(classes);
    return [ classes, refetch ]
};

export default useCourse;