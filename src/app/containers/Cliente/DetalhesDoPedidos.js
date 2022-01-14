import React, { Component } from "react";
import Titulo from '../../components/Texto/Titulo';
import Tabela from '../../components/Tabela/Simples';
import moment from 'moment';

class DetalhesDoPedidos extends Component {

    render() {
        
     
        //Dados
        const dados = [
            {
                "ID": "9DG9F9HG9HJ9HJ",
                "Valor Total": 89.90,
                "Data": moment().toISOString(),
                "Situacao": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/9DG9F9HG9HJ9HJ"
            },
            {
                "ID": "9DG9F9HG9HJ9HJ",
                "Valor Total": 105.90,
                "Data": moment().toISOString(),
                "Situacao": "Aguardando Pagamento",
                "botaoDetalhes": "/pedido/5DHDGFBSDKJR545T4"
            },
            {
                "ID": "9DG9F9HG9HJ9HJ",
                "Valor Total": 26.90,
                "Data": moment().toISOString(),
                "Situacao": "Pagamento concluido",
                "botaoDetalhes": "/pedido/9DG9F9HG9HJ9HJ"
            }
        ];


        return (
            <div className="Detalhes-dos-Pedidos">
                <Titulo tipo='h3' titulo='Pedidos Feitos' />
                <br />
                <Tabela
                    cabecalho={["ID", "Valor Total", "Data", "Situacao"]}
                    dados={dados}
                />
                <br />
            </div>
        )
    }
}

export default DetalhesDoPedidos;