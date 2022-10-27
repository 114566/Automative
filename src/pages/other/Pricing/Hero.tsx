import { Col, Container, Row } from 'react-bootstrap';

const Hero = () => {
    return (
        <section className="position-relative bg-gradient9 hero-14 pt-7 pt-sm-6 pb-5">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={12} className="text-center">
                        <h1 className="hero-title">Starten Sie noch Heute mit <span className="highlight highlight-success d-inline-block">automait.</span>{' '} </h1>
                        <p className="fs-17 text-muted">
                            Wählen Sie ein Preis-Paket, dass zu Ihnen passt und profitieren auch Sie von KI-Vorteilen.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
