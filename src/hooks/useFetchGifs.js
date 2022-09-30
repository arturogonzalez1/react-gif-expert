import { useEffect, useState } from "react";
import { getGifs } from "../services/gifsService";

export const useFetchGifs = (category) => {

    const [gifs, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newGifs = await getGifs(category);
        setImages(newGifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        gifs,
        isLoading,
    }
}
