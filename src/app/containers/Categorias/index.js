import React, { Component } from "react";

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Categorias extends Component {
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
                "Categoria": "Assessorios",
                "Qtd Produtos": 15,
                "botaoDetalhes": "/categoria/assessorios"
            },
            {
                "Categoria": "Celulares",
                "Qtd Produtos": 12,
                "botaoDetalhes": "/categoria/celulares"
            },
            {
                "Categoria": "Eletrodomesticos",
                "Qtd Produtos": 20,
                "botaoDetalhes": "/categoria/eletrodomesticos"
            },
            {
                "Categoria": "Casa e Banho",
                "Qtd Produtos": 40,
                "botaoDetalhes": "/categoria/casaeBanho"
            },
            
        ];


        return (
            <div className="  Categorias full-width">
                <div className="Card">
                    <Titulo tipo='h1' titulo='Categorias' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise aqui pela sua categoria"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}
                         />
                    <br />
                    <Tabela
                        cabecalho={["Categoria", "Qtd Produtos"]}
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

export default Categorias;