import React, { Component } from "react";
import ButtonSimples from "../../components/Button/Simples";
import InputValor from "../../components/Inputs/InputValor";
import InputSimples from "../../components/Inputs/Simples";
import { TextoDados } from "../../components/Texto/Dados";
import Titulo from "../../components/Texto/Titulo";

class Perfil extends Component {

    state = {
        nome: "Usuario teste",
        email: "usuario@gmail.com",
        telefone: "84 9556682",

        senhaAntiga: "",
        novaSenha: "",
        recuperarSenha: ""
    }
    renderCabecalho() {
        return (
            <div className="flex">
                <div className="flex-1 flex">
                    <Titulo tipo="h1" titulo="Perfil" />
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
        const { nome, email, telefone } = this.state;
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
                    chave="Email"
                    valor={(
                        <InputValor
                            value={email}
                            name="Email" noStyle
                            handleSubmit={(valor) => this.setState({ email: valor })} />
                    )} />

                <TextoDados
                    chave="Telefone"
                    valor={(
                        <InputValor
                            value={telefone}
                            name="Telefone" noStyle
                            handleSubmit={(valor) => this.setState({ telefone: valor })} />
                    )} />
            </div>
        )
    }

    renderDadosSenha() {
        const { senhaAntiga, novaSenha, confirmarSenha } = this.state;
        return (
            <div className="dados-configuracao">
                <InputSimples
                    type="password"
                    name="senha-antiga"
                    label="Senha Antiga:"
                    value={senhaAntiga}
                    onChange={(ev) => this.setState({ senhaAntiga: ev.target.value })} />

                <InputSimples
                    type="password"
                    name="nova-senha"
                    label="Nova Senha:"
                    value={novaSenha}
                    onChange={(ev) => this.setState({ novaSenha: ev.target.value })} />

                <InputSimples
                    type="password"
                    name="confirmar-senha"
                    label="Confirmar Senha:"
                    value={confirmarSenha}
                    onChange={(ev) => this.setState({ confirmarSenha: ev.target.value })} />
            </div>
        )
    }

    render() {
        return (
            <div className="Perfil full-width">
                <div className="Card">
                    {this.renderCabecalho()}
                    <div className="flex horizontal">
                        <div className="flex-1">
                            {this.renderDadosConfiguracao()}
                        </div>
                        <div className="flex-1">
                            {this.renderDadosSenha()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Perfil;