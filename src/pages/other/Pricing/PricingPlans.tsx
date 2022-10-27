import { Badge, Col, Container, Row } from 'react-bootstrap';

// components
import PricingCards1 from '../../../components/pricing/PricingCards1';

// types
import { PlanItem } from '../../../components/pricing/pricing';

type PricingPlansProps = {
    plans: PlanItem[];
};

const PricingPlans = ({ plans }: PricingPlansProps) => {
    return (
        <section className="section py-6 medium-gray-bg position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-primary px-2 py-1">
                            Unsere Angebote
                        </Badge>
                        <h1 className="display-5 fw-semibold">Pakete und Preise</h1>
                        <p className="text-muted mx-auto">
                            Mit den <span className="text-primary fw-bold">automait</span> Preis-Paketen können Sie flexibel bleiben.
                            Gerne können Sie von einem Basic-Paket, auf ein anderes Preis-Paket wechseln. Entdecken Sie unsere Angebote.
                        </p>
                    </Col>
                </Row>
                <PricingCards1 plans={plans} containerClass="align-items-center mt-0 mt-sm-5" />
                <Row>
                    <Col className="text-center mt-0 mt-sm-5">
                        <h1 className="display-5 fw-semibold">Sie benötigen zusätzliche <span className="highlight highlight-success d-inline-block">personalisierte</span>{' '}Funktionen?</h1>
                        <p className="text-muted mx-auto">
                            Setzen Sie sich mit unserem technischen Support in Verbindung und sprechen Sie <span className="text-primary fw-bold">persönlich</span> mit unserem Entwickler-Team.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default PricingPlans;
