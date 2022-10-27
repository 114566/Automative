import { Col, Container, Row, Badge, Card } from 'react-bootstrap';

// types
import { Feature2 } from './app';
import pipeline from '../../../assets/images/features/pipeline.png';

type Features2Props = {
    features2: Feature2[];
};

const Features2 = ({ features2 }: Features2Props) => {
    return (
        <section className="section medium-gray-bg py-5 features-2 position-relative overflow-hidden">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            weitere Vorteile
                        </Badge>
                        <h1 className="display-5 fw-semibold">Wir bieten alles, was Sie für KI benötigen.</h1>
                        <p className="text-muted mx-auto">
                            Unsere automatisierte Pipeline deckt alle wesentlichen Bestandteile ab, die zum Aufbau einer erfolgreichen KI-Anwendung erforderlich sind.
                            {/* Angefangen bei der Bereinigung Ihrer Daten, bis hin zur Visualisierung Ihrer ausgewählten Produktionsmodelle, um das Modellverhalten live zu verfolgen. */}
                        </p>
                    </Col>
                </Row>
                <Row className="my-5">
                    {(features2 || []).map((feature, index) => {
                        return (
                            <Col lg={4} key={index.toString()}>
                                <Card
                                    className="medium-gray-bg shadow-none shapes"
                                    data-aos="fade-up"
                                    data-aos-duration={(index + (1 + index)) * 100}
                                >
                                    {/* {(feature.shapes || []).map((shape, index) => {
                                        return <div key={index.toString()} className={shape}></div>;
                                    })} */}
                                    <Card.Body className="text-center py-0">
                                        <h3 className="fw-semibold mt-0">{feature.title}</h3>
                                        <p className="fs-14">{feature.description}</p>

                                        {/* <div className="px-2 mt-3">
                                            <img src={feature.image} alt="" className="img-fluid mt-2" />
                                        </div> */}
                                    </Card.Body>
                                </Card>
                            </Col>

                        );
                    })}
                    <Col lg={12} className="text-center">
                        {/* <div className="img-content position-relative"> */}
                            <div className="img-up">
                                <img src={pipeline} alt="app-img" className="img-fluid text-center" data-aos="zoom-in-right" />
                            </div>
                        {/* </div> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features2;

