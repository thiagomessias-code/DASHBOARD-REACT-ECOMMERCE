import React, { Component } from "react";

import Titulo from '../../components/Texto/Titulo'
import Input from '../../components/Inputs/Simples'
import Button from '../../components/Button/Simples'

class ResetarSenha extends Component {
    state = {
        senha: "",
        confirmarSenha: ""
    }

    onChangeInput = (field, ev) => this.setState({ [field]: ev.target.value })
    render() {
        const { senha, confirmarSenha } = this.state;
        return (
            <div className="Resetar-Senha flex flex-center">
                <div class="Card">
                <div class="flex flex-center">
                    <Titulo tipo="h1" titulo="LOJA IT" />
                </div>
                    <br />
                    <div>
                        <p>
                            Para reiniciar a senha, digite a nova senha e confirme no campo abaixo.
                        </p>
                    </div>
                    <br />
                    <div>
                        <Input
                            label="senha"
                            type="password"
                            value={senha}
                            onChange={(ev) => this.onChangeInput("senha", ev)} />
                        <Input
                            label="confirmarSenha"
                            type="password"
                            value={confirmarSenha}
                            onChange={(ev) => this.onChangeInput("confirmarSenha", ev)} />
                    </div>
                    <div className="flex flex-center">
                    <Button type="success" rota="/login" label="CONFIRMAR SENHA"/>
                    </div>
                </div>
            </div>
        )
    }
}


export default ResetarSenha;