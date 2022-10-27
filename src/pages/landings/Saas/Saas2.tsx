// components
import Navbar3 from '../../../components/navbars/Navbar3';
import Hero11 from '../../../components/heros/Hero11';
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

const Saas2 = () => {
    return (
        <>
            <div>
                <Navbar3 navClass="navbar-light" isSticky={false} fixedWidth buttonClass="btn-primary btn-sm" />
                <Hero11 />
            </div>

            {/* features */}
            <Features1 features={features} containerClass="position-relative overflow-hidden py-4 pb-lg-7 light-gray-bg" />

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

export default Saas2;
