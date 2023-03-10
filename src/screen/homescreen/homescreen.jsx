import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Categories from "../../componants/categoriesBar/categories";
import Video from "../../componants/video/video"

const HomeScreen = () => {
  return (
    <>
        <Container>
            <Categories />
            <Row>
                {[...new Array(20)].map(() => (
                    <Col lg={3} md={4} >
                        <Video />
                    </Col>
                ))}
            </Row>
        </Container>
    </>
  )
}

export default HomeScreen