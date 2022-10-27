import { Badge, Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

const Counter = () => {
    return (
        <section className="pt-4 pb-6 bg-gradient7 position-relative" data-aos="fade-up">
            <div className="top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="primary" className="text-white px-2 py-1">
                            Statistik
                        </Badge>
                        <h1 className="display-5 text-white fw-medium">automait in Zahlen</h1>
                    </Col>
                </Row>
                <Row className="mt-5 text-center">
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-primary  fw-normal">
                            <CountUp duration={5} start={10} end={100} suffix="%" />
                        </div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Leidenschaft</p>
                        <p className='text-white-50'>Für unsere Arbeit und Projekte</p>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 text-primary mb-sm-0">
                        <div className="display-4  fw-normal">
                            <CountUp duration={5} start={10} end={65} suffix="+" />
                        </div>
                        <p className="mt-2 mb-0 text-white fw-semibold">KI-Anwedungsfälle</p>
                        <p className='text-white-50'>Aus der Pipeline generiert</p>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-primary fw-normal">
                            <CountUp duration={5} start={3} end={6} suffix="+" />
                        </div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Branchen</p>
                        <p className='text-white-50'>Vertrauen bereits auf automait</p>
                    </Col>
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-primary fw-normal">
                            <CountUp duration={5} start={10} end={100} suffix="%" />
                        </div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Teamgeist</p>
                        <p className='text-white-50'>Gemeinsam mehr erreichen</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Counter;
