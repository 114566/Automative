// components
import Navbar1 from '../../../components/navbars/Navbar1';
import BackToTop from '../../../components/BackToTop';
// import Footer1 from '../../../components/footer/Footer1';

import Hero from './Hero';
import Footer from './Footer';
import ContactUs from './ContactUs';

const Contact = () => {
    return (
        <>
            <div>
                <Navbar1
                    hideSearch
                    fixedWidth
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                />

                <Hero />
            </div>

            {/* contact us */}
            <ContactUs />

            {/* footer */}
            <Footer />

            <BackToTop />
        </>
    );
};

export default Contact;
