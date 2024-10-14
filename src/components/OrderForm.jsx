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
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleCheckboxChange = (id) => {
    setFormData((prevFormData) => {
      const selectedExtras = prevFormData.selectedExtras.includes(id)
        ? prevFormData.selectedExtras.filter((extra) => extra !== id)
        : [...prevFormData.selectedExtras, id];

      return { ...prevFormData, selectedExtras };
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.length < 3) {
      newErrors.fullName = 'Adınız en az 3 karakter olmalıdır.';
    }

    if (!formData.size) {
      newErrors.size = 'Lütfen bir boyut seçin.';
    }

    if (!formData.dough) {
      newErrors.dough = 'Lütfen bir hamur seçin.';
    }

    if (formData.selectedExtras.length > 10) {
      newErrors.selectedExtras = 'En fazla 10 malzeme seçebilirsiniz.';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      console.log('Form successfully submitted:', formData);
      history.push('/success'); // Başarılı gönderim sonrası yönlendirme
    } else {
      setErrors(formErrors);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Hataları yalnızca form gönderildiğinde kontrol et
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
  };

  const goToHome = () => {
    history.push('/');
  };

  const goToOrder = () => {
    history.push('/order');
  };

  // "Sipariş Ver" butonunun aktif olmasını kontrol et
  const isFormValid =
    formData.fullName.length >= 3 && formData.size && formData.dough;

  return (
    <Container className="order-container">
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
            <NavLink onClick={goToOrder} style={{ fontWeight: 'bold' }}>
              Sipariş Oluştur
            </NavLink>
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
              85.50₺
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
                      onChange={handleInputChange}
                    />{' '}
                    Büyük
                  </Label>
                </FormGroup>
                {errors.size && <p style={{ color: 'red' }}>{errors.size}</p>}
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
                  onChange={handleInputChange}
                  value={formData.dough || ''}
                >
                  <option value="" disabled>
                    Hamur Kalınlığı
                  </option>
                  <option value="ince">İnce</option>
                  <option value="orta">Orta</option>
                  <option value="kalin">Kalın</option>
                </Input>
                {errors.dough && <p style={{ color: 'red' }}>{errors.dough}</p>}
              </FormGroup>
            </Col>
          </Row>
          <Extras
            selectedExtras={formData.selectedExtras}
            onCheckboxChange={handleCheckboxChange}
          />
          {errors.selectedExtras && (
            <p style={{ color: 'red' }}>{errors.selectedExtras}</p>
          )}
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
            {errors.fullName && (
              <p style={{ color: 'red' }}>{errors.fullName}</p>
            )}
          </FormGroup>
          <OrderNote
            orderNote={formData.orderNote}
            onOrderNoteChange={(e) =>
              setFormData({ ...formData, orderNote: e.target.value })
            }
          />
          <OrderQuantityAndTotal
            basePrice={85.5}
            selectedExtras={formData.selectedExtras}
            history={history}
            size={formData.size}
            fullName={formData.fullName}
            dough={formData.dough}
            isButtonDisabled={!isFormValid} // Butonun durumunu kontrol et
          />
        </Form>
      </main>
    </Container>
  );
}
