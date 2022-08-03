import { useState, useEffect } from "react";

export default function useApplicationData() {
    const [state, setState] = useState({
        asinArray: [],
        asin: [],
        currentPage: 'home',
        priceAnalysisTab: 'analysis',
        selectedRecord: '',
    });

    const loadData = async () => {
        try {
            const res = await fetch('/.netlify/functions/data')
            const result = await res.json()
            setState(prev => ({
                ...prev,
                asinArray: result.asinArray,
                asin: result.asin,
            }));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        loadData();
    }, []);

    const changeAsinVisible = (asin) => {
        const asinWithChangedState = state.asin.map((element) => {
            if (element.asin === asin) {
                if (element.asinVisible === true) {
                    element.asinVisible = false
                } else {
                    element.asinVisible = true
                }
                return element
            }
            return element
        })

        setState(prev => ({
            ...prev,
            asin: asinWithChangedState,
        }));
    }

    const changeValueFn = (key, value) => {
        setState(prev => ({
            ...prev,
            [key]: value,
        }));
    }

    return {
        state, loadData, changeAsinVisible, changeValueFn
    };
}

