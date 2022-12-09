import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({url}) => {
    const [pokemonCard , setPokemonCard] = useState()

    useEffect(()=>{
        axios.get(url)
        .then(res=> setPokemonCard(res.data))
    },[])


    return (
        <Link className='each-poke-card' to={`/pokedex/${pokemonCard?.id}`} >
            <h1> {pokemonCard?.name} </h1>
            <img className='card-image' src={pokemonCard?.sprites?.other.dream_world.front_default} alt="" />
            <p> Height: {pokemonCard?.height} </p>


        </Link>
    );
};

export default PokemonCard;