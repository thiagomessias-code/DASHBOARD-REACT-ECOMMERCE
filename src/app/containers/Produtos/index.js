import React, { Component } from "react";

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Produtos extends Component {
    state = {
        pesquisa: "",
        atual: 0
    }
    onChange = (ev) => this.setState({ pesquisa: ev.target.value })
    changeNumeroAtual = (atual) => this.setState({ atual })
    
    render() {
        const { pesquisa } = this.state;

       

        //Dados
        const dados = [
            {
                "Produto": "Mouse 1",
                "Categoria": "Acessorios",
                "Disponivel": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Mouse 2",
                "Categoria": "Acessorios",
                "Disponivel": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Mouse 3",
                "Categoria": "Acessorios",
                "Disponivel": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Mouse 4",
                "Categoria": "Acessorios",
                "Disponivel": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Mouse 5",
                "Categoria": "Acessorios",
                "Disponivel": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            
        ];


        return (
            <div className="  Produtos full-width">
                <div className="Card">
                    <Titulo tipo='h1' titulo='Produtos' />
                    <br />
                    <div className="flex">
                        <div className="flex-3">
                        <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise aqui pelo produto"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}
                         />
                        </div>
                        <div className="flex-1 flex vertical">
                            <label>
                                <small>Ordenar por</small>
                            </label>
                            <select defaultValue="">
                                <option>Aleatório</option>
                                <option value={"oaA-Z"}>Alfabetica A-Z</option>
                                <option value={"oaZ-A"}>Alfabetica Z-A</option>
                                <option value={"op-menor"}>Preço Menor</option>
                                <option value={"op-maior"}>Preço Maior</option>
                            </select>
                        </div>
                        <div className="flex-1"></div>
                    </div>
                    <br />
                    <Tabela
                        cabecalho={["Produto", "Categoria", "Disponivel"]}
                        dados={dados}
                    />
                    <br />
                    <Paginacao 
                    atual={this.state.atual} 
                    total={120} 
                    limite={20}
                     onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
                </div>
            </div>
        )
    }
}

export default Produtos;