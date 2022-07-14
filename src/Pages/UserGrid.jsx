import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const UserGrid = () => {
    return <Container>
        <Row>
            <Col sm={3} className='border'>
                Blocks
            </Col>
            <Col sm={6} className='border'>
                Content
            </Col>
            <Col sm={3} className='border'>
                Blocks
            </Col>
        </Row>
    </Container>
}