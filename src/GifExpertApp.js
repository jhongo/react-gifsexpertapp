import React, {useState} from 'react' 
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => { 

    const [categories, setCategories] = useState(['One Punch']); 

    // const handleAdd = () =>{    

    //     SOLUCION 1
    //     setCategories( [...categories, 'Hunter X']); 

    //     setCategories( cats => [...categories, 'Hunter']);  

    // }



    return (
        <div> 
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/> 

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {categories.map( category => ( 
                    <GifGrid key = {category} category = {category} />
                ))
            }
            </ol>
            
        </div>
    )
}