import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// imgaes
import { ReactComponent as Logo } from '../../assets/images/logo1.svg';


const Footer1 = () => {
    return (
        <section className="pt-5 pb-4 bg-gradient10 position-relative">
            <Container>
                <Row>
                    <Col xl={4}>
                        <Link className="navbar-brand me-lg-4 mb-4 me-auto d-flex align-items-center pt-0" to="/home">
                            <Logo width={"74"} height={"74"} />
                        </Link>
                        <p className="text-white w-75">
                            Wir automatisieren Data Science.
                        </p>
                    </Col>
                    <Col xl={2} lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 mt-sm-2 fs-14 text-white fw-semibold text-uppercase">Produkt</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/home" className=" text-white">
                                        Eigenschaften
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/konditionen" className=" text-white">
                                        Preise
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
                                    <Link to="/risikobewertung" className="text-white">
                                        Risikobewertung
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/kampagnenplanung" className="text-white">
                                        Kampagnenplanung
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                   
                    <Col xl={2} lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 text-white mt-3 mt-sm-2 fs-14 fw-semibold text-uppercase">Angebote</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/konditionen" className=" text-white">
                                        Preis-Pakete
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/kontakt" className=" text-white">
                                        Planvorteile
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xl={2} lg={3} xs={6}>
                        <div className="ps-xl-5">
                            <h6 className="mb-3 mt-3 text-white mt-sm-2 fs-14 fw-semibold text-uppercase">Unternehmen</h6>
                            <ul className="list-unstyled">
                                <li className="my-3">
                                    <Link to="/unternehmen" className="text-white">
                                        Über uns
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/kontakt" className=" text-white">
                                        Kontakt
                                    </Link>
                                </li>
                                <li className="my-3">
                                    <Link to="/kontakt" className=" text-white">
                                        Impressum
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className="text-md-start text-center">
                    <Col md={8}>
                        <p className="pb-0 mb-0  text-white-50">
                            {new Date().getFullYear()} © automait.
                        </p>
                    </Col>
                    <Col md={4} className="text-md-end">
                        <div className="align-items-end mt-md-0 mt-4">
                            <ul className="list-unstyled mb-0">
                                {/* <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="facebook" className="icon icon-xs text-white" />
                                    </Link>
                                </li>
                                <li className="d-inline-block me-4">
                                    <Link to="#">
                                        <FeatherIcon icon="twitter" className="icon icon-xs text-white" />
                                    </Link>
                                </li> */}
                                <li className="d-inline-block">
                                    <Link to="#">
                                        <FeatherIcon icon="linkedin" className="icon icon-l text-primary fw-bold" />
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

export default Footer1;
