import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { convertMoney } from '../helper/util';

function Product({ product, handleAddToCart }) {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <div className="card-price text-danger fw-bold">{convertMoney(product.price)}</div>
                <Card.Text>
                    {product.desc}
                </Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product.id)}>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product
