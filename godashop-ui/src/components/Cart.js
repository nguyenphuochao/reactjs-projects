import { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import { CartContext } from '../context/CartContext';
import { convertMoney } from '../helper/util';

function Cart() {
    const context = useContext(CartContext);

    // Xóa cart
    const handleDeleteCart = (id) => {
        const newCartItems = context.cartItems.filter(item => item.id !== id);
        localStorage.setItem('cart', JSON.stringify(newCartItems));
        const totalCart = newCartItems.reduce((total, product) => total + product.qty, 0);
        context.setCartItems(newCartItems);
        context.setTotalCart(totalCart)
        context.setTotal(() => {
            const total = newCartItems.reduce((total, product) => total + product.price * product.qty, 0);
            return total;
        })
    }

    // Cập nhật số lượng cart
    const handleQtyChange = (e, id) => {
        const newQty = e.target.value;
        e.target.value = newQty;

        const index = context.cartItems.findIndex(item => item.id === id);
        context.cartItems[index].qty = newQty;

        localStorage.setItem('cart', JSON.stringify(context.cartItems));

        const totalCart = context.cartItems.reduce((total, product) => total + Number(product.qty), 0);
        context.setTotalCart(totalCart)
        context.setTotal(() => {
            const total = context.cartItems.reduce((total, product) => total + product.price * product.qty, 0);
            return total;
        })
    }

    return (
        <Modal size="xl" show={context.show} onHide={context.handleClose} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Qty</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {context.cartItems.length > 0 &&
                            context.cartItems.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td><img src={item.image} alt="" width={50} /></td>
                                    <td>{item.name}</td>
                                    <td>
                                        <input type="number" min={1} defaultValue={item.qty} onChange={(e) => handleQtyChange(e, item.id)} />
                                    </td>
                                    <td>{convertMoney(item.price)}</td>
                                    <td>{convertMoney(Number(item.price) * Number(item.qty))}</td>
                                    <td>
                                        <Button variant="danger" onClick={() => handleDeleteCart(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            ))
                        }

                        <tr>
                            <td colSpan={6}>Total : </td>
                            <td className="text-danger fw-bold fs-5">{convertMoney(context.total)}</td>
                        </tr>

                    </tbody>

                </Table>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={context.handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={context.handleClose}>
                    Checkout
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Cart
