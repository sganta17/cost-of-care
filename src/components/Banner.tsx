import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'


const Banner = () => {
    return (
        <div className="Banner">
            <Jumbotron fluid>
                <Container>
                </Container>
            </Jumbotron>
        </div>
    );
}
const  sayHello = () => {
    alert('Hello!');
}
export default Banner;