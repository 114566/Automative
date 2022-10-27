import { Col, Container, Row } from 'react-bootstrap';

// component
import PricingCards1 from '../../../components/pricing/PricingCards1';

// types
import { PlanItem } from '../../../components/pricing/pricing';

type PricingProps = {
    plans: PlanItem[];
};

const Pricing = ({ plans }: PricingProps) => {
    return (
        <section className="section pb-4 bg-gradient8 pb-sm-6 pt-6 position-relative">
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1 className="display-5 text-white fw-medium">Pricing</h1>
                        <p className="text-muted text-white-50 mx-auto">
                            Pricing that <span className="text-primary fw-bold">works</span> for everyone.
                        </p>

                        <PricingCards1 plans={plans} containerClass="align-items-center mt-0 mt-sm-5" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Pricing;
