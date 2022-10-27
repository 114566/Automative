import { Button, Col, Container, Row } from 'react-bootstrap';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';
import { Link } from 'react-router-dom';

// images
// import coworking from '../../assets/images/hero/coworking2.jpg';
import automait from '../../assets/images/features/automait.png';

const Hero9 = () => {
    return (
        <section className="position-relative hero-9 ">
            <div className="position-relative bg-gradient9 hero-14 pt-7 pt-sm-6 pb-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12} className="text-center">
                            <h1 className="hero-title">
                                Wir{' '}
                                <span className="highlight highlight-success d-inline-block">automatisieren</span> Data Science.
                            </h1>
                            <p className="fs-17 text-muted">
                              Sie möchten zuverlässige Erkenntnisse aus Ihren Daten gewinnen und Ihr Geschäft beschleunigen?
                              Dann entdecken Sie, wie <span className="text-primary fw-bold">automait</span> Sie dabei unterstützen kann.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="position-relative">
                <div className="hero-cta">
                <Link to="/kontakt" className="hero-cta">
                    <Button variant="primary" className="btn-cta">
                                   kostenlos informieren
                    </Button>
                    </Link>
                </div>
            </div>
            <div className="hero-bottom">
                <ParallaxProvider>
                    <ParallaxBanner
                        layers={[{ image:automait, speed: 0, style: { backgroundSize: 'cover'} }]}
                        className="hero-image bg-gradient9"
                    ></ParallaxBanner>
                </ParallaxProvider>
            </div>
        </section>
    );
};

export default Hero9;

// um die spiegelung des bildes aufzuheben
// , backgroundRepeat: 'no-repeat'