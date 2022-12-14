import { Badge, Col, Container, Row } from 'react-bootstrap';

// types
import { TeamMember } from './company';

type TeamProps = {
    teamMembers: TeamMember[];
};

const Team = ({ teamMembers }: TeamProps) => {
    return (
        <section className="pb-5 pt-6 medium-gray-bg position-relative" data-aos="fade-up">
            <Container>
                <Row className="justify-content-center">
                    <Col className="text-center">
                        <Badge pill bg="" className="badge-soft-info px-2 py-1">
                            Unser Team
                        </Badge>
                        <h1 className="display-5 fw-medium"></h1>
                        <p className="text-muted mx-auto">
                            Unser Ziel? <span className="text-primary fw-bold">Gemeinam</span> Lösungen für Ihr Unternehmen zu finden.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    {(teamMembers || []).map((teamMember, index) => {
                        return (
                            <Col lg={4} md={6} key={index.toString()}>
                                <div className="d-flex align-items-center mb-4 pb-md-3">
                                    <img
                                        src={teamMember.avatar}
                                        alt="avatar"
                                        className="img-fluid avatar-md d-block rounded me-3"
                                    />
                                    <div className="flex-grow-1">
                                        <h5 className="mt-0 mb-1 fw-medium">{teamMember.name}</h5>
                                        <p className="text-muted fw-medium mb-0">{teamMember.designation}</p>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Team;
