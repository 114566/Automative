import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// images
import { ReactComponent as Logo } from '../../assets/images/logo.svg';

const Footer = () => {
    return (
        <section className="section light-gray-bg pt-lg-6 pt-3 pb-3 position-relative" data-aos="fade-up">
            <Container>
                <Row className="align-items-center">
                    <Col className="text-center">
                        <ul className="list-inline list-with-separator">
                            <li className="list-inline-item me-0">
                                <Link to="#">About</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                <Link to="#">Support</Link>
                            </li>
                            <li className="list-inline-item me-0">
                                Version{' '}
                                <Link to="#">
                                    <span className="align-middle badge badge-soft-primary rounded-pill px-2 py-1">
                                        v1.0
                                    </span>
                                </Link>
                            </li>
                        </ul>
                        <p className="mt-2 fs-14">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                        <Logo width={"54"} height={"54"} className="mt-2 mb-4" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
