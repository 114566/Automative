import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';

// component
import marketing_2 from '../../../../assets/images/features/marketing_2.png';

// types
import { WorkImages } from './portfolio_projekt2';

type ContentProps = {
    workImages: WorkImages[];
};

const Content = ({ workImages }: ContentProps) => {
    return (
        <section className="light-gray-bg position-relative">
            <Container>
                <Row>
                    {/* <Col lg={12}> */}
                        {/* <figure className="figure"> */}
                            {/* <img
                                src="https://source.unsplash.com/GXNo-OJynTQ/1920x720"
                                alt="contentImage"
                                className="figure-img img-fluid rounded"
                            /> */}
{/* 
                            <figcaption className="figure-caption text-center"> */}
                                {/* The image caption referencing the above image */}
                            {/* </figcaption> */}
                        {/* </figure> */}
                    {/* </Col> */}
                </Row>

                {/* description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>
                        <div className="ps-4">
                            <h3>Über den Kunden</h3>
                            <p>
                                Der Kunde stammt aus der Functional-Food Branche und handelt mit beliebten Fitness-Snacks auf dem internationalen Markt.
                                Das Marketing hat sich im laufe der Jahre gewandelt.
                                Viele Unternehmen arbeiten mit Werbebotschaftern aus den sozialen Medien (Influencer), die vorallem junges Publikum anziehen 
                                und Ihnen Ihre neusten Konsumerfahrungen nahe bringen.
                                Unser Kunde benötigte ein Werkzeug mit dem er Influencer-Marketing erfolgreich in seine Kampagnenplanung integrieren kann, um die Wirkung des Streumarketings messbar zu machen und sie nach Möglichkeit auszuweiten.
                            </p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="ps-4">
                            <h3>Projektbeschreiung</h3>
                            <p>
                                Das Ziel dieses Projekts war die Auswertung und das Controlling von Streumarketing über Social Media.
                                Wir haben die Kommunikationsnetze samt erzielter Reaktionen nicht nur messbar, sondern auch sichtbar gemacht.
                                Dazu wurden die Kommentare und Beiträge die durch das Influencer-Marketing entstanden sind automatisch analysiert und inhaltlich gemessen.
                                Darauf folgte eine automatische Zuordnung in ein Vertriebsframework und die Visualisierung der Influencer-Reichweite.
                                <span className="text-primary fw-bold"> automait</span> erzielte eine Genauigkeit von <span className="text-primary fw-bold">89% (F1)</span>.
                            </p>
                        </div>
                    </Col>
                </Row>

                {/* image */}
                <Row className="mt-5">
                    {/* <Col lg={12}>
                        <Gallery />
                    </Col> */}
                </Row>

                <Col lg={12}>
                    <div className="img-content position-relative">
                        <div className="img-up">
                            <img src={marketing_2} alt="" className="img-fluid d-block" />
                        </div>
                    </div>
                </Col>

                {/* work description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>
                        <h3>Pipeline</h3>

                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Semantische Analyse aller Kommentare und Beiträge
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Eigenständige Zuordnung in ein Vertriebsframework
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Visualisierung der Influencer-Reichweite mittels Dashboard
                        </p>
                        {/* <p>
                            Somit gelingt eine Integration des relativen jungen Kanals in herkömmliche Kampagnen.
                        </p> */}

                        {/* <Row className="mt-5">
                            {(workImages || []).map((workImage, index) => {
                                return (
                                    <Col lg={4} key={index.toString()}>
                                        <div className="d-flex align-items-center mb-2 mb-xl-0">
                                            <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-sm text-primary me-4 flex-shrink-0">
                                                <FeatherIcon icon={workImage.icon} className="icon-dual-primary" />
                                            </span>
                                            <div className="flex-grow-1">
                                                <h5 className="my-0">{workImage.title}</h5>
                                            </div>
                                        </div>
                                    </Col>
                                );
                            })}
                        </Row> */}

                        {/* <p className="mt-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit officia neque beatae at
                            inventore excepturi numquam sint commodi alias, quam consequuntur corporis ex, distinctio
                            eaque sapiente pariatur iure ad necessitatibus in quod obcaecati natus consequatur. Sed
                            dicta maiores, eos culpa.
                        </p> */}

                        {/* <h5 className="mt-5">Verwendete Technologien</h5>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Sketch & Illustrator
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Raact JS
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Django - A Web Framework in Python
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            PostgreSQL - Relational Database System
                        </p> */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Content;
