import Image from "next/image"
import { Col, Container, Row } from "reactstrap"
import { about } from '../data'


function Features() {
    return (
        <>
            <div className="features bg-light section__spacing">
                {
                    about.map((feature, index) => (
                        <section className={`single__feature`} key={index}>
                            <Container>
                                <Row className={`justify-content-center align-items-center ${(index+1) % 2 == 0 ? 'row-reverse' : ''}`}>
                                    <Col md='6'>
                                        <h3 className="feature">{feature.title}</h3>
                                        <p className="description">{feature.text}</p>
                                    </Col>

                                    <Col md='6'>
                                        <Image src={feature.image} height='100%' width="100%" layout="responsive" objectFit="contain" />
                                    </Col>
                                </Row>
                            </Container>
                        </section>
                    ))
                }

                {/* Quick 5-minute resume maker that is 100% customized to your experience, without any hassles or unnecessary tasks.

                    Instantly share it on popular sites to get noticed by potential employers.

                    Zero cost, zero commitment.

                    —

                    No more mountains of paperwork.

                    Start your job search in 5 minutes or less.

                    Leverage the latest technology to give you an edge against other job seekers. */}
            </div>
        </>
    )
}

export default Features