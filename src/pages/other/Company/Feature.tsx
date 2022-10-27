import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import made from '../../../assets/images/features/made.png';

const Feature = () => {
    return (
        <section className="position-relative light-gray-bg overflow-hidden features-1 py-5" data-aos="fade-up">
            <Container>
                <Row className="align-items-center mt-5">
                    <Col lg={5}>
                        <h1 className="display-5 fw-semibold">Gemeinsam außergewöhnliche Projekte entwickeln</h1>

                        <p className="text-muted my-4">
                            <span className="text-primary fw-bold">automait</span> - "Made in Germany" <br/>
                            Unser Team besteht aus den unterschiedlichsten Charakteren, aber wir verfolgen ein gemeinsames Ziel.
                            Data Science für Unternehmen zu automatisieren.
                        </p>
                        <p className="text-muted my-4">
                            Mit dem Qualitätsversprechen <span className="text-primary fw-bold">"Made in Germany"</span>, konzentrieren wir uns auf den deutschsprachigen Markt.
                            
                        </p>

                        <Link to="/kontakt" className="h6 text-primary">
                            erfahre mehr
                            <FeatherIcon icon="arrow-right" className="ms-2 icon-xxs" />
                        </Link>
                    </Col>
                    <Col lg={{ span: 6, offset: 1 }}>
                        <div className="img-content2 position-relative mt-4 mt-lg-0">
                            <div className="img-up mb-lg-0 mb-6">
                                <img src={made} alt="feature" className="img-fluid d-block shadow" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Feature;
