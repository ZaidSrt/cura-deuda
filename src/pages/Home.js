// React
import { useEffect, useState } from 'react';

// Api
import { GetPockemons } from '../api/PockemonApi';

//Material
import { Grid } from '@mui/material';

//Material icon
import MenuIcon from '@mui/icons-material/Menu';

// Material Color
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';

export default function Home() {

    // State
    const [result, setResult] = useState([])
    const [pockemon, setPockemon] = useState([])

    useEffect(() => {

        GetPockemons().then(response => {

            setResult(response.data.results);
            setPockemon(response.data.results);

        }).catch(err => console.log(err));
        
    }, [])

    
    function handleInput(value) {
        setResult(pockemon.filter(res => res.name.toUpperCase().includes(value.toUpperCase())));
    }

    function Card({res, idx}) {
        
        const id = res.url.split('/')[6];

        return (
            <Grid item xs={6} sm={4} md={3} lg={2}>
                <Link to={`pockemon/${id}`}>
                    <div key={idx} className='card'>
                    <div>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt={res.name} />
                    </div>
                        <p>{res.name}</p>
                    </div>
                </Link>
            </Grid>
        );
      }

    return (
        <div>
            <header>
                <div className='navbar'>
                    <MenuIcon sx={{ color: grey[50] }} />
                    <img src='https://assets.pokemon.com/assets/cms2-es-xl/img/misc/gus/buttons/logo-pokemon-79x45.png' alt='Logo' />
                    <div>
                        <input type='text' onKeyUp={e => handleInput(e.target.value)} placeholder='Buscar por nombre'></input>
                    </div>
                </div>
            </header>
            <Grid container spacing={3} paddingX={3} paddingY={3}>
                {result.map((res, key) =>
                    <Card res={res} key={key} />
                )}
            </Grid>
            <div className='btn-float'>
                <Link to={`pockemon/${Math.floor(Math.random() * (24 - 1)) + 1}`}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png'} />
                </Link>
            </div>
        </div>
      );
}
