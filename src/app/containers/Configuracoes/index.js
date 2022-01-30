import React, { Component } from "react";
import ButtonSimples from "../../components/Button/Simples";
import InputValor from "../../components/Inputs/InputValor";
import ListaDinamicaSimples from "../../components/Listas/ListaDinamicaSimples";
import { TextoDados } from "../../components/Texto/Dados";
import Titulo from "../../components/Texto/Titulo";

class Configuracoes extends Component {

    state = {
        nome: "Loja IT",
        CNPJ: "11.555.866.66",
        email: "atendimento@gmail.com",

        endereco: "Rua teste 01",
        bairro: "Centro",
        cidade: "Mossoro",
        estado: "RN",
        cep: "12345-123",

        telefones: [
            "84 12345678",
            "84 12345678",
            "84 12345678"

        ]

    }
    renderCabecalho() {
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Configurações" />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples
                        type="success"
                        onClick={() => alert("salvo")}
                        label="Salvar" />
                </div>
            </div>
        )
    }
    renderDadosConfiguracao() {
        const { nome, CNPJ, email } = this.state;
        return (
            <div className="dados-configuracao">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            value={nome}
                            name="nome" noStyle
                            handleSubmit={(valor) => this.setState({ nome: valor })} />
                    )} />
                <TextoDados
                    chave="Cnpj"
                    valor={(
                        <InputValor
                            value={CNPJ}
                            name="CNPJ" noStyle
                            handleSubmit={(valor) => this.setState({ CNPJ: valor })} />
                    )} />
                <TextoDados
                    chave="Email"
                    valor={(
                        <InputValor
                            value={email}
                            name="Email" noStyle
                            handleSubmit={(valor) => this.setState({ email: valor })} />
                    )} />
            </div>
        )
    }

    renderDadosEndereco() {
        const { endereco, bairro, cidade, estado, cep } = this.state;
        return (
            <div className="dados-configuracao">
                <TextoDados
                    chave="Endereco"
                    valor={(
                        <InputValor
                            value={endereco}
                            name="endereco" noStyle
                            handleSubmit={(valor) => this.setState({ endereco: valor })} />
                    )} />
                <TextoDados
                    chave="Bairro"
                    valor={(
                        <InputValor
                            value={bairro}
                            name="bairro" noStyle
                            handleSubmit={(valor) => this.setState({ bairro: valor })} />
                    )} />
                <TextoDados
                    chave="Cidade"
                    valor={(
                        <InputValor
                            value={cidade}
                            name="cidade" noStyle
                            handleSubmit={(valor) => this.setState({ cidade: valor })} />
                    )} />
                    <TextoDados
                    chave="Estado"
                    valor={(
                        <InputValor
                            value={estado}
                            name="cidade" noStyle
                            handleSubmit={(valor) => this.setState({ estado: valor })} />
                    )} />
                    <TextoDados
                    chave="Cep"
                    valor={(
                        <InputValor
                            value={cep}
                            name="cep" noStyle
                            handleSubmit={(valor) => this.setState({ cep: valor })} />
                    )} />
            </div>
        )
    }


    onAdd = (valor) => {
        if(!valor) return
        const{ telefones} = this.state;
        this.setState({ telefones: [...telefones, valor]})
    }

    onRemove = (idx) => {
        if(!idx) return
        const{ telefones} = this.state;
        this.setState({ telefones: telefones.filter((item, index) => index !== idx)})
    }

    renderTelefones(){
        const {telefones} = this.state;
        return(
            <div className="dados-telefones">
                <ListaDinamicaSimples
                dados={telefones}
                onAdd={this.onAdd}
                onRemove={this.onRemove}
                />
            </div>
        )
    }

    render() {
        return (
            <div className="Configuracoes full-width">
                <div className="Card">
                    {this.renderCabecalho()}
                    <div className="flex horizontal">
                        <div className="flex-1">
                            {this.renderDadosConfiguracao()}
                        </div>
                    </div>
                    <br/><hr/>
                    <div className="flex-1">
                            {this.renderDadosEndereco()}
                        </div>
                    <div className="flex-1">
                            {this.renderTelefones()}
                        </div>
                </div>
            </div>
        )
    }
}


export default Configuracoes;