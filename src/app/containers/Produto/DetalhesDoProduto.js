import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ButtonSimples from '../../components/Button/Simples';
import InputValor from '../../components/Inputs/InputValor';
import { TextoDados } from '../../components/Texto/Dados';
import Titulo from '../../components/Texto/Titulo';
import InputSelect from '../../components/Inputs/Select'
import BlocoImagens from '../../components/Imagens/Bloco'


class DetalhesDoProduto extends Component {
    state = {
        nome: "Produto 1",
        disponibilidade: "disponivel",
        descricao: "",
        imagens:[
            "https://dummyimage.com/100x100/1090ad/fff.jpg&text=Exemplo",
            "https://dummyimage.com/100x100/1090ad/fff.jpg&text=Exemplo",
            "https://dummyimage.com/100x100/1090ad/fff.jpg&text=Exemplo",
            "https://dummyimage.com/100x100/1090ad/fff.jpg&text=Exemplo",
            "https://dummyimage.com/100x100/1090ad/fff.jpg&text=Exemplo",
            "https://dummyimage.com/100x100/1090ad/fff.jpg&text=Exemplo"
        ]
    }

    renderCabecalho() {
        const { nome } = this.state;
        return (
            <div className='flex'>
                <div className='flex-1 flex vertical'>
                    <Titulo tipo="h1" titulo={nome} />
                    <Link to="/avaliacoes/FD6FD6D5FD6F5"><small>Ver avaliacoes</small></Link>
                </div>
                <div className='flex-1 flex flex-end'>
                    <ButtonSimples
                        type="success"
                        label="Salvar"
                        onClick={() => alert("Salvo")} />
                </div>
            </div>
        )
    }

    renderDados() {
        const { nome, disponibilidade, descricao } = this.state;
        return (
            <div className='Dados-Produto'>
                <TextoDados
                    chave="nome"
                    valor={(
                        <InputValor
                            value={nome} noStyle
                            name="Nome"
                            onChange={(ev) => this.setState({ nome: ev.target.value })}
                        />
                    )} />

                <TextoDados
                    chave="Disponibilidade"
                    valor={(
                        <InputSelect
                            name="disponibilidade"
                            onChange={(ev) => this.setState({ disponibilidade: ev.target.value })}
                            value={disponibilidade}
                            opcoes={[
                                { label: "Disponivel", value: "disponivel" },
                                { label: "Indisponivel", value: "Indisponivel" }
                            ]} />
                    )} />

                <TextoDados
                    chave="Descricao"
                    valor={(
                        <textarea
                            name={'descricao'}
                            onChange={(ev) => this.setState({ descricao: ev.target.value })}
                            value={descricao}
                            rows="10"
                            style={{ resize: "none" }}
                        />
                    )} />

            </div>
        )
    }

    onRemove = (id) => {
        const{imagens} = this.state;
        this.setState({imagens: imagens.filter((i, idx) => idx !== id)})
    }

    renderImagens(){
        const{imagens} = this.state;
        return(
            <div className='dados-de-imagens'>
                <BlocoImagens
                imagens={imagens}
                handleSubmit={() => alert("Enviado")}
                onRemove={this.onRemove}
                />
            </div>
        )
    }

    


    render() {

        return (
            <div className='detalhes-do-Produto'>
                {this.renderCabecalho()}
                <br />
                <div className='flex horizontal'>
                    <div className='flex-1 flex vertical'>
                        {this.renderDados()}
                    </div>
                    <div className='flex-1 flex vertical'>
                        {this.renderImagens()}
                    </div>
                    
                </div>
            </div>

        )
    }
}

export default DetalhesDoProduto;
