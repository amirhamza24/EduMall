import { useEffect, useState } from "react";


const usePopular = () => {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('https://edumall-server-ju560qe31-amirhamza24.vercel.app/popular')
        .then(res => res.json())
        .then(data => {
            setPopular(data);
            setLoading(false);
        })
    }, [])
    return [popular, loading]
};

export default usePopular;