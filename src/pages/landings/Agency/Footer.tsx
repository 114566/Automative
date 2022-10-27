import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// images
import { ReactComponent as Logo } from '../../../assets/images/logo1.svg';

const Footer = () => {
    return (
        <div className="pt-5 pb-3 position-relative bg-gradient10">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="me-5">
                            <Link to="#" className="navbar-brand me-lg-4 me-auto">
                                <Logo width={"54"} height={"54"} className="d-inline-block align-top" />
                            </Link>
                            <p className="mt-4 text-white-50">300 Park Avenue, 12th Floor New York, NY 10022</p>
                            <p className="mb-5 text-white-50">1499 Burwell Heights Road Port Arthur Meadow Nashville, TX 77642</p>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <Row>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold text-white">About</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Portfolio
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Resources
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Blog
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold text-white">Company</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                About
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Career
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Clients
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold text-white">Get in touch</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-1">
                                            <Link to="#" className="text-white">
                                                hello@prompt.com
                                            </Link>
                                        </li>
                                    </ul>
                                    <ul className="list-inline">
                                        <li className="list-inline-item me-3">
                                            <Link to="#" className="text-white">
                                                <FeatherIcon icon="facebook" className="icon-xs" />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                            <Link to="#" className="text-white">
                                                <FeatherIcon icon="twitter" className="icon-xs" />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item me-3">
                                            <Link to="#" className="text-white">
                                                <FeatherIcon icon="linkedin" className="icon-xs" />
                                            </Link>
                                        </li>
                                        <li className="list-inline-item">
                                            <Link to="#" className="text-white">
                                                <FeatherIcon icon="instagram" className="icon-xs" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs="auto">
                                <div className="ps-md-5">
                                    <h5 className="text-dark mb-4 fw-semibold text-white">Languages</h5>
                                    <ul className="list-unstyled">
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                Francais
                                            </Link>
                                        </li>
                                        <li className="my-2">
                                            <Link to="#" className="text-white">
                                                English
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col md={12}>
                        <p className="pb-0 mb-0 fs-14 text-center text-white">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
