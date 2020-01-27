import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group } from "rbx";
import {Button, Container, Col, Row} from 'react-bootstrap';


const Product = ({product}) => {
      return (
          <Column  size="one-quarter">
            <Card size="15px">
            <Image.Container size="4by5"> <Card.Image textAlign="centered"> <Image src={"data/products/" + product.sku + "_2.jpg"} size={18} /> 
            </Card.Image> </Image.Container>
            <Card.Content size="4by2">
                <Title size={4} spaced textAlign="centered" >{product.title}</Title>
                <Title subtitle textAlign="centered">{product.currencyFormat} {product.price}</Title>
            </Card.Content>
                <Card.Footer as="footer" size={128}>

                    <Card.Footer.Item as="p">
                        <Button variant="primary">S</Button>
                    </Card.Footer.Item>
                    <Card.Footer.Item as="p">
                        <Button variant="primary">M</Button>
                    </Card.Footer.Item>
                    <Card.Footer.Item as="p">
                        <Button variant="primary">L</Button>
                    </Card.Footer.Item>
                    <Card.Footer.Item as="p">
                        <Button variant="primary">XL</Button>
                    </Card.Footer.Item>
        
                </Card.Footer>

                <Card.Footer as="footer">
                    <Card.Footer.Item as="a">
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
            </Column>
      )
};

export default Product; 
