import React from "react";

const Select = ({ value, name, opcoes, onchange }) => (
    <div>
        <select value={value} name={name} onchange={onchange}>
            {
                opcoes.map((opcao, idx) => (
                    <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
            
                ))
            }
        </select>
    </div>
)

export default Select;

