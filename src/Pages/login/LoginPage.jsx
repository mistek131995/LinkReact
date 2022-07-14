import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LoginPage = () => {
    return <Container>
        <Row className="justify-content-center">
            <Col xs={4} className='gy-5 border block p-4 text-center'>
                <div className="mb-5">
                    <h1>ДОБРО ПОЖАЛОВАТЬ</h1>
                </div>
                <Form>
                    <Form.Control name="Login" placeholder="Введите логин" type="text" className="mb-3"/>
                    <Form.Control name="Password" placeholder="Введите пароль" type="password" className="mb-4"/>
                    <Button variant="dark" className="me-2 full-width mb-1">Войти</Button>
                    <Link to="/register" className="btn btn-secondary full-width">Создать аккаунт</Link>
                    <Link to="/passwordrecovery" className="btn btn-link">Восстановить пароль</Link>
                </Form>
            </Col> 
        </Row>
    </Container>
}