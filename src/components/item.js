import React from 'react'

function Item({item,onDelete}){
    return (
        <li>
            {item}
            <button type="button" onClick={onDelete}>Remover</button>
        </li>
    )

}

export default Item