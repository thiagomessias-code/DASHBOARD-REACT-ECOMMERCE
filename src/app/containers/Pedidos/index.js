import React, { Component } from "react";
import Titulo from '../../components/Texto/Titulo';
import Pesquisa from '../../components/Inputs/Pesquisa';
import Tabela from '../../components/Tabela/Simples';
import Paginacao from '../../components/Paginacao/Simples';
import moment from 'moment';

class Pedidos extends Component {
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
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situacao": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/9DG9F9HG9HJ9HJ"
            },
            {
                "Cliente": "Cliente 2",
                "Valor Total": 105.90,
                "Data": moment().toISOString(),
                "Situacao": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/5DHDGFBSDKJR545T4"
            },
            {
                "Cliente": "Cliente 3",
                "Valor Total": 26.90,
                "Data": moment().toISOString(),
                "Situacao": "Pagamento concluido",
                "botaoDetalhes": "/pedido/9DG9F9HG9HJ9HJ"
            }
        ];


        return (
            <div className="Pedidos full-width">
                <div className="Card">
                    <Titulo tipo='h1' titulo='Pedidos' />
                    <br />
                    <Pesquisa
                        valor={pesquisa}
                        placeholder={"Pesquise aqui pelo nome do cliente"}
                        onChange={(ev) => this.onChangePesquisa(ev)}
                        onClick={() => alert("Pesquisar")}
                         />
                    <br />
                    <Tabela
                        cabecalho={["Cliente", "Valor Total", "Data", "Situacao"]}
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

export default Pedidos