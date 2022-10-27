// components
import Navbar1 from '../../../components/navbars/Navbar1';
import Hero7 from '../../../components/heros/Hero7';
import BackToTop from '../../../components/BackToTop';
import Footer1 from '../../../components/footer/Footer1';

import Coins from './Coins';
import Features from './Features';
import Integration from './Integration';
import Stats from './Stats';
import Blog from './Blog';

// dummy data
import { coins, features } from './data';

const Crypto = () => {
    return (
        <>
            <div className="header-1">
                <Navbar1
                    navClass="navbar-light zindex-10"
                    buttonClass="btn-charcoal btn-sm"
                    hideSearch
                    fixedWidth
                />
                <Hero7 />
            </div>

            {/* coins */}
            <Coins coins={coins} />

            {/* features */}
            <Features features={features} />

            {/* integration */}
            <Integration />

            {/* stats */}
            <Stats />

            {/* blog */}
            <Blog />

            {/* footer */}
            <Footer1 />

            <BackToTop />
        </>
    );
};

export default Crypto;
