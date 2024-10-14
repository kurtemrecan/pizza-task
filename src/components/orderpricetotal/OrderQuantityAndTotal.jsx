import React, { useState, useEffect } from 'react';
import {
  Button,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Card,
  CardBody,
} from 'reactstrap';
import './orderTotal.css';

const OrderQuantityAndTotal = ({ basePrice, selectedExtras, history }) => {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(basePrice);

  const extraPrice = 5;

  useEffect(() => {
    const extrasCost =
      selectedExtras.length > 5 ? (selectedExtras.length - 5) * extraPrice : 0;
    setTotalPrice((basePrice + extrasCost) * quantity);
  }, [quantity, selectedExtras, basePrice]);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const handleOrderSubmit = () => {
    history.push('/success');
  };
  return (
    <FormGroup className="qat-container">
      <Row>
        <Col xs="6" className="text-left">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              className="text-l-left"
              onClick={decreaseQuantity}
              color="secondary"
              size="sm"
              style={{ backgroundColor: 'yellow' }}
            >
              -
            </Button>
            <span style={{ margin: '0 15px', fontSize: '30px' }}>
              {quantity}
            </span>
            <Button
              className="text-l-left"
              onClick={increaseQuantity}
              color="secondary"
              size="sm"
              style={{ backgroundColor: 'yellow' }}
            >
              +
            </Button>
          </div>
        </Col>

        <Col xs="6" className="text-right">
          <Card
            style={{
              padding: '10px',
              fontSize: '18px',
            }}
          >
            <CardBody style={{ color: 'black' }}>
              <Label>Seçimler:</Label>
              <p style={{ fontSize: '18px' }}>
                {selectedExtras.length > 5
                  ? (selectedExtras.length - 5) * extraPrice
                  : 0}{' '}
                ₺
              </p>
              <Label>Toplam:</Label>
              <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
                {totalPrice.toFixed(2)} ₺
              </p>
              <Button
                color="primary"
                style={{ width: '100%' }}
                onClick={handleOrderSubmit}
              >
                Sipariş Ver
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </FormGroup>
  );
};

export default OrderQuantityAndTotal;
