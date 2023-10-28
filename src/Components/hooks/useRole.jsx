import { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../providers/AuthProvider';

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    // console.log(`https://top-spin-server.vercel.app/users/role/${user?.email}`);
    // console.log(user.email);

    const token = localStorage.getItem('access-token');
    // const [axiosSecure] = useAxiosSecure();

    // console.log(token);

    const { refetch, data: roleUser } = useQuery({
        queryKey: ['userRole', user?.email],
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
    const role = roleUser?.role;
    // console.log(role);
    return [ role, refetch ]
};

export default useRole;