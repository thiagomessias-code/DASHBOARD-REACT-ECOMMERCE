import React, { Component } from "react";

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class ListaDeProdutos extends Component {
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
                "Produto": "Mouse",
                "Estoque": 15,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Celular",
                "Estoque": 15,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Som",
                "Estoque": 15,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },
            {
                "Produto": "Tv",
                "Estoque": 15,
                "Disponibilidade": "sim",
                "botaoDetalhes": "/produto/6KGKGHFG6SD5DF"
            },


        ];


        return (
            <div className=" ListaDeProdutos">
                <hr /> <br />
                <Titulo tipo='h3' titulo='Produtos da Categoria' />
                <br />
                <Pesquisa
                    valor={pesquisa}
                    placeholder={"Pesquise aqui pelo nome do produto, ou descrição"}
                    onChange={(ev) => this.onChangePesquisa(ev)}
                    onClick={() => alert("Pesquisar")}
                />
                <br />
                <Tabela
                    cabecalho={["Produto", "Estoque", "Disponibilidade"]}
                    dados={dados}
                />
                <br />
                <Paginacao
                    atual={this.state.atual}
                    total={120}
                    limite={20}
                    onClick={(numeroAtual) => this.changeNumeroAtual(numeroAtual)} />
            </div>
        )
    }
}

export default ListaDeProdutos;