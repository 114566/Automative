import { Col, Container, Row } from 'react-bootstrap';

const About = () => {
    return (
        <section className="position-relative pt-8 pb-4">
            <Container>
                <Row data-aos="fade-up">
                    <Col lg={4}>
                        <span className="border border-top w-25 border-soft-primary d-block"></span>
                        <h1 className="display-5 fw-semibold mt-4">Über uns</h1>
                    </Col>
                    <Col lg={4}>
                        <p className="text-muted mb-4">
                            Die <span className="text-primary fw-bold">automait GmbH</span> macht es sich seit 2019 zur Aufgabe, die datengetriebe Arbeit von Unter- nehmen zu automatisieren. <br/>
                            {/* Dadurch werden im Unternehmen Ressourcen frei, die nun effizienter genutzt werden können.
                            Kosten können eingespart werden und die Arbeitszeit des Teams, kann effizienter eingeplant werden. */}
                            Die Idee zur automait Pipeline enstand 2018, aus der wiederkehrenden Arbeit an Projektgeschäften, in denen sich die Arbeitsabläufe wiederholten und größtenteils manuell erfolgten.
                            Das beanspruchte viel Zeit und verursachte unnötig hohe Kosten.
                            
                        </p>
                    </Col>
                    <Col lg={4}>
                        <p className="text-muted mb-4">

                            Dies sollte sich ändern. Das Ziel war es möglichst viele Arbeitsschritte durch KI zu automatisieren.
                            Ursprünglich geplant als open-source-Bibliothek, bietet die <span className="text-primary fw-bold">automait</span> jetzt eine Pipeline, die Data Science automatisiert 
                            und allen Unternehmen den Anschluss an die KI-Revolution ermöglicht.
                            Heute unterstützen wir Unternehmen aus den unterschiedlichsten Branchen. 
                        </p>
                    </Col>
                    <Col lg={{ span: 8, offset: 4 }}>
                        <p className="text-muted">
                            Wir begleiten unsere Kunden durch den gesamten Prozess und begegnen Ihnen mit Beratung auf Augenhöhe.
                            Sei es die Frage wie Sie KI erfolgreich in Ihrem Unternehmen nutzen können oder das identifizieren von sinnvollen Use Cases.
                            So werden Initiativen preiswerter und zuverlässiger.
                        </p>
                    </Col>
                    <Col lg={{ span: 8, offset: 4 }}>
                        <p className="text-muted">
                            Gerne unterstützen wir Sie bei der <span className="text-primary fw-bold">Implementierung</span> von KI-Projekten 
                            und bieten Ihnen <span className="text-primary fw-bold">Schulungen</span>, sowie <span className="text-primary fw-bold">Consulting</span> zum Thema KI an.  
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default About;
