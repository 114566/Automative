import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

// images
import img1 from '../../../assets/images/photos/12.jpg';
import img2 from '../../../assets/images/photos/14.jpg';
import img3 from '../../../assets/images/photos/15.jpg';

const Hero = () => {
    return (
        <section className="hero-4 pb-5 pt-7 py-sm-7">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} md={6}>
                        <h1 className="hero-title mt-0">
                            Let's work <span className="highlight highlight-success d-inline-block">together</span>.
                            Join Prompt!
                        </h1>
                        <p className="fs-16 text-muted pt-3 w-75">
                            We're always open for new creative, analytical and technical minds to join our team. Search
                            for the suitable job.
                        </p>
                        <div className="pt-4 pb-md-5 mb-md-4">
                            <Link to="#job-openings" className="btn btn-secondary mb-2" data-toggle="smooth-scroll">
                                View All Openings
                                <FeatherIcon className="icon-xxs ms-2" icon="arrow-right" />
                            </Link>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="img-container text-end ps-lg-5" data-aos="zoom-in">
                            <Row className="align-items-center mt-md-0 mt-4">
                                <Col xs={6}>
                                    <Card className="shadow-lg">
                                        <Card.Body className="p-1">
                                            <img src={img1} className="img-fluid" alt="" />
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col xs={6}>
                                    <Row>
                                        <Col>
                                            <Card className="shadow-lg">
                                                <Card.Body className="p-1">
                                                    <img src={img2} className="img-fluid" alt="" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card className="shadow-lg">
                                                <Card.Body className="p-1 mb-0">
                                                    <img src={img3} className="img-fluid" alt="" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;
