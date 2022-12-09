import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createName } from '../store/slices/name.slice';

const InputName = () => {

    const [userName, setUserName] = useState ('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const enterName = ()=>{
        dispatch(createName(userName))
        navigate('/pokedex')
    }


    return (
        <div>
            <h1 className='title' >Welcome to my Pokedex</h1>
            <form action="">

            <label htmlFor="">This is the name you are going to login with</label>
            <input 
                placeholder='Enter your name here'
                className='all-btns'
                type="text" 
                onChange={e => setUserName(e.target.value)} 
                value={userName} />
            <button className='all-btns' onClick={enterName} >Enter</button>
            </form>
            <p className='small-p' >(Note that this is requiered for you to consult pokemons)</p>
        </div>
    );
};

export default InputName;