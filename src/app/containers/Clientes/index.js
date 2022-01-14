import React, { Component } from "react";

import Titulo from '../../components/Texto/Titulo';

import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';

class Clientes extends Component {
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
                "Cliente": "Cliente 1",
                "email": "tata@email.com",
                "Telefone": "84 9 88194460",
                "CPF": "111.222.333.66",
                "botaoDetalhes": "/cliente/tata@email.com"
            },
            {
                "Cliente": "Cliente 2",
                "email": "tata@email.com",
                "Telefone": "84 9 88194460",
                "CPF": "111.222.333.66",
                "botaoDetalhes": "/cliente/tata@email.com"
            },
            {
                "Cliente": "Cliente 3",
                "email": "tata@email.com",
                "Telefone": "84 9 88194460",
                "CPF": "111.222.333.66",
                "botaoDetalhes": "/cliente/tata@email.com"
            },
            {
                "Cliente": "Cliente 4",
                "email": "tata@email.com",
                "Telefone": "84 9 88194460",
                "CPF": "111.222.333.66",
                "botaoDetalhes": "/cliente/tata@email.com"
            },
            
        ];


        return (
            <div className="  Clientes full-width">
                <div className="Card">
                    <Titulo tipo='h1' titulo='Clientes' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise aqui pelo nome do cliente"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}
                         />
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "E-mail", "Telefone", "CPF"]}
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

export default Clientes;