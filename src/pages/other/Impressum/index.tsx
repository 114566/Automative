// component
import Navbar1 from '../../../components/navbars/Navbar1';
import BackToTop from '../../../components/BackToTop';

import About from './About';
import Hero9 from './Hero9';
// import Feature from './Feature';
import Footer from './Footer';


const Impressum = () => {
    return (
        <>
            {/* header and hero */}
            <div>
                <Navbar1
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-outline-secondary btn-sm"
                    hideSearch
                    fixedWidth
                />
                <Hero9 />
            </div>

            {/* about */}
            <About />


            {/* footer */}
            <Footer />

            <BackToTop variant="info" />
        </>
    );
};

export default Impressum;
