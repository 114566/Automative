import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// imgaes
import CardImg from '../../assets/images/photos/2.jpg';
import avatar7 from '../../assets/images/avatars/img-7.jpg';

const BlogPost2 = () => {
    return (
        <Card className="card-listing-item">
            <div className="card-img-top-overlay">
                <div className="overlay"></div>
                <span className="card-badge top-right bg-primary text-white">Travel</span>

                <Card.Img src={CardImg} alt="Card Image" variant="top" />

                <div className="card-overlay-bottom">
                    <Link to="#" className="shadow-lg">
                        <img
                            src={avatar7}
                            alt="avatar"
                            className="img-fluid avatar-xs rounded-circle avatar-border me-1"
                        />
                        <h6 className="d-inline text-white">Emily Blunt</h6>
                    </Link>
                </div>
            </div>
            <Card.Body>
                <div>
                    <h4>
                        <Link to="#" className="card-title-link">
                            Top 10 must visit best beaches of Goa
                        </Link>
                    </h4>
                    <p className="text-muted mb-2">
                        Goa and its beaches do not need an introduction! The state is well known for its spectacular
                        beaches and it is very difficult... <Link to="#">read more</Link>
                    </p>
                </div>
                <div className="pt-3">
                    <Row className="align-items-center">
                        <Col>
                            <p className="mb-0">
                                <FeatherIcon icon="calendar" className="icon icon-dual icon-xs me-1" />
                                <Link to="#" className="fs-14 align-middle">
                                    11 March, 2020
                                </Link>
                            </p>
                        </Col>
                        <Col className="text-end">
                            <p className="mb-0">
                                <FeatherIcon icon="tag" className="icon icon-dual icon-xs me-1" />
                                <Link to="#" className="fs-14 align-middle">
                                    #travel-diary
                                </Link>
                            </p>
                        </Col>
                    </Row>
                </div>
            </Card.Body>
        </Card>
    );
};

export default BlogPost2;
