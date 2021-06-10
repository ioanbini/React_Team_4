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
            Form Submited Successfully!!! <br/>
            <Button className="float-right"color="primary"tag={Link} to={`/courses`} onClick={toggle}>OK</Button>
      </ModalBody>
      </Modal>
    </div>
  );
}

export default SuccessModal;
