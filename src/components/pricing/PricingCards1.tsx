import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames';

// types
import { PlanItem } from './pricing';

type PricingCardProps = {
    plans: Array<PlanItem>;
    containerClass?: string;
    hasAnimation?: boolean;
};

const PricingCards1 = ({ plans, containerClass, hasAnimation }: PricingCardProps) => {
    return (
        <Row className="mt-5">
            {(plans || []).map((plan, index) => {
                return (
                    <Col lg={4} key={index.toString()}>
                        <Card
                            className="border position-relative hoverable overflow-hidden"
                            {...(hasAnimation && {
                                'data-aos': 'fade-up',
                                'data-aos-duration': (index + (7 + index)) * 100,
                            })}
                        >
                            <Card.Body className="text-center">
                                {plan.isPopular && (
                                    <span className="ribbon2 bg-primary text-white shadow">Beliebt</span>
                                )}

                                <h4 className="my-0 text-primary">{plan.name}</h4>
                                {/* <h1 className="mb-0">
                                    <span className="fw-normal text-muted fs-13 align-top">€</span>
                                    <span className="fw-normal text-muted fs-13 align-middle">ab </span>
                                    <span className="fw-bolder display-5">{plan.price}</span>
                                    <span className="fw-normal text-muted fs-13 align-middle">{plan.duration}</span>
                                </h1> */}
                                <Row className="mt-3">
                                
                                {/* <ul className="d-flex align-items-center mb-4 pb-md-3"> */}
                                    {plan.features.map((feature, index) => {
                                        return (
                                            
                                            <li className="d-flex align-items-center mb-4 pb-md-3" key={index.toString()}>
                                                {feature && (
                                                    <>
                                                        <FeatherIcon
                                                            icon="check"
                                                            className="icon-xs text-success align-middle me-2"
                                                        />
                                                        {feature}
                                                    </>
                                                )}
                                            </li>
                                            
                                        );
                                    })}
                                {/* </ul> */}
                                
                                </Row>
                                <Link
                                    to="/kontakt"
                                    className={classNames("btn btn-primary"
                                        // 'btn',
                                        // plan.isRecommended ? 'btn-primary' : 'btn-soft-primary',
                                        // 'd-block'
                                    )}
                                >
                                    Holen Sie sich jetzt Ihr persönliches Angebot.
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                 
                );
            })}
                {/* <Row className="mt-0">
                <p className="text-muted mx-auto">
                    *Unsere Preise sind als Nettopreise angegeben. zzgl. zu diesem Preis muss die Mehrwertsteuer entrichtet werden.
                </p>
                </Row> */}
        </Row>
    );
};

export default PricingCards1;
