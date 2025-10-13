import { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Cart from './Cart';
import { CartContext } from '../context/CartContext';
import { convertMoney } from '../helper/util';
import products from '../services/products';

let timeout = null;

function Header() {
    const navigate = useNavigate();
    const context = useContext(CartContext);
    const [searchItems, setSearchItems] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            if (e.target.value === '') return setSearchItems([]);

            var newProducts = products.filter(product => product.name.toLowerCase().includes(e.target.value.toLowerCase()));
            setSearchItems(newProducts);
        }, 500)
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault();
        const searchItems = products.filter(product => product.name.toLowerCase().includes(search.toLowerCase()));
        context.setSearchItems(searchItems);
        navigate('/search');
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{
                position: 'sticky',
                top: 0,
                zIndex: 999
            }}>
                <Container>
                    <Navbar.Brand as={Link} to="/">Godashop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/news">News</Nav.Link>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav>
                        <Nav className="me-2">
                            <Nav.Link href="#" className="text-danger fs-5 fw-bold">{context.totalCart}</Nav.Link>
                            <Button onClick={context.handleShow}>Cart</Button>
                        </Nav>
                        <Form className="d-flex" onSubmit={(e) => handleSubmitSearch(e)}>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                onKeyUp={(e) => handleSearch(e)}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            {
                                searchItems.length > 0 &&
                                <>
                                    <ul style={{
                                        position: 'absolute',
                                        top: '50px',
                                        background: '#ede4e4',
                                        width: '287px',
                                        listStyle: 'none',
                                        padding: '10px'
                                    }}>
                                        {
                                            searchItems.map((item) =>
                                                <li key={item.id} className="mt-2">
                                                    <img src={item.image} width={'50px'} alt={item.name} />
                                                    {item.name} - {convertMoney(item.price)}
                                                </li>
                                            )
                                        }
                                    </ul>
                                </>
                            }

                            <Button type="submit" variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Cart Modal */}
            <Cart />
        </>
    )
}

export default Header
