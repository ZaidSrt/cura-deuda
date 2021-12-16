// React
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Api
import { GetPockemonById } from "../api/PockemonApi";

//Material
import { Grid } from '@mui/material';

export default function Pockemon() {

    const { id } = useParams();

    const [pockemon, setPockemon] = useState({})

    useEffect(() => {

        GetPockemonById(id).then(response => {

            setPockemon(response.data)

        }).catch(err => console.log(err))

    }, [])

    if (Object.keys(pockemon).length != 0) {
        console.log(pockemon);
        return (
            <Grid container spacing={3} paddingY={3} className="pockemon" >
                <Grid item xs={12} sm={4} className="text-center">
                    <img src={pockemon.sprites.front_default} />
                    <h2 className="text-center">{pockemon.name} (
                    {pockemon.types.map((res, key) =>
                        <span key={key}>{key > 0 ? ',' : ''} {res.type.name} </span>
                    )}
                    ) </h2>
                </Grid>
                <Grid item xs={6}  sm={4} className="text-center">
                    <h2>Habilidades</h2>
                    {pockemon.abilities.map((res, key) =>
                        <p key={key}>{res.ability.name}</p>
                    )}
                </Grid>
                <Grid item xs={6} sm={4} className="text-center">
                    <h2>Movimientos</h2>
                    {pockemon.moves.map((res, key) =>
                        <p key={key}>{res.move.name}</p>
                    )}
                </Grid>
            </Grid>
        )    
    } else {
        return '';
    }
}
