import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="position-relative hero-9">
            <div className="position-relative bg-gradient9 hero-14 pt-7 pt-sm-6 pb-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Projektkatalog</h1>
                        <p className="fs-17 text-muted">
                            Erfahren Sie an Praxisbeispielen, wie <span className="text-primary fw-bold">automait</span> Ihr Unternehmen bereichern kann.
                        </p>
                    </Col>
                </Row>
            </Container>
            </div>
        </section>
    );
};

export default Hero;
