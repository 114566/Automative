import {Col, Container, Row } from 'react-bootstrap';


// images

const Hero9 = () => {
    return (
        <section className="position-relative hero-9 ">
            <div className="position-relative bg-gradient9 hero-14 pt-7 pt-sm-6 pb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} className="text-center">
                            <h1 className="hero-title">
                                <span className="highlight highlight-success d-inline-block">Impressum</span> 
                            </h1>
                            <p className="fs-17 text-muted">
                              Angaben gemäß <span className="text-primary fw-bold">§5 Telemediengesetz (TMG) </span>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
    );
};

export default Hero9;