import { useState } from "react";
import axios from "axios";
import { v1 as uuid } from "uuid";

// Toggle card back to front
const useFlip = (initialState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialState);
    const flip = () => {
        setIsFlipped((isFlipped) => !isFlipped);
    };
    return [isFlipped, flip];
};

const useAxios = (baseURL) => {
    const [cards, setCards] = useState([]);
    const addCard = async (path="") => {
        console.log(`${baseURL}${path}`)
        const response = await axios.get(`${baseURL}${path}`);
        setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
    };
    return [cards, addCard];
};

export { useFlip, useAxios };
