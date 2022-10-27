import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';

const Footer = () => {
    return (
        <section className="section light-gray-bg pt-lg-5 pt-3 pb-3 position-relative" data-aos="fade-up" data-aos-duration="1400">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                        <li className="list-inline-item me-0">
                                <Link to="/unternehmen">Über uns</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="/kontakt">Support</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="/konditionen">Preise</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="/projektkatalog">Projekte</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="/impressum">Impressum</Link>
                            </li>
                            {/* <li className="list-inline-item me-0">
                                <Link to="/projektkatalog">AGB</Link>
                            </li> */}

                            {/* <li className="list-inline-item me-0">
                                <Link to="#">
                                    Karriere
                                    <span className="align-middle badge badge-soft-primary rounded-pill fw-normal fs-11 px-2 py-1 ms-1">
                                        Wir stellen ein
                                    </span>
                                </Link>
                            </li> */}
                        </ul>
                        <p className="mt-2 fs-14">
                        {new Date().getFullYear()} © automait.
                        </p>
                        <Logo width={"54"} height={"54"} className="mt-2 mb-4" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
