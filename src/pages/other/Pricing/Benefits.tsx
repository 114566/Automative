import { Badge, Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// types
import { Benefit } from '../Career/career';

type BenefitsProps = {
    benefits: Benefit[];
};

const Benefits = ({ benefits }: BenefitsProps) => {
    return (
        <section className="pt-5 pb-7 bg-gradient8 career-service position-relative">
            <Container>
                <Row data-aos="fade-up">
                    <Col className="text-center">
                        <Badge pill bg="primary" className="text-white px-2 py-1">
                            Vorteile
                        </Badge>
                        <h1 className="display-5 text-white fw-semibold">Unsere Pläne beinhalten folgende Vorteile</h1>
                        <p className="text-muted mx-auto">Profitieren auch Sie davon.</p>
                    </Col>
                </Row>
                <Row>
                    {(benefits || []).map((benefit, index) => {
                        return (
                            <Col
                                lg={6}
                                key={index.toString()}
                                data-aos="fade-up"
                                data-aos-duration={(index + (3 + index)) * 100}
                            >
                                <div className="d-flex align-items-top pe-sm-5 mt-lg-5 mt-4">
                                    <span className="bg-soft-primary avatar avatar-md rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                        <FeatherIcon icon={benefit.icon} className="icon-dual-primary text-white" />
                                    </span>
                                    <div className="flex-grow-1">
                                        <h5 className="mt-0 text-white">{benefit.title}</h5>
                                        <p className="text-muted text-white-50 mb-0">{benefit.description}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Benefits;
