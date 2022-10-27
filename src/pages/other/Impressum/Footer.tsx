import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// imgaes
// import { ReactComponent as Logo } from '../../assets/images/logo1.svg';

import { ReactComponent as Logo } from '../../../assets/images/logo1.svg';
const Footer = () => {
    return (
        <section className="pt-5 pb-4 bg-gradient10 position-relative">
            <Container>
                <Row>
                    <Col xl={4}>
                        <Link className="navbar-brand me-lg-4 mb-2 me-auto d-flex align-items-center pt-0" to="/home">
                            <Logo width={"74"} height={"74"} />
                        </Link>
                        <p className="text-white-50 w-75">
                            Wir automatisieren Data Science.
                        </p>
                    </Col>
                    <Col xl={2} lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Produkt</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/home" className=" text-white">
                                        Funktionen
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/konditionen" className=" text-white">
                                        Preise & Pakete
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col xl={2} lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 text-white fs-14 fw-semibold text-uppercase"> Projekte</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/projektkatalog" className="text-white">
                                        Übersicht
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/risikobewertung" className="text-white">
                                        Risikoanalysen
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/kampagnenplanung" className="text-white">
                                        Marketing
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                   
                    <Col xl={2} lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 text-white mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Unternehmen</h6>
                            <ul className="list-unstyled">
                            <li className="my-3">
                                    <Link to="/unternehmen" className=" text-white">
                                        Über uns
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/kontakt" className=" text-white">
                                        Kontakt
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </Col>
                    <Col xl={2} lg={3} xs={6}>
                        <li className="d-inline-block">
                            <a href="https://www.linkedin.com/company/automait/" target="_blank" rel="noopener noreferrer"><FeatherIcon icon="linkedin" className="icon icon-m text-white-50" /></a>
                        </li>
                    </Col>
                </Row>
                <hr />
                    <Col  lg={12}>
                        <p className="text-center text-white-50">
                            {new Date().getFullYear()} © automait.
                        </p>
                    </Col>
            </Container>
        </section>
    );
};

export default Footer;
