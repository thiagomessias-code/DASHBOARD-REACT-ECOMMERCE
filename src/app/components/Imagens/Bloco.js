import React from "react";

class BlocoImagens extends React.Component {
    render() {
        const { handleSubmit, imagens, onRemove } = this.props;
        return (
            <div className="bloco-imagem">
                <div>
                    <input type="file" onChange={handleSubmit} />
                </div>
                <div className="imagens-container">
                    {
                        imagens.map((src, idx) => (
                            <div
                                className="imagem-container"
                                style={{ backgroundImage: `url("${src}")` }}
                                key={idx}>
                                <div>
                                    <span className="imagem-remove" onClick={() => onRemove(idx)}>
                                        {"-"}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        )
    }
}

export default BlocoImagens;