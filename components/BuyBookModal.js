import React from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

export default ({ show, closeModal }) => {
  return (
    <Modal isOpen={show}>
      <ModalHeader toggle={closeModal}>
        Where would you like to buy Scott Shane's Objective Troy?
      </ModalHeader>
      <ModalBody>
        <Button variant="secondary" onClick={closeModal}>
          Close
        </Button>
        <Button variant="primary" onClick={closeModal}>
          Save Changes
        </Button>
      </ModalBody>
    </Modal>
  );
};
