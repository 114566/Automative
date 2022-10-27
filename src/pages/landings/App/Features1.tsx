import { Col, Container, Row, Badge } from 'react-bootstrap';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

// types
import { Feature } from './app';
import vorteile from '../../../assets/images/features/vorteile.png';

type FeaturesProps = {
    features: Feature[];
};

const Features1 = ({ features }: FeaturesProps) => {
    return (
        <section className="position-relative light-gray-bg overflow-hidden features-1 py-5">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Vorteile
                        </Badge>
                        <h1 className="display-5 fw-semibold">Wir machen KI für jedes Unternehmen verfügbar.</h1>
                        <p className="text-muted mx-auto">
                            Arbeiten Sie mit <span className="text-primary fw-bold">automait</span>, damit auch Sie
                            von KI-Vorteilen profitieren können.
                        </p>
                    </Col>
                </Row>
                <Row className="align-items-center mt-0 mt-sm-5">
                    <Col lg={5}>
                        <div className="img-content position-relative">
                            <div className="img-up">
                                <img src={vorteile} alt="app-img" className="img-fluid d-block" />
                            </div>
                        </div>
                    </Col>

                    <Col lg={7}>
                        <Row className="mt-5 mt-lg-0 ps-4 ps-sm-5">
                            {(features || []).map((feature, index) => {
                                return (
                                    <Col md={6} key={index.toString()}>
                                        <span
                                            className={classNames(
                                                'bg-soft-' + feature.variant,
                                                'avatar',
                                                'avatar-sm',
                                                'rounded-lg',
                                                'icon',
                                                'icon-with-bg',
                                                'icon-xs',
                                                'text-' + feature.variant
                                            )}
                                        >
                                            <FeatherIcon
                                                icon={feature.icon}
                                                className={classNames('icon-dual-' + feature.variant)}
                                            />
                                        </span>
                                        <h4 className="mt-3 mb-2 fw-semibold">{feature.title}</h4>
                                        <p className="mb-4 pb-3 text-muted">{feature.description}</p>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Features1;
