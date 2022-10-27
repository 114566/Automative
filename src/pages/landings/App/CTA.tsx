import { Col, Container, Row } from 'react-bootstrap';

const CTA = () => {
    return (
        <section
            className="section light-gray-bg pb-0 py-4 pt-sm-6 position-relative"
            id="section-download"
            data-aos="fade-up"
            data-aos-duration="1200"
        >
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col>
                        <h1 className="display-5 fw-medium">Fangen Sie an, die Fähigkeiten von KI für Ihr Unternehmen zu nutzen.</h1>
                        <p className="text-muted mx-auto">
                            Fehlentscheidungen kosten Zeit und Geld. <span className="text-primary fw-bold"> automait</span> kann Ihnen bei der Entscheidungsfindung helfen: durch KI-basierte <span className="text-primary fw-bold"> Analysen</span>,
                            <span className="text-primary fw-bold"> Vorhersagen</span> oder <span className="text-primary fw-bold"> Echzeit-Infos</span>.
                            Mit <span className="text-primary fw-bold"> automait</span> können Sie mit geringem Aufwand einen hohen Nutzen für Ihr Unternehmen schaffen.
                        </p>

                        {/* <div className="text-center mt-5">
                            <Link to="#" className="d-block d-sm-inline-flex">
                                <img src={google} alt="" height="52" />
                            </Link>
                            <Link to="#" className="d-block d-sm-inline-flex mt-2 mt-sm-0 ms-0 ms-sm-2">
                                <img src={store} alt="" height="52" />
                            </Link>
                        </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default CTA;
