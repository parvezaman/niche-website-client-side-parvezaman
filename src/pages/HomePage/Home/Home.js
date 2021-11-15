import { Box } from '@mui/system';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import Products from '../Products/Products';

const Home = () => {
    return (
        <Box>
            <Box>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://i.ibb.co/RYRKBkh/ban-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Annie Leibovitz</h3>
                            <p>“A thing that you see in my pictures is that I was not afraid to fall in love with these people.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://i.ibb.co/k4Pv59B/ban2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Ansel Adams</h3>
                            <p>“When words become unclear, I shall focus with photographs. When images become inadequate, I shall be content with silence.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src="https://i.ibb.co/L6VW86Z/ban3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Aaron Siskind</h3>
                            <p>“Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything.”</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Box>
            <Products />
        </Box>
    );
};

export default Home;