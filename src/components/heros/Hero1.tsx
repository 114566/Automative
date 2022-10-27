import { Container, Row, Col } from 'react-bootstrap';
// import FeatherIcon from 'feather-icons-react';

// swiper
// import { Autoplay } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

// images
import logo from '../../assets/images/logo.svg';

// dummy data
// import { slides } from './data';

// const SwiperSlider = () => {
//     const swiperConfig = {
//         breakpoints: {
//             576: {
//                 slidesPerView: 1.2,
//             },
//             768: {
//                 slidesPerView: 1,
//             },
//         },
//         roundLengths: true,
//         slidesPerView: 1,
//         loop: true,
//         spaceBetween: 0,
//         autoplay: {
//             delay: 5000,
//         },
//     };

//     return (
//         <Swiper
//             // install Swiper modules
//             modules={[Autoplay]}
//             {...swiperConfig}
//         >
//             {(slides || []).map((slide, index) => {
//                 return (
//                     <SwiperSlide key={index.toString()}>
//                         <div className="swiper-slide-content shadow bg-white rounded-sm p-3 quote">
//                             <div className="d-flex text-start">
//                                 <img
//                                     src={slide.avatar}
//                                     alt=""
//                                     className="img-fluid avatar-sm rounded-circle align-self-center me-3"
//                                 />
//                                 <div className="fs-14 text-muted">
//                                     {slide.description}
//                                     <p className="mb-0">
//                                         <span className="ms-0">
//                                             <FeatherIcon
//                                                 icon="star"
//                                                 className="me-1 icon icon-xxs icon-fill-warning text-warning"
//                                             />
//                                             <FeatherIcon
//                                                 icon="star"
//                                                 className="me-1 icon icon-xxs icon-fill-warning text-warning"
//                                             />
//                                             <FeatherIcon
//                                                 icon="star"
//                                                 className="me-1 icon icon-xxs icon-fill-warning text-warning"
//                                             />
//                                             <FeatherIcon
//                                                 icon="star"
//                                                 className="me-1 icon icon-xxs icon-fill-warning text-warning"
//                                             />
//                                             <FeatherIcon
//                                                 icon="star"
//                                                 className="me-1 icon icon-xxs icon-fill-warning text-warning"
//                                             />
//                                         </span>
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </SwiperSlide>
//                 );
//             })}
//         </Swiper>
//     );
// };

const Hero1 = () => {
    return (
        <section className="position-relative bg-gradient9 hero-14 pt-7 pt-sm-6 pb-5">
            <Container className="hero-container">
                <Row className="text-center text-md-start">
                    <Col lg={6} className="pt-2 pt-sm-3">
                        <h1 className="hero-title">
                            Verwandeln Sie Ihre Daten in <span className="highlight highlight-success d-inline-block">Erkenntnisse,</span>{' '}
                            die Ihr Geschäft beschleunigen.
                        </h1>
                        <p className="mt-3 fs-17 text-muted">
                            Generieren Sie aus Ihren vorhandenen Daten und unserer automatisierten Pipeline vertrauenswürdige KI-Anwendungen.
                        </p>

                        {/* <div className="pt-3 pt-sm-5 d-flex align-items-center action-buttons">
                            <a href="#section-download" className="btn btn-primary" data-bs-toggle="smooth-scroll">
                                Download
                            </a>

                            <div className="ms-3">
                                <Link className="text-primary d-flex align-items-center" to="#">
                                    <Button className="btn-soft-primary btn-rounded-circle btn-icon me-2 shadow-none">
                                        <FeatherIcon
                                            className="icon-xxs icon-dual-primary align-self-center"
                                            icon="play"
                                        />
                                    </Button>
                                    <span className="fw-semibold">Watch Video</span>
                                </Link>
                            </div>
                        </div> */}
                    </Col>
                    <Col lg={{ offset: 2, span: 4 }} className="text-end">
                        <div className="position-relative">
                            <div className="hero-img mt-4 mt-sm-0">
                                <img src={logo} alt="" className="img-fluid" data-bs-aos="zoom-in-up" />
                            </div>
                            {/* <div className="slider">
                                <SwiperSlider />
                            </div> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero1;
