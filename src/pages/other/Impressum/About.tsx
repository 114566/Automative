import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section className="position-relative pt-8 pb-4">
            <Container>
                <Row data-aos="fade-up">
                    <Col lg={4}>
                        <p className="fw-semibold">Anschrift
                        <p className="text-muted">
                            automait GmbH <br/>
                            Jagdfeld 65 <br/>
                            42929 Wermelskirchen <br/>
                        </p>
                        </p>
                        <p className="fw-semibold">Kontakt
                        <p className="text-muted mb-4">
                            E-Mail: info@automait.ai<br/>
                            Telefon: +49 2196 8987071 <br/>
                        </p>
                        </p>
                        <p className="fw-semibold">
                            Geschäftsführung
                        <p className="text-muted">
                            Lukas Leuschen
                        </p>
                        </p>
                        <p className="fw-semibold">
                            Registergericht
                        <p className="text-muted">
                            Registergericht Köln
                        </p>
                        </p>
                        <p className="fw-semibold">
                            Handelsregisternummer
                        <p className="text-muted">
                            HRB 98263 
                        </p>
                        </p>
                        <p className="fw-semibold">
                            Umsatzsteuer-Identifikationsnummer <br/>
                            gemäß § 27 a Umsatzsteuergesetz
                        <p className="text-muted">
                            DE 325368171
                        </p>
                        </p>
                    </Col>
                    <Col lg={8}>
                    <p className="fw-semibold">
                           Haftungsausschluss
                    </p>
                        <p className="fw-semibold">
                           für externe Links
                        <p className="text-muted">
                            Unsere Webseite enthält Verlinkungen zu externen Webseiten Dritter. <br/>
                            Auf die Inhalte der externen Webseiten haben wir keinen Einfluss und übernehmen keine Haftung, für die Inhalte oder Nutzung der Verlinkungen, der externen Webseiten. <br/>
                            Sollten uns Rechtsverletzungen auf den verlinkten externen Webseiten bekannt werden, werden wir die betroffenen Verlinkungen unverzüglich entfernen.
                        </p>
                        </p>
                        <p className="fw-semibold">
                           Inhalte
                        <p className="text-muted">
                            Unsere Webseite wurde mit größter Sorgfalt erstellt und überprüft. Wir bemühen uns den Inhalt dieser Webseite frei von Fehlern zu halten. 
                            Dennoch kann das Auftreten von Fehlern nicht ausgeschlossen werden. Deshalb übernehmen wir keine Haftung für die Fehlerfreiheit der Webseiteninhalte oder -funktionen. <br/>
                            Wir schließen jede Haftung für Schäden, egal ob indirekte oder direkte Schäden, die durch die Nutzung unserer Webseite entstanden sind aus.
                            Sofern diese nicht auf Vorsatz oder grober Fahrlässigkeit beruhen.
                        </p>
                        </p>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default About;
