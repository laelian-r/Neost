import { useState, useEffect } from 'react';


export function userFetch(){
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:GC38qUqU/user');
                const data = await response.json();

                setUser(data);
                setIsLoading(false);
            } catch (error) {
                setError(error)
            }
        };
        
        fetchData();
    }, []);
    return [user, isLoading, error]
}