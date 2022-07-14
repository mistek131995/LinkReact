import React from "react";
import {Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";

export const Home = () =>{
    return<>
        <Row className="text-center py-5">
            <h1>ОБЩАЙСЯ В СЕТИ АНОНИМНО</h1>
            <h2>ПЕРВАЯ ТОР-ОРИЕНТИРОВАННАЯ СОЦИАЛЬНАЯ СЕТЬ</h2>            
        </Row>
        <Row className="justify-content-center">
            <Col xs={2} className="text-center">
                <Button size="lg" variant="dark"><Link to="/register">СОЗДАТЬ АККАУНТ</Link></Button>
            </Col>
            <Col xs={2} className="text-center">
                <Button size="lg" variant="dark"><Link to="/login">ЕСТЬ АККАУНТ</Link></Button>
            </Col>
        </Row>
    </>
}