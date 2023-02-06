import kanban from '../images/kanban.png';
import set from '../images/set.png';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

function SimpleCarousel() {
    const navigate = useNavigate();
    const handleClick = useCallback((link) => navigate(link, { replace: true }), [navigate]);
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={kanban}
                    alt="First slide"
                    onClick={event => handleClick("../kanban")}
                />
                <Carousel.Caption>
                    <h3 className="carousel-text">Kanban Board</h3>
                    {/* <p className="carousel-text">Task tracking using React DnD and Firebase.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-img"
                    src={set}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className="carousel-text">Set Card Game</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SimpleCarousel;