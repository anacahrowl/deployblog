import { Grid } from '@material-ui/core';
import React from 'react';
import './Sobre.css';
import { Box } from '@mui/material';

function Sobre() {
    return (
        <Grid justifyContent='center' alignItems='center'>
            <Box padding={3} textAlign='center'>
            <h1>Sobre o projeto Dev Girls</h1>
            </Box>
            <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid >
          <img className='img' src='https://vertigo.com.br/wp-content/uploads/2019/03/Mulher-na-TI.jpg'></img>
        </Grid>
        </Grid>
            <Box padding={5} textAlign='center'>
                
            <h2>Todos somos o universo, todos somos parte do universo e todos temos uma parte dele dentro de nós. </h2>

            
            </Box>
        </Grid>
    )
}


export default Sobre;