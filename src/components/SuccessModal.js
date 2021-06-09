/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { Button, Modal, ModalFooter ,Alert, ModalBody} from 'reactstrap';
import {Link} from "react-router-dom";



const SuccessModal = (props) => {
  const {
      id,
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody toggle={toggle}>
            <Alert color="success">
            Form Submited Successfully!!!
      </Alert></ModalBody>
        <ModalFooter>
          <Button color="primary"tag={Link} to={`/courses`} onClick={toggle}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default SuccessModal;
