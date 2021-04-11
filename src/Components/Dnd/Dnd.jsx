import React, {memo, useCallback, useState} from "react";
import s from './Dnd.module.scss'
import update from 'immutability-helper';
import { useDrop } from 'react-dnd';
import {Card} from "./Card/Card";

const style = {
    width: 400,
};
const ITEMS = [
    {title: 'Блок 1', id: 1},
    {title: 'Блок 2', id: 2},
    {title: 'Блок 3', id: 3},
    {title: 'Блок 4', id: 4},
    {title: 'Блок 5', id: 5},
]

const ItemTypes = {
    CARD: 'card',
}

const Dnd = memo(function Container() {
    const [cards, setCards] = useState(ITEMS);
    const findCard = useCallback((id) => {
        const card = cards.filter((c) => `${c.id}` === id)[0];
        return {
            card,
            index: cards.indexOf(card),
        };
    }, [cards]);
    const moveCard = useCallback((id, atIndex) => {
        const { card, index } = findCard(id);
        setCards(update(cards, {
            $splice: [
                [index, 1],
                [atIndex, 0, card],
            ],
        }));
    }, [findCard, cards, setCards]);
    const [, drop] = useDrop(() => ({ accept: ItemTypes.CARD }));
    return (<div ref={drop} style={style}>
        {cards.map((card) => (<Card key={card.id} id={`${card.id}`} title={card.title} moveCard={moveCard} findCard={findCard}/>))}
    </div>);
});
export default Dnd
