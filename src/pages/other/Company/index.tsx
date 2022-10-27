// component
import Navbar1 from '../../../components/navbars/Navbar1';
import Hero9 from '../../../components/heros/Hero9';
import BackToTop from '../../../components/BackToTop';
// import Footer1 from '../../../components/footer/Footer1';

import About from './About';
import Feature from './Feature';
import Counter from './Counter';
import Footer from './Footer';

const Company = () => {
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

            {/* feature */}
            <Feature />

            {/* counter */}
            <Counter />

            {/* Team */}
            {/* <Team teamMembers={teamMembers} /> */}

            {/* client */}
            {/* <Client /> */}

            {/* footer */}
            <Footer />

            <BackToTop variant="info" />
        </>
    );
};

export default Company;
