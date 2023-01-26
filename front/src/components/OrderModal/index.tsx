/* eslint-disable react/react-in-jsx-scope */
import { ModalBody, OrderDetails, Overlay  } from './styles';
import closeIcon from './../../assets/images/close-icon.svg';

interface OrderModalProps {
  visible: boolean;
}
export function OrderModal({visible}: OrderModalProps){
    if (!visible){
        return null;
    }
    return (
        <Overlay>
            <ModalBody>
                <header>
                    <strong>Mesa 2</strong>
                    <button type="button">
                        <img src={closeIcon} />
                    </button>
                </header>
                <div className='status-container'>
                    <small>Status do Pedido</small>
                    <div>
                        <span>🕑</span>
                        <strong>Fila de espera</strong>
                    </div>
                </div>
                <OrderDetails>
                    <strong>Itens</strong>
                </OrderDetails>
            </ModalBody>

        </Overlay>
    );
}
