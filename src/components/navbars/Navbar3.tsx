import { useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
// components
import Menu from './Menu';

// images
import { ReactComponent as Logo } from '../../assets/images/logo4.svg';

type Navbar3Props = {
    isSticky?: boolean;
    navClass?: string;
    buttonClass?: string;
    fixedWidth?: boolean;
};

const Navbar3 = ({ isSticky, navClass, buttonClass, fixedWidth }: Navbar3Props) => {
     // on scroll add navbar class and back to top button
    useEffect(() => {
        const btnTop = document.getElementById('btn-back-to-top');
        const navbar = document.getElementById('sticky');
        window.addEventListener('scroll', (e) => {
            e.preventDefault();
            if (btnTop) {
                if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
                    btnTop.classList.add('show');
                } else {
                    btnTop.classList.remove('show');
                }
            }
            if (navbar) {
                if (document.body.scrollTop >= 240 || document.documentElement.scrollTop >= 240) {
                    navbar.classList.add('navbar-sticky');
                } else {
                    navbar.classList.remove('navbar-sticky');
                }
            }
        });
    }, []);

    return (
        <header>
            <Navbar
                id={isSticky ? 'sticky' : ''}
                collapseOnSelect
                expand="lg"
                className={classNames('topnav-menu', navClass)}
            >
                <Container fluid={!fixedWidth}>
                    <Navbar.Brand href="/">
                        <Logo width={"102"} className="d-inline-block align-top" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Menu navClass="mx-auto" buttonClass={buttonClass ? buttonClass : 'btn-primary'} />
                        {/* <Nav as="ul" className="align-items-lg-center">
                            {loggedInUser ? (
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/auth/logout"
                                        className="btn btn-sm me-2 fw-medium fs-15 shadow-none text-dark"
                                    >
                                        Logout
                                    </NavLink>
                                </Nav.Item>
                            ) : (
                                <Nav.Item as="li">
                                    <NavLink
                                        to="/auth/login"
                                        className="btn btn-sm me-2 fw-medium fs-15 shadow-none text-dark"
                                    >
                                        Log In
                                    </NavLink>
                                </Nav.Item>
                            )}
                            <Nav.Item as="li">
                                <Link
                                    to="#"
                                    className={classNames('btn', buttonClass ? buttonClass : 'btn-soft-primary')}
                                >
                                    Download
                                </Link>
                            </Nav.Item>
                        </Nav> */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Navbar3;
