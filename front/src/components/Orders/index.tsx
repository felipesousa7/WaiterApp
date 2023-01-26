/* eslint-disable react/react-in-jsx-scope */
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
    {
        '_id': '6398a67895b86c1eab626a0b',
        'table': '123',
        'status': 'WAITING',
        'products': [
            {
                'product': {
                    'name': 'Pizza quatro queijos',
                    'imagePath': '1670946056063-quatro-queijos.png',
                    'price': 40,
                },
                'quantity': 3,
                '_id': '6398a67895b86c1eab626a0c'
            },
            {
                'product': {
                    'name': 'Coca cola',
                    'imagePath': '1670947527982-coca-cola.png',
                    'price': 7,
                },
                'quantity': 2,
                '_id': '6398a67895b86c1eab626a0d'
            }
        ],
    }
];
export function Orders(){
    return (
        <Container>
            <OrdersBoard
                icon="🕒"
                title="Fila de espera"
                orders={orders}
            />
            <OrdersBoard
                icon="👨‍🍳"
                title="Em preparação"
                orders={[]}
            />
            <OrdersBoard
                icon="✔"
                title="Pronto!"
                orders={[]}
            />
        </Container>
    );
}
