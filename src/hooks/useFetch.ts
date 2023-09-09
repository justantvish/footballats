import { useState, useEffect } from "react";

export type fetchResponse = {
    data: any;
    error?: any;
    loading?: Boolean;
};

export const useFetch = (url: string): fetchResponse => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    const fetchData = async () => {
        setLoading(true);

        try {
            const res = await fetch(url);
            const json = await res.json();

            setLoading(false);
            setData(json);
            setError(null);
        } catch(error) {
            setLoading(false);
            setError('Could not fetch the data');
        }
    }
    useEffect(() => {
        fetchData();
    }, []);

    return { data, loading, error };
};
