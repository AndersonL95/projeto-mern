import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Dashboard from './pages/admin/dashboard';

import Produtos from './pages/admin/produtos';
import ProdutosCadastrar from './pages/admin/produtos/produtos.cadastrar';
import ProdutosEditar from './pages/admin/produtos/produtos.editar';
 
import Usuario from './pages/admin/usuarios';
import UsuarioCadastrar from './pages/admin/usuarios/usuarios.cadastrar';
import UsuarioEditar from './pages/admin/usuarios/usuario.editar';


import Home from './pages/client/home';
import ProdutosDetails from './pages/client/produtos/produtos.details';
import login from './pages/admin/login';

import PrivateRoute from './services/wAuth';
export default function Routes() {


    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/produtos/:idProduto" exact component={ProdutosDetails} />


                <Route path="/admin/login" exact component={login} />
                <PrivateRoute path="/admin" exact component={Dashboard} />
                

                <PrivateRoute path="/admin/produtos" exact component={Produtos} />
                <PrivateRoute path="/admin/produtos/cadastrar" exact component={ProdutosCadastrar} />
                <PrivateRoute path="/admin/produtos/editar/:idProduto" exact component={ProdutosEditar} />


                <PrivateRoute path="/admin/usuarios" exact component={Usuario} />
                <PrivateRoute path="/admin/usuarios/cadastrar" exact component={UsuarioCadastrar} />
                <PrivateRoute path="/admin/usuarios/editar/:idUsuario" exact component={UsuarioEditar} />



            </Switch>
        
        
        
        
        </BrowserRouter>
    )
}