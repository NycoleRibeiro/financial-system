import * as C from './styles';
import { Item } from '../../data/items'

type Props = {
    onAdd: (newItem: Item) => void;
}

export const InputArea = ({ onAdd }: Props) => {

    const handleAddEvent = () => {
        let newItem: Item = {
            date: new Date(2023, 1, 20),
            category: 'food',
            title: 'Item de teste',
            value: 250.25
        };
        onAdd(newItem);
    }

    return (
        <C.Container>
            <button onClick={handleAddEvent} >Adicionar</button>
        </C.Container>
    )
}