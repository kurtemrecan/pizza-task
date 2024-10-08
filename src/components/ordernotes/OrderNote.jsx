import React from 'react';
import { FormGroup, Input, Label } from 'reactstrap';
import './orderNote.css';
export default function OrderNote({ orderNote, onOrderNoteChange }) {
  return (
    <FormGroup className="order-note-container">
      <Label for="orderNote">Sipariş Notu</Label>
      <Input
        type="textarea"
        id="orderNote"
        value={orderNote}
        onChange={onOrderNoteChange}
        placeholder="Siparişine eklemek istediğin bir not var mı?"
      />
    </FormGroup>
  );
}
