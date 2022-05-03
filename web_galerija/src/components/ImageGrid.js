import {Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/imageGrid.css';

function ImageGrid() {
  return (
    <Container className='mainGrid' align='center'>
  <Row>
    <Col>
    <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/66/Pakrac2017.jpg"
    alt="new"
    />
    </Col>
    <Col><img
    src="https://upload.wikimedia.org/wikipedia/commons/6/66/Pakrac2017.jpg"
    alt="new"
    /></Col>
  </Row>
  <Row>
    <Col><img
    src="https://upload.wikimedia.org/wikipedia/commons/6/66/Pakrac2017.jpg"
    alt="new"
    /></Col>
    <Col><img
    src="https://upload.wikimedia.org/wikipedia/commons/6/66/Pakrac2017.jpg"
    alt="new"
    /></Col>
    <Col><img
    src="https://upload.wikimedia.org/wikipedia/commons/6/66/Pakrac2017.jpg"
    alt="new"
    /></Col>
  </Row>
</Container>

  );
}

export default ImageGrid;