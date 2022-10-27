import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

const Hero = () => {
    return (
        <section className="hero-4 light-gray-bg pb-5 pt-7 py-sm-7">
            
            <Container>
                <Row className="justify-content-center">
                    <Col lg={7} className="text-center">
                        <h1 className="hero-title">Risikobewertung</h1>
                    </Col>
                </Row>

                <Row className="border-top border-bottom py-4 align-items-center mt-5">
                    <Col>
                        <span className="fs-14">Kunde</span>
                        <h4 className="mt-1 fw-medium">europäische Behörde</h4>
                    </Col>
                    {/* <Col>
                        <span className="fs-14">Kategorie</span>
                        <h4 className="mt-1 fw-medium">Risikobewertung</h4>
                    </Col> */}
                    <Col>
                        <span className="fs-14">Branche</span>
                        <h4 className="mt-1 fw-medium">Finanzen</h4>
                    </Col>
                    <Col xs="auto">
                        <ul className="list-inline mb-0 me-3">
                            <li className="list-inline-item text-muted align-middle me-2 text-uppercase fs-13 fw-medium">
                                Teilen:
                            </li>
                            {/* <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon icon="facebook" className="icon-dual-primary icon-xs" />
                                </Link>
                            </li>
                            <li className="list-inline-item me-2 align-middle">
                                <Link to="#">
                                    <FeatherIcon icon="twitter" className="icon-dual-info icon-xs" />
                                </Link>
                            </li> */}
                            {/* <li className="list-inline-item align-middle">
                                <Link to="#">
                                    <FeatherIcon icon="instagram" className="icon-dual-danger icon-xs" />
                                </Link>
                            </li> */}
                            <li className="list-inline-item align-middle">
                                <a href="https://www.linkedin.com/sharing/share-offsite/?url=localhost:3000/risikobewertung"><FeatherIcon icon="linkedin" className="icon-dual-info icon-l" /></a>
                            </li>
                        </ul>
                    </Col>
                    {/* <Col xs="auto">
                        <Link to="#" className="btn btn-outline-primary">
                            Project Link
                        </Link>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
