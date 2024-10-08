import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import extras from '../../userInfo';
import './extras.css';

const Extras = ({ selectedExtras, onCheckboxChange }) => {
  return (
    <div className="extras-container">
      <h2>Ek Malzemeler</h2>
      <p>En fazla 10 malzeme seçebilirsiniz. 5 TL</p>
      <div className="checkboxes-container">
        {extras.map((extra) => (
          <FormGroup check key={extra.id} inline>
            <Input
              type="checkbox"
              id={`extra-${extra.id}`} // unique id for accessibility
              checked={selectedExtras.includes(extra.id)}
              onChange={() => onCheckboxChange(extra.id)}
            />
            <Label check htmlFor={`extra-${extra.id}`}>
              {extra.name}
            </Label>
          </FormGroup>
        ))}
      </div>
    </div>
  );
};

export default Extras;
