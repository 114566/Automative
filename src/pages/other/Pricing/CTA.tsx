import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CTA = () => {
    return (
        <section className="light-gray-bg position-relative pb-5">
            <Container>
                <Row data-aos="fade-up">
                    <Col className="text-center">
                        <h1 className="display-5 fw-semibold">Haben Sie Fragen?</h1>
                        <p className="text-muted mx-auto"></p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg={12}>
                        <Card
                            className="shadow-none border mb-lg-0 rounded-sm"
                            data-aos="fade-up"
                            data-aos-duration="500"
                        >
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Nehmen Sie noch Heute Kontakt auf</h3>
                                <p>
                                    Wenden Sie sich an unser engagiertes Team und wir werden uns in Kürze bei Ihnen melden.
                                </p>
                                <Link to="/kontakt" className="btn btn-primary">
                                    Kontakt
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    {/* <Col lg={6}>
                        <Card
                            className="shadow-none border mb-0 rounded-sm"
                            data-aos="fade-up"
                            data-aos-duration="1000"
                        >
                            <Card.Body>
                                <h3 className="mt-0 fw-semibold">Explore Knowledge Base</h3>
                                <p>
                                    Learn more about all the features and functionality from our detailed knowledge
                                    base.
                                </p>
                                <Link to="/pages/contact" className="btn btn-outline-primary mt-4">
                                    Explore
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
