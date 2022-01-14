import React from "react";
import ButtonSimples from "../../components/Button/Simples";
import InputValor from "../../components/Inputs/InputValor";
import { TextoDados } from "../../components/Texto/Dados";
import Titulo from "../../components/Texto/Titulo";


class DetalhesDoCliente extends React.Component {
    state = {
        nome: "Cliente 1",
        CPF: "111.222.333.44",
        telefone: "84 9 8819-4460",
        dataDeNascimento: "10/01/2022",
        email: "thiago@email.com",
        endereco: "rua teste 123",
        bairro: "Centro",
        cidade: "mossoro",
        estado: "RN",
        CEP: "59616-459"

    }


    handleSubmit = (field, value) => {
        this.setState({ [field]: value })
    }

    renderCabecalho() {
        const {nome} = this.state;
        return (
            <div>
                <div class="flex-1 flex ">
                    <Titulo tipo="h1" titulo={nome} />
                </div>
                <div className="flex-1 flex flex-end">
                    <ButtonSimples onClick={() => alert("Salvo")}
                        label="Salvar"
                        type="success" />
                    <ButtonSimples onClick={() => alert("Removido")}
                        label="Remover"
                        type="danger" />
                </div>
            </div>
        )
    }

    renderDetalhesCadastro() {
        const { nome, CPF, email, dataDeNascimento, telefone } =this.state;
        return (
            <div className="Detalhes-do-Cadastro">
                <TextoDados
                    chave="Nome"
                    valor={(
                        <InputValor
                            name="nome" noStyle
                            handleSubmit={(valor) => this.handleSubmit("nome", valor)}
                            value={nome} />
                    )} />
                <TextoDados
                    chave="CPF"
                    valor={(
                        <InputValor
                            name="cpf"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("CPF", valor)}
                            value={CPF} />
                    )} />
                <TextoDados
                    chave="Telefone"
                    valor={(
                        <InputValor
                            name="telefone"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("telefone", valor)}
                            value={telefone} />
                    )} />
                <TextoDados
                    chave="E-mail"
                    valor={(
                        <InputValor
                            name="email"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("email", valor)}
                            value={email} />
                    )} />
                <TextoDados
                    chave="Data de Nascimento"
                    valor={(
                        <InputValor
                            name="datadenascimento"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("dataDeNascimento", valor)}
                            value={dataDeNascimento} />
                    )} />
            </div>
        )
    }

    renderDetalhesEntrega() {
        const { endereco, bairro, cidade, estado, CEP} =this.state;
        return (
            <div className="Detalhes-da-Entrega">
                <TextoDados
                    chave="Endereço"
                    valor={(
                        <InputValor
                            name="endereco" noStyle
                            handleSubmit={(valor) => this.handleSubmit("endereco", valor)}
                            value={endereco} />
                    )} />
                <TextoDados
                    chave="Bairro"
                    valor={(
                        <InputValor
                            name="bairro"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("bairro", valor)}
                            value={bairro} />
                    )} />
                <TextoDados
                    chave="cidade"
                    valor={(
                        <InputValor
                            name="cidade"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("cidade", valor)}
                            value={cidade} />
                    )} />
                <TextoDados
                    chave="Estado"
                    valor={(
                        <InputValor
                            name="estado"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("estado", valor)}
                            value={estado} />
                    )} />
                <TextoDados
                    chave="CEP"
                    valor={(
                        <InputValor
                            name="CEP"  noStyle
                            handleSubmit={(valor) => this.handleSubmit("CEP", valor)}
                            value={CEP} />
                    )} />
            </div>
        )
    }


    render() {
        return (
            <div className="DetalhesDoCliente">
                {this.renderCabecalho()}
                <div className="flex horizontal">
                    <div className="flex-1 flex vertical">
                        {this.renderDetalhesCadastro()}
                    </div>
                    <div className="flex-1 flex vertical">
                        {this.renderDetalhesEntrega()}
                    </div>
                </div>
            </div>

        )
    }
}

export default DetalhesDoCliente;