import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    
    const onAddCategory = (category) => {
        setCategories([category, ...categories]);
    };

    return (
    <>
        <h1>Arturo Gonzalez</h1>

        <AddCategory onNewCategory={ onAddCategory } />

        {
            categories.map(category => <GifGrid key={category} category={category} />)
        }
        
    </>
    );
}
