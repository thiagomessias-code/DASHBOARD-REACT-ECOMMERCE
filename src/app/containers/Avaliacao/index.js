import React, { Component } from "react";
import Titulo from "../../components/Texto/Titulo";
import Voltar from "../../components/Links/Voltar"
import ButttonSimples from '../../components/Button/Simples'

class Avaliacao extends Component {

    renderCabecalho() {
        return (
            <div className="flex">
                <div class="flex flex-1 vertical">
                    <Titulo tipo="h3" titulo="Avaliação - Produto 1" />
                    <Titulo tipo="h4" titulo="Cliente - Cliente 1" />
                </div>
                <div className="flex-1 flex-end">
                    <ButttonSimples
                        type="danger"
                        onClick={() => alert("deletado")}
                        label="Remover" />
                </div>
            </div>
        )
    }

    renderMensagem() {
        return (
            <div className="Mensagem">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        )
    }

    render() {
        return (
            <div className="Avaliacao">
                <div className="Card">
                    <Voltar path="/avaliacoes/9jhf6"/>
                    {this.renderCabecalho()}
                    {this.renderMensagem()}

                </div>
            </div>
        )
    }
}

export default Avaliacao;