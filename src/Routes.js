import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default props => (
    <Router>
         <Stack key="root" hideNavBar={false}>
        <Scene key='formLogin' component={FormLogin} title="Login" initial={true}/>
        <Scene key='formCadastro' component={FormCadastro} title="Cadastro" />
         </Stack>
    </Router>
);
