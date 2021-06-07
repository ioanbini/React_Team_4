import React ,{ useState ,useEffect }from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, CardDeck } from 'reactstrap';
import { Card, Button, CardTitle,CardText,CardBody } from 'reactstrap';
const CoursesCards = ({title, imagePath, price, dates,duration,description}) => {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const buttonLabel=()=>{
        return (<div>
                

        </div>

        );
    }

    return (
     
        <Card >
            <CardBody >
                <CardTitle tag="h5">{title}</CardTitle>
            </CardBody>
            <img width="100%" src={imagePath} alt="Card image cap" />
            <CardBody>
                <CardText>Price: {price.normal} | Bookable: €  ✔ </CardText>
                <CardTitle>{duration} </CardTitle>
                <CardTitle >{dates.start_date}  </CardTitle>
                
                <div>
                {/* <Button color="danger" onClick={toggle}>{buttonLabel}</Button> */}
                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>{title}</ModalHeader>
                    <ModalBody>{description}</ModalBody>
                    <ModalFooter>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                </div>
                <Button color="primary" onClick={toggle}>{buttonLabel}VIEW</Button>
            </CardBody>
            </Card>
            
      

        
    
    );
  };
  
  export default CoursesCards;