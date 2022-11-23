import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';
import { getGifs } from "../services/gifsService";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {

    const { gifs, isLoading } = useFetchGifs(category);

    return (
    <>
        <h3>{ category }</h3>

        {
            isLoading && <h2>Cargando...</h2>
        }

        <div className="card-grid">
            { 
                gifs.map((gif) => <GifItem key={gif.id} {...gif}/>)
            }
        </div>
    </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}