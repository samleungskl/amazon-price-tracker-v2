import { useState, useEffect } from "react";

export default function useApplicationData() {
    const [state, setState] = useState({
        asinArray: [],
        asin: [],
        data: [],
    });

    const loadData = async () => {
        try {
            const res = await fetch('/.netlify/functions/data')
            const result = await res.json()
            setState(prev => ({
                ...prev,
                asinArray: result.asinArray,
                asin: result.asin,
                data: result.data,
            }));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);


    return {
        state, loadData
    };
}

