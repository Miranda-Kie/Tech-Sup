import React from 'react';
import { Card, Button} from 'react-bootstrap';
import parse from 'html-react-parser';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';



const ServiceCard = ({obj}) => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="col-lg-3 col-md-6 cardFlex">
      <Card>
        <Card.Img variant="top" src={obj.img} alt="image"/>
        <Card.Body className="pt-lg-2">
        <div className="mb-lg-2 cardTitle ">
          <Card.Title>{obj.title}</Card.Title>
        </div>  
          <Card.Text className="cardText">
            {parse([obj.post.substring(0, 110).trim(),"..."].join(""))}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="cardFooter">
        <Button className="viewButton" variant="dark" onClick={() => setModalShow(true)}>View</Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={obj.title}
          description= {parse(obj.post)}
          />
        </Card.Footer>
      </Card>
  
      </div>
  );
  }

 export default ServiceCard;