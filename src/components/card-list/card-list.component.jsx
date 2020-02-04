import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

const CardList = ({monsters}) => {
    const monsterNames = monsters.map(monster => <Card key={monster.id} monster={monster} /> )
    return <div className='card-list' >{monsterNames}</div>
}

export default CardList