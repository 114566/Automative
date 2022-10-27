import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FeatherIcon from 'feather-icons-react';
import info from '../../../assets/images/features/info.png';

// components
import { FormInput } from '../../../components/form';

const ContactUs = () => {
    // form validation schema
    const schemaResolver = yupResolver(
        yup.object().shape({
            fname: yup.string().required('Bitte geben Sie Ihren Vornamen ein'),
            lname: yup.string().required('Bitte geben Sie Ihren Nachnamen ein'),
            email: yup.string().required('Bitte geben Sie Ihre E-Mail-Adresse ein').email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
            message: yup.string().required('Bitte geben Sie eine Nachricht ein.'),
        })
    );

    // form method
    const methods = useForm({ resolver: schemaResolver });
    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    // handle form submission
    const onSubmit = () => {};

    return (
        <section className="section pb-lg-7 py-4 position-relative">
            <Container>
                <Row className="align-items-center mt-0 mt-sm-5">
                    <Col lg={6}>
                        <Card className="shadow-none">
                            <Card.Body className="p-xl-5 p-0">
                                <h2 className="mb-2 mt-0 fw-medium">Lassen Sie uns in Kontakt bleiben.</h2>
                                <p className="mb-5">
                                    Bitte füllen Sie das folgende Formular aus und wir werden uns in Kürze bei Ihnen melden.
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Row>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="fname"
                                                label="Vorname"
                                                placeholder="Ihr Vorname"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col md={6}>
                                            <FormInput
                                                type="text"
                                                name="lname"
                                                label="Nachname"
                                                placeholder="Ihr Nachname"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="email"
                                                name="email"
                                                label="E-Mail-Adresse"
                                                placeholder="Ihre E-Mail-Adresse"
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg={12}>
                                            <FormInput
                                                type="textarea"
                                                name="message"
                                                label="Nachricht"
                                                placeholder="Geben Sie Ihre Nachricht ein..."
                                                rows={5}
                                                containerClass={'mb-3'}
                                                register={register}
                                                errors={errors}
                                                control={control}
                                            />
                                        </Col>
                                        <Col lg="auto" className="mb-0">
                                            <Button type="submit">
                                                Senden
                                                <span className="icon icon-xs text-white ms-1">
                                                    <FeatherIcon icon="send" />
                                                </span>
                                            </Button>
                                        </Col>
                                    </Row>
                                </form>
                            </Card.Body>
                        </Card>
                    </Col>
                    

                    
                    <Col lg={6}>
                        <div className="img-content position-relative mt-4 mt-lg-0">
                            <div className="img-up mb-lg-0 mb-4">
                                <img src={info} alt="feature" className="img-fluid d-block" data-aos="zoom-in-left" />
                            </div>
                        </div>
                    </Col>
                </Row>
                
                <Row className="mt-5 align-items-center">
                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-primary avatar avatar-sm rounded icon icon-with-bg icon-xs text-primary me-3 flex-shrink-0">
                                <FeatherIcon icon="mail" className="icon-dual-primary" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">E-Mail</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    info@automait.ai
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-orange avatar avatar-sm rounded icon icon-with-bg icon-xs text-orange me-3 flex-shrink-0">
                                <FeatherIcon icon="phone-call" className="icon-dual-orange" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Telefon</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    +49 2196 8987071
                                </Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="d-flex px-md-1 px-lg-5 mb-md-0 mb-3">
                            <span className="bg-soft-info avatar avatar-sm rounded icon icon-with-bg icon-xs text-info me-3 flex-shrink-0">
                                <FeatherIcon icon="map-pin" className="icon-dual-info" />
                            </span>
                            <div className="flex-grow-1">
                                <h5 className="m-0 fw-medium">Anschrift</h5>
                                <Link to="#" className="text-muted fw-normal h5 my-1">
                                    Konrad-Zuse-Ring 2
                                    Mönchengladbach
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default ContactUs;
