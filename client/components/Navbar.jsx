import LandingPage from "../layouts/LandingPage"
import { Container } from 'reactstrap';
import Link from 'next/link'
import { useEffect, useState } from "react";

function Navbar() {
    const [navBarFixed, setNavbarFixed] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setNavbarFixed(true)
            }
            else {
                setNavbarFixed(false)
            }
        })
    }, [])
    return (
        <>
            <div className={`main__nav py-3 ${navBarFixed ? 'fixed' : ''}`}>
                <Container>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="brand">
                            <h4>Resume Builder</h4>
                        </div>
                        <Link href='/resume'>
                            <a className="get__started__btn">
                                Get Started
                            </a>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Navbar