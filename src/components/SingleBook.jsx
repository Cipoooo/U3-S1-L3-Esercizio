import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
import libri from '../../libri.json';


const SingleBook = (props = libri) =>{
    return(
      <>
    <Col className='col-2'>
    <Card>
      <Card.Img variant="top" src={props[0].img} />
      <Card.Body>
        <Card.Title>{props[0].title}</Card.Title>
      </Card.Body>
    </Card>
    </Col>
    </>
    );
}
export default SingleBook