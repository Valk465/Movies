import React, { useEffect, useState } from 'react';
import axios from "axios" ; 
import Card from './Card';


const Formulaire = () => {
    const [moviesData, setMoviesData] = useState([])
    useEffect(()=>{
        axios.get("https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=star&language=fr-FR)")
    .then((res) =>setMoviesData(res.data.results))
}, [])
    return (
      
            <div className="form-component">
              <div className="form-container"></div>  
                <form>
                    <input type="text" placeholder="Entrez le titre d'un film" id='search-input' />
                    <input type="submit" value='Rechercher'></input>
                </form>
                <div className = "btn-sort-container">
                    <div className='btn-sort' id="goodToBad"> Top <span>➜</span></div>
                    <div className='btn-sort' id="badToGood"> Flop <span>➜</span></div>
                    
                    </div>
                    <div className='result'></div>
                            {moviesData.slice(0,12).map((movie) => <Card key={movie.id} movie={movie}/> ) }
                </div>
                
    );
};

export default Formulaire;