import React, { Component } from "react";
import ButtonSimples from "../../components/Button/Simples";
import Titulo from "../../components/Texto/Titulo";
import { TextoDados } from '../../components/Texto/Dados'
import TabelaSimples from "../../components/Tabela/Simples";

class DetalhesDoPedido extends Component {
    renderCabecalho() {
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h2" titulo="Pedido - Cliente 1 - 04/04/2020" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples type="danger" label="Cancelar Pedido" onClick={() => alert("Cancelado")} />
                </div>
            </div>
        )
    }

    //DADOS CLIENTE
    renderDadosDoCliente() {
        return (
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados do Cliente" />
                <br />
                <TextoDados chave="Nome" valor="Cliente 1" />
                <TextoDados chave="Telefone" valor="11.222.445-55" />
                <TextoDados chave="CPF" valor="88194460" />
                <TextoDados chave="Data de Nascimento" valor="1992/08/16" />
            </div>
        )
    }

    //ENTREGA
    renderDadosDeEntrega() {
        return (
            <div className="flex-2">
                <Titulo tipo="h4" titulo="Dados de Entrega" />
                <br />
                <TextoDados chave="Endereço" valor="rua teste 123" />
                <TextoDados chave="Bairro" valor="Centro" />
                <TextoDados chave="Cidade" valor="mossoro" />
                <TextoDados chave="Estado" valor="RN" />
                <TextoDados chave="CEP" valor="59614-600" />
            </div>
        )
    }

    //PAGAMENTO
    renderDadosDoPagamento() {
        return (
            <div className="flex-3">
                <Titulo tipo="h4" titulo="Dados de Pagamento" />
                <br />
                <TextoDados chave="Taxa de Entrega " valor="R$ 5,00" />
                <TextoDados chave="Valor do Pedido" valor="85,00" />
                <TextoDados chave="Valor Total" valor="90,00" />
                <TextoDados chave="Forma de Pagamento" valor="PIX" />
            </div>
        )
    }

    //CARRINHO
    renderDadosDoCarrinho() {
        const dados = [
            {
                "Pruduto": "Produto 1",
                "Preço Und.": "R$ 42,50",
                "Quantidade": "1",
                "Preço Total": "R$ 42,50"
            },
            {
                "Pruduto": "Produto 2",
                "Preço Und.": "R$ 42,50",
                "Quantidade": "1",
                "Preço Total": "R$ 42,50"
            },
        ]
        return (
            <div className="flex-3">
                <Titulo tipo="h4" titulo="Dados do Carrinho" />
                <br />
                <TabelaSimples cabecalho={["Produto", "Preço Und.", "Quantidade", "Preço Total"]}
                    dados={dados} />
            </div>
        )
    }

    //PEDIDO
    render() {
        return (
            <div className="Detalhes-do-Pedido">
                {this.renderCabecalho()}
                <div className="felx vertical">
                    <div className="flex horizontal">
                        {this.renderDadosDoCliente()}
                        {this.renderDadosDoCarrinho()}
                    </div>
                    <div className=" flex horizontal">
                        {this.renderDadosDeEntrega()}
                        {this.renderDadosDoPagamento()}
                    </div>
                </div>
            </div>
        )
    }
}

export default DetalhesDoPedido;