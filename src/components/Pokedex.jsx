import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PokemonCard from './PokemonCard';

const Pokedex = () => {

    const [pokemonName,setPokemonName] = useState('')
    const [pokemonTypes,setPokemonTypes] = useState([])
    const [ pokemons , setPokemons ] = useState([])
    const name = useSelector( state => state.name)
    const navigate = useNavigate()
    const pokeId = Math.floor(Math.random() * 1154 )


    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/`) //https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154 ?offset=${pokeId}&limit=${3}
        .then(res => setPokemons(res.data.results))
      },[])

      
      useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res => setPokemonTypes(res.data.results))
      },[])
      console.log(pokemonTypes)


    const searchPokemon = ()=>{
        navigate(`/pokedex/${pokemonName}`)
    }

    const filterType = (e)=>{
        const url = e.target.value
        axios.get(url)
        .then(res => setPokemons(res.data.pokemon))
    }

    return (
        <div>
            <h1 className='title' >Pokedex</h1>
            <p className='pokedex-full-t' >This is the full pokedex, here, <b className='big-text' > {name} </b> you can see every pokemon, search an specific one, or filter them by their type</p>

            <div className="pokedex-top">
                <div className="go-to-login">
                    <p className='pokedex-full-t' >If you want to, you can go back to the login by clicking here</p>
                    <button className='all-btns login-btn' onClick={()=> navigate('/') } >Go back to the login</button>
                </div>
                <div className="searching-name">
                    <input className='all-btns' type="text" placeholder='  search by name' value={pokemonName} onChange={e=> setPokemonName(e.target.value)} />
                    <button className='all-btns search-btn' onClick={searchPokemon} > Search </button>
                </div>
            </div>
            <div className='filter-type' >
                <p className='pokedex-full-t' >Here you can filter the pokemons by their type</p>
                <select onChange={filterType} className='filter-selector' name="" id="">
                    { pokemonTypes.map(type => (
                        <option value={type.url} key={type.name} > {type.name} </option>
                    ))}
                </select>
            </div>

            <ul className='ul-cards'>
                {pokemons?.map(pokemon=>(
                
                    <li className='list-of-cards' key={pokemon.url ? pokemon.url : pokemon.pokemon.url } >
                    <PokemonCard url={pokemon.url ? pokemon.url : pokemon.pokemon.url } />
                    </li>

                ))}
            </ul>
                
        </div>

    );
};

export default Pokedex;