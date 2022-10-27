import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// imgaes
import { ReactComponent as Logo } from '../../assets/images/logo1.svg';

const Footer2 = () => {
    return (
        <section className="pt-5 pb-4 bg-gradient10 position-relative">
            <Container>
                <Row>
                    <Col xl={8}>
                        <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="#">
                            <Logo width={"54"} height={"54"} />
                        </Link>
                        <p className="text-white-50 w-50">
                        Decken Sie mit automait alle relevanten Teile einer erfolgreichen KI-Anwendung ab.
                        </p>
                    </Col>
                    <Col xl="auto" sm={4} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Plattform</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Konditionen
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        FAQ
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Konditionen
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Datenschutz
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl="auto" sm={4} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Unternehmen</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Über uns
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="#" className="text-white">
                                        Team
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0 text-white">
                        {new Date().getFullYear()} © automait.
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end">
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

export default Footer2;
