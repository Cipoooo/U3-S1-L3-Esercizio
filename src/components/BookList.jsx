

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';

const BookList = (props) =>{
    return(
     <>
     <Row>
       {props.Books.map((element) => {
        return(
            
            <>
            {SingleBook}
            <Col className='col-3'>
            <Card>
              <Card.Img variant="top" src={element.img} height={"300px"} />
              <Card.Body style={{height: "100px"}}>
                <Card.Title>{element.title}</Card.Title>
                <Card.Text>{element.text}</Card.Text>
              </Card.Body>
            </Card>
            </Col>
            </>
        );
       })}
       </Row>
     </>
    );
};
export default BookList