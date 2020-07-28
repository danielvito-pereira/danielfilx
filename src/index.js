import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video/index';
import CadastroCategoria from './pages/cadastro/Categoria';


const Pagina404 = () => (<div>Página 404 </div>)
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>/* com exact fica mais expecifico */
      <Route path="/cadastro/video" component={CadastroVideo}/>/*rota da url */
      <Route path="/cadastro/Categoria" component={CadastroCategoria}/>/*rota da url */
      <Route  component={Pagina404} /> /*sem o path ele vai carregar direto */
      
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

