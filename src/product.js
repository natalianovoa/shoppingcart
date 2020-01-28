import React, { useEffect, useState } from 'react';
import ReactDOM from "react-dom";

import "rbx/index.css";
import { Card, Title, Content, Footer, Image, Column, Group, Button } from "rbx";
import { Container, Col, Row} from 'react-bootstrap';


const Product = ({product}) => {
      return (
          <Column  size="one-quarter">
            <Card size="15px">
            <Image.Container size="4by5"> <Card.Image textAlign="centered"> <img src={"data/products/" + product.sku + "_2.jpg"} width="50"
            height="28"/> 
            </Card.Image> </Image.Container>
            <Card.Content size="4by2">
                <Title size={4} spaced textAlign="centered" >{product.title}</Title>
                <Title subtitle textAlign="centered">{product.currencyFormat} {product.price}</Title>
            </Card.Content>
                <Card.Footer as="footer" size={128}>
                    <Card.Footer.Item as="p">
                        <Button.Group>
                        <Button outlined color="primary" key="white">S</Button>
                        <Button outlined color="primary" key="white">M</Button>
                        <Button outlined color="primary" key="white">L</Button>
                        <Button outlined color="primary" key="white">XL</Button>
                        </Button.Group>
                    </Card.Footer.Item>
                </Card.Footer>

                <Card.Footer as="footer">
                    <Card.Footer.Item as="a">
                        <Button color="primary">Add to Cart</Button>
                    </Card.Footer.Item>
                </Card.Footer>
            </Card>
            </Column>
      )
};

export default Product; 
