import axios from 'axios';
import React from 'react';
import '../App.css'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PokeDetails = () => {
    const [pokemon, setPokemon] = useState({})
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setPokemon(res.data))
    },[])

    console.log(pokemon)

    return (



        <div>
            <button onClick={()=> navigate('/pokedex')} className="all-btns">Go back to the pokedex</button>

            <div className='detailed-card' >
                <h1 className='title' >
                {pokemon.name}
                </h1>
                <img className='details-poke-img' src={pokemon?.sprites?.other.dream_world.front_default} alt="" />
            </div>

        </div>



    );
};

export default PokeDetails;