
import Me from './../assets/me.jpg'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const user = {

    name: 'marvellous',
    age: 30
}

function Card1({myName, school}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Me} />
      <Card.Body>
        <Card.Title>About me</Card.Title>
        <Card.Text>
         my name is {user.name} and i am {user.age} years old. stydying T {school}
        </Card.Text>
        <Button variant="primary">{myName}</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;