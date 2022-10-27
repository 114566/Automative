import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// imgaes
import { ReactComponent as Logo } from '../../../assets/images/logo1.svg';

const Footer = () => {
    return (
        <section className="pt-5 pb-4 bg-gradient10 position-relative">
            <Container>
                <Row>
                    <Col md={4}>
                        <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                            <Logo width={"54"} height={"54"} />
                        </Link>
                        <p className="text-white-50 w-75">
                            Make your web application stand out with high-quality landing page
                        </p>
                    </Col>

                    <Col md="auto" sm={6}>
                        <div className="ps-md-5">
                            <h6 className="mb-4 mt-5 mt-sm-2 fs-14 text-white fw-semibold text-uppercase"> Platform</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Demo
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Pricing
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Integrations
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Status
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="auto" sm={6}>
                        <div className="ps-md-5">
                            <h6 className="mb-4 mt-5 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Knowledge Base</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Blog
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Help Center
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Sales Tools catalog
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="auto" sm={6}>
                        <div className="ps-md-5">
                            <h6 className="mb-4 mt-5 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Company</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        About Us
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Career
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col md="auto" sm={6}>
                        <div className="ps-md-5">
                            <h6 className="mb-4 mt-5 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Legal</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Usage Policy
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Trust
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={6}>
                        <p className="pb-0 mb-0 text-white">
                            {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                            <a href="https://coderthemes.com/">Coderthemes</a>
                        </p>
                    </Col>
                    <Col md={6} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs text-white" />
                                    </Link>
                                </li>
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs text-white" />
                                    </Link>
                                </li>
                                <li className="d-inline-block">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon icon-xs text-white" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Footer;
