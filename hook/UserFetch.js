import { useState, useEffect } from 'react';


export function userFetch(){
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('');
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