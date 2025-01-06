import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

const useAdmin = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const {data:isAdmin, isPending:isAdminLoading} =useQuery({
        queryKey: [user?.email,'admin'],
        queryFn: async () => {
            const response = await axiosSecure(`/users/admin/${user?.email}`)
            console.log(response.data);
            return response.data?.admin;
        },
        // refetchInterval: 60 * 60 * 1000, // every hour
    })
  return [isAdmin, isAdminLoading]
}

export default useAdmin