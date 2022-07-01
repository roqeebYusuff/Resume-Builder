import Link from "next/link"
import { Container } from "reactstrap"


function Hero() {
    return (
        <>
            <div className="hero__section d-flex align-items-center justify-content-center text-center">
                <Container>
                    <h4>Resume Builder</h4>
                    <h5>Build your portfolio in less than five minutes</h5>
                    <Link href='/resume'>
                        <a className="hero__btn">
                            Get Started
                        </a>
                    </Link>
                </Container>
            </div>
        </>
    )
}

export default Hero