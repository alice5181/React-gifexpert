import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifExpertApp =()=>{

    const[categories,setCategories] = useState(['one punch','dragon ball']);
    
    // Creamos una función que se ejecutará cuando se añada una nueva categoría.
    // Recibe como parámetro la nueva categoría que se desea añadir.
    const onAddCategory = (newCategory) => {
        // Si la categoría ya existe en el array, no hacemos nada.
        if(categories.includes(newCategory))return;
        // Si no existe la categoría, la añadimos al array.
        // Usamos el spread operator para añadir la nueva categoría al inicio del array de categories.
        setCategories([newCategory.toLowerCase(), ...categories]);
        }

    // Retornamos la estructura del componente
    return(
        <>  
            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory={onAddCategory}
            />
            {
            categories.map( (category) => ( 
                    <GifGrid 
                        key = {category} 
                        category ={category}
                    />
                    ))
            }

            {/*Gif Item*/}
        </>
    );
};