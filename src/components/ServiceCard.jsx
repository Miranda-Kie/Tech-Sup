import React from 'react';
import { Card, Button} from 'react-bootstrap';
import parse from 'html-react-parser';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';



function ServiceCard({obj}) {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div class="col-lg-3 col-md-6">
      <Card>
        <Card.Img variant="top" src={obj.img} />
        <Card.Body>
          <Card.Title>{obj.title}</Card.Title>
          <Card.Text>
            {parse([obj.post.substring(0, 120).trim(),"..."].join(""))}
          </Card.Text>
        </Card.Body>
        <Card.Body>
        <Button variant="dark" onClick={() => setModalShow(true)}>View</Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          title={obj.title}
          description= {parse(obj.post)}
          />
        </Card.Body>
      </Card>
      </div>
  );
  }

 export default ServiceCard;