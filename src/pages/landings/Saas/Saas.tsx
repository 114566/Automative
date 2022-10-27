// components
import Navbar1 from '../../../components/navbars/Navbar1';
import Hero12 from '../../../components/heros/Hero12';
import BackToTop from '../../../components/BackToTop';
import Footer1 from '../../../components/footer/Footer1';

import Features1 from './Features1';
import Features2 from './Features2';
import Features3 from './Features3';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Pricing from './Pricing';
import FAQs from './FAQs';

// dummy data
import { features, plans } from './data';

const Saas = () => {
    return (
        <>
            <div className="primary">
                <Navbar1
                    navClass="navbar-light zindex-10"
                    isSticky={false}
                    fixedWidth
                    hideSearch
                    buttonClass="btn-primary btn-sm"
                />
                <Hero12 />
            </div>

            {/* features */}
            <Features1 features={features} containerClass="position-relative overflow-hidden pt-lg-6 py-4 light-gray-bg pb-lg-7" />

            <Features2 />

            <Features3 />

            {/* clients */}
            <Clients />

            {/* testimonials */}
            <Testimonials />

            {/* pricing */}
            <Pricing plans={plans} />

            {/* FAQs */}
            <FAQs />

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Saas;
