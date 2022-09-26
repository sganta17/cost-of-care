import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'


function Banner() {
    return (
        <div className="Banner">
            <Jumbotron fluid>
                <Container>
                </Container>
            </Jumbotron>
        </div>
    );
}
function sayHello() {
    alert('Hello!');
}
export default Banner;