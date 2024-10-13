import { Col, Row } from "react-bootstrap";
import DogCard from "./dogCard";
export default function DogGroup(props) {
  console.log(props);
  return (
    <div>
      <Row>
        <h2>Breed: {props.breed}</h2>
        {props.dogs.length > 0 ? (
          props.dogs.map((subbreed) => (
            <Col xs={6} md={4} key={props.breed + " " + subbreed}>
              <DogCard breed={props.breed} subbreed={subbreed} />
            </Col>
          ))
        ) : (
          <Col xs={6} md={4} key={props.breed}>
            <DogCard breed={props.breed} />
          </Col>
        )}
      </Row>
      <br />
    </div>
  );
}
