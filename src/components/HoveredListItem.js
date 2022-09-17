import React from 'react'

export function HoveredListItem({col , row}){
    return (
        <li className="hovered-list__item">
            row {row} col {col}
        </li>
    )
}