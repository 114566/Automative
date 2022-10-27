import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';

// images
import { ReactComponent as Logo } from '../../../assets/images/logo1.svg';

const Footer = () => {
    return (
        <section className="marketing-6 position-relative">
            <Container>
                <Row className="align-items-center mt-3 mb-4 pb-1">
                    <Col lg={6}>
                        <h2 className="text-dark fw-medium mt-0 mb-1">Ready to get started?</h2>
                        <p className="text-muted pb-0 mb-0">Create your free 14-day account now</p>
                    </Col>
                    <Col lg={6}>
                        <div className="text-lg-end">
                            <Link to="#" className="btn btn-primary rounded-pill">
                                Try it free for 14 days
                            </Link>
                            <Link to="#" className="btn btn-link rounded-pill">
                                Chat with us
                            </Link>
                        </div>
                    </Col>
                </Row>
            </Container>

            <section className="pt-5 pb-4 bg-gradient10 position-relative">
                <Container>
                    <Row>
                        <Col xl={4}>
                            <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                                <Logo width={"54"} height={"54"} />
                            </Link>
                            <p className="text-white-50 w-75">
                                Make your web application stand out with high-quality landing page
                            </p>
                        </Col>
                        <Col xl="auto" lg={3} xs={6}>
                            <div className="ps-xl-5">
                                <h6 className="mb-3 mt-3 mt-sm-2 text-white fs-14 fw-semibold text-uppercase"> Platform</h6>
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
                                    <li className="my-3 text-white">
                                        <Link to="#" className=" text-white">
                                            Integrations
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            Status
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl="auto" lg={3} xs={6}>
                            <div className="ps-xl-5">
                                <h6 className="mb-3 mt-3 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Knowledge Base</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            Sales Tools catalog
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            API
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl="auto" lg={3} xs={6}>
                            <div className="ps-xl-5">
                                <h6 className="mb-3 text-white mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Company</h6>
                                <ul className="list-unstyled">
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            Career
                                        </Link>
                                    </li>
                                    <li className="my-3">
                                        <Link to="#" className=" text-white">
                                            Contact Us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col xl="auto" lg={3} xs={6}>
                            <div className="ps-xl-5">
                                <h6 className="mb-3 mt-3 text-white mt-sm-2 fs-14 fw-semibold text-uppercase">Legal</h6>
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
                    <Row className="text-center">
                        <Col md={12}>
                            <p className="pb-0 mb-0  text-white">
                                {new Date().getFullYear()} © Prompt. All rights reserved. Crafted by{' '}
                                <a href="https://coderthemes.com/">Coderthemes</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
};

export default Footer;
