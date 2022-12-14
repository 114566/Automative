import { Col, Container, Row, Badge } from 'react-bootstrap';
import CountUp from 'react-countup';

const Stats = () => {
    return (
        <section className="section pt-8 pb-6 bg-gradient7 position-relative" data-aos="fade-up">
            <div className="top d-none d-sm-block"></div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <Badge pill bg="primary" className="text-white px-2 py-1">
                            Stats
                        </Badge>
                        <h1 className="display-5 text-white fw-medium">Prompt In Numbers</h1>
                        <p className="text-muted mx-auto"></p>
                    </Col>
                </Row>

                <Row className="mt-5 text-center">
                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-white fw-normal">
                            <CountUp duration={2} start={10} end={50} prefix="$" suffix="M+" />
                        </div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Value transacted</p>
                        <p className='text-white-50'>in overall sell/buy transactions</p>
                    </Col>

                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-white fw-normal">2.1M+</div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Transactions Processed</p>
                        <p className='text-white-50'>across 10+ countries</p>
                    </Col>

                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-white fw-normal">2M+</div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Satisfied Processed</p>
                        <p className='text-white-50'>across 100+ locations</p>
                    </Col>

                    <Col xs={6} md={3} className="mb-4 mb-sm-0">
                        <div className="display-4 text-white fw-normal">4.5</div>
                        <p className="mt-2 mb-0 text-white fw-semibold">Star App Rating</p>
                        <p className='text-white-50'>on google play & apple store</p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Stats;
