import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Form, Row, Col, Spinner} from 'react-bootstrap';
import {GetBillViewObject, FetchBillActions, ClearBillAction} from '../../../features/BillView';

const BillView = () => {
  const fetchBillAction = FetchBillActions();
  const billObject = GetBillViewObject();
  const clearBill = ClearBillAction();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
  const query = useQuery();
  const accountNumber = query.get('accountNumber');

  useEffect(() => {
    fetchBillAction(accountNumber);
  }, []);

  useEffect(() => {
    return () => {
      clearBill();
    };
  }, []);

  useEffect(() => {
    console.log('component will Mount, render everytime');
  });

  return (
    <div>
      {billObject.isFetching && (<Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Account Number
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={billObject.accountNumber} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Account Name
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={billObject.username} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Current Balance
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly value={billObject.totalAmount} />
        </Col>
      </Form.Group>
    </div>
  );
};

export default BillView;
