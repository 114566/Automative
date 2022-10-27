import { Col, Container, Row } from 'react-bootstrap';
import FeatherIcon from 'feather-icons-react';
import finanz from '../../../../assets/images/features/finanz.png';
// types
import { WorkImages } from './portfolio_projekt1';

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

                            {/* <figcaption className="figure-caption text-center"> */}
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
                                Der Kunde stammt aus der Finanzbranche und agiert auf dem gesamten europäischen Finanzmarkt. Da sich Preise und Geldwerte durch Marktentwicklungen 
                                oder politische Ereignisse kontinuierlich verändern 
                                und dadurch große Datenmengen entstehen, lassen sich diese Veränderungen manuell nur sehr aufwendig analysieren und visualisieren.
                                Sie benötigten ein Werkzeug, um ihr Fachpersonal mit relevanten Echtzeitinfos zu versorgen, die auf potenzielle Risiken in der Finanzbranche hinweisen.
                                Dadurch sollte gewährleistet werden, dass die Wahrnehmung aktueller Geschehnisse gestärkt wird und wenn nötig sofort reagiert werden kann.
                            </p>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="ps-4">
                            <h3>Projektbeschreibung</h3>
                            <p>
                                Ziel dieses Projektes war es, aus verschiedenen Nachrichtenkanälen, relevante Echtzeitinformationen zu extrahieren 
                                und sie über ein implementiertes Dashboard an das Fachpersonal zu übermitteln.
                                Dazu wurden internationale Nachrichten in verschiedenen Sprachen und aus über 100 Quellen ausgewertet, um Entwicklungen zu finden, die etwaige Risiken darstellen können.
                                Nach der automatischen Extraktion und Klassifizierung der relevanten Daten, erfolgte ebenso die Bearbeiter-Zuweisung und die Übermittlung der Daten mittels individueller Dashboards, an verschiedene behördliche Experten.
                                <span className="text-primary fw-bold"> automait</span> wurde mit rund 7.500 Beispielen trainiert und liefert eine Genauigkeit von <span className="text-primary fw-bold">91% (F1)</span>.
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
                            <img src={finanz} alt="" className="img-fluid d-block" />
                        </div>
                    </div>
                </Col>

                {/* work description */}
                <Row className="mt-5" data-aos="fade-up" data-aos-duration="300">
                    <Col lg={12}>
                        <h3>Pipeline</h3>

                        <p className="mt-2">
                        <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Semantische Analyse und Klassifizierung der Nachrichten
                        </p>
                        <p className="mt-2">
                        <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Eigenständige Entscheidung der jeweiligen Relevanz  und der Bearbeiter-Zuweisung
                        </p>
                        <p className="mt-2">
                        <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Verteilung an unterschiedliche behördliche Experten, mittels individueller Dashboards
                        </p>

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

                        {/* <h5 className="mt-5">Verwendete Technologien</h5>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            Python
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            nr. 2
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            nr.3
                        </p>
                        <p className="mb-2">
                            <FeatherIcon icon="minus" className="icon-xs icon me-2" />
                            nr. 4
                        </p> */}
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Content;
