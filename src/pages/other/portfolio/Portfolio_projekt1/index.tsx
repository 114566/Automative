// component
import Navbar1 from '../../../../components/navbars/Navbar1';
// import Footer1 from '../../../../components/footer/Footer1';

import Hero from './Hero';
import Content from './Content';
// import Testimonial from './Testimonials';
import Footer from './Footer';

// dummy data
import { workImages } from './data';
import Navigation from './Navigation';

const Portfolio_projekt1 = () => {
    return (
        <>
            {/* header */}
            <div>
                <Navbar1 navClass="navbar-light" fixedWidth hideSearch buttonClass="btn-outline-secondary btn-sm" />
                <Hero />
            </div>

            {/* content */}
            <Content workImages={workImages} />

            {/* testimonial */}
            {/* <Testimonial /> */}

            {/* navigation */}
            <Navigation />

            {/* footer */}
            <Footer />
        </>
    );
};

export default Portfolio_projekt1;
