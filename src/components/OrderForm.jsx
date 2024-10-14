import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './OrderForm.css';
import Extras from './extras/Extras';
import OrderNote from './ordernotes/OrderNote';
import OrderQuantityAndTotal from './orderpricetotal/OrderQuantityAndTotal';

export default function OrderForm() {
  const initialFormState = {
    fullName: '',
    size: '',
    dough: '',
    selectedExtras: [1, 3, 5, 6, 13],
    orderNote: '',
  };

  const [formData, setFormData] = useState(initialFormState);
  const [nameError, setNameError] = useState('');
  const history = useHistory();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (id) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedExtras: prevData.selectedExtras.includes(id)
        ? prevData.selectedExtras.filter((extra) => extra !== id)
        : [...prevData.selectedExtras, id],
    }));
  };

  const handleOrderNoteChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      orderNote: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName.length < 3) {
      setNameError('Adınız en az 3 karakter olmalıdır.');
      return;
    } else {
      setNameError('');
    }
    console.log('Form submitted successfully', formData);
  };

  const goToHome = () => {
    history.push('/');
  };

  const goToOrder = () => {
    history.push('/order');
  };

  return (
    <Container className="order-container ">
      <Navbar style={{ backgroundColor: '#ce2829' }}>
        <NavbarBrand href="/">
          <img
            src="Assets/Interfaces/iteration-1-assets/logo.svg"
            alt="logo"
            className="mini-h-logo"
          />
        </NavbarBrand>
        <Nav
          className="ml-auto chef-container"
          style={{ color: 'white', fontFamily: 'barlow', display: 'flex' }}
        >
          <NavItem>
            <NavLink onClick={goToHome}>Ana Sayfa</NavLink>
          </NavItem>
          <span> - </span>
          <NavItem>
            <NavLink onClick={goToOrder}>Sipariş Oluştur</NavLink>
          </NavItem>
        </Nav>
      </Navbar>

      <main className="main-container chef-container">
        <Row className="chef-container" style={{ marginBottom: '30px' }}>
          <Col>
            <h1
              style={{
                fontFamily: 'barlow',
                fontSize: '27px',
                fontWeight: 'normal',
                marginBottom: '15px',
              }}
            >
              Position Absolute Acı Pizza
            </h1>
            <span className="price" style={{ fontSize: '28px' }}>
              85.50 ₺
            </span>
            <span className="rating">4.9</span>
            <span className="rating">(200)</span>
          </Col>
        </Row>

        <Row className="chef-container">
          <Col>
            <p style={{ color: '#5f5f5f', marginBottom: '30px' }}>
              Frontend Dev olarak hala position:absolute kullanıyorsan bu çok
              acı pizza tam sana göre. Pizza, domates, peynir ve genellikle
              çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak
              odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle
              yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan
              İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen
              pizzetta denir.
            </p>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit} className="chef-container">
          <Row className="options-container">
            <Col md={6}>
              <FormGroup tag="fieldset" style={{ border: 'none' }}>
                <h2>
                  Boyut Seç <span style={{ color: 'red' }}>*</span>
                </h2>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="size"
                      value="kucuk"
                      checked={formData.size === 'kucuk'}
                      onChange={handleInputChange}
                    />{' '}
                    Küçük
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="size"
                      value="orta"
                      checked={formData.size === 'orta'}
                      onChange={handleInputChange}
                    />{' '}
                    Orta
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="size"
                      value="buyuk"
                      checked={formData.size === 'buyuk'}
                      onChange={handleInputChange}
                    />{' '}
                    Büyük
                  </Label>
                </FormGroup>
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <h2>
                  Hamur Seç <span style={{ color: 'red' }}>*</span>
                </h2>
                <Input
                  type="select"
                  name="dough"
                  value={formData.dough}
                  onChange={handleInputChange}
                >
                  <option value="" disabled selected>
                    Hamur Kalınlığı
                  </option>
                  <option value="ince">İnce</option>
                  <option value="orta">Orta</option>
                  <option value="kalin">Kalın</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Extras
            selectedExtras={formData.selectedExtras}
            onCheckboxChange={handleCheckboxChange}
          />
          <FormGroup style={{ width: '100%' }}>
            <Label for="fullName">
              Ad Soyad <span style={{ color: 'red' }}>*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Minimum 3 harf olmak üzere lütfen ad soyadınızı girin"
              type="text"
              style={{ width: '100%' }}
              value={formData.fullName}
              onChange={handleInputChange}
            />
            {nameError && <p style={{ color: 'red' }}>{nameError}</p>}{' '}
          </FormGroup>
          <OrderNote
            orderNote={formData.orderNote}
            onOrderNoteChange={handleOrderNoteChange}
          />
          <OrderQuantityAndTotal
            basePrice={85.5}
            selectedExtras={formData.selectedExtras}
            history={history}
          />
        </Form>
      </main>
    </Container>
  );
}
