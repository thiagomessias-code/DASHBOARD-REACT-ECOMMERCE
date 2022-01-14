import React from "react";

const Pesquisa = ({ value, onChange, placeholder, onClick}) => (
    <div className="Pesquisa flex horizontal">
        <input value={value} onChange={onChange} placeholder={placeholder}/>
        <button>
            <i className="fas fa-search" onClick={onClick}/>
        </button>
    </div>
)

export default Pesquisa;