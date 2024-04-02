import { useState, useEffect } from 'react';

function useCustomHookThird(Url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [iserror, setIsError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setIsError(false);
            try {
                const response = await fetch(Url);
                const data = await response.json();
                setData(data);
                setLoading(false);
            } catch (error) {
                console.log('Error', error);
                setIsError(true);
                setLoading(false);

            }
        }
        fetchData(Url)
    }, [Url]);
    return [data, loading, iserror];
}

export default useCustomHookThird;