import React from 'react';
import './card-list.styles.css';
import {Card} from '../card/card.component';

//props is any parameter that is passed as argument
//props.children is any value that is passes within html tags
export const CardList = (props) => {
    return <div className="card-list">
        {props.monsters.map((monster)=>{
            return <Card monster={monster}/>
        })}
       </div>
}