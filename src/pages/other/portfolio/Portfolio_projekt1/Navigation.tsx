import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <section className="light-gray-bg position-relative pb-6">
            <Container>
                {/* <Row className="border-top border-bottom py-4 align-items-center"> */}
                    {/* <Col md={4} sm={6} className="text-md-start text-center">
                        <OverlayTrigger placement="top" overlay={AwesomePopover}>
                            <Button variant="white">
                                <FeatherIcon icon="arrow-left" className="icon icon-xs me-2" />
                                Awesome Saas App
                            </Button>
                        </OverlayTrigger>
                    </Col> */}
                    {/* <Col md={3} className="btn btn-primary"> */}
                        <Link to="/projektkatalog" className="btn btn-primary mt-6">
                        {/* <FeatherIcon  className="icon-xxs me-2 text-center" /> */}
                            zurück zur Übersicht
                        </Link>
                    {/* </Col> */}
                    {/* <Col md={4} sm={6} className="text-md-end">
                        <OverlayTrigger placement="top" overlay={DesktopPopover}>
                            <Button variant="white">
                                Desktop App
                                <FeatherIcon icon="arrow-right" className="icon icon-xs ms-2" />
                            </Button>
                        </OverlayTrigger>
                    </Col> */}
                {/* </Row> */}
            </Container>
        </section>
    );
};

export default Navigation;
