import { useState } from "react"
import { Button, Col, Form, FormFeedback, FormGroup, FormText, Input, Label, Row } from "reactstrap"
import { useRecoilState } from 'recoil'
import { firstNameState, lastNameState, middleNameState, currentPageState } from '../atom/atom'
import AnimatedPage from "./AnimatedPage"

function StepOne({ nextStep, prevStep }) {
    // const [currentPage, setCurrentPage] = useRecoilState(currentPageState)
    const [firstName, setfirstName] = useRecoilState(firstNameState)
    const [lastName, setlastName] = useRecoilState(lastNameState)
    const [middleName, setmiddleName] = useRecoilState(middleNameState)

    const [firstNameNotValid, setFirstNameNotValid] = useState(false)
    const [lastNameNotValid, setLastNameNotValid] = useState(true)

    const isAllValid = () => {
        /* Check for all conditions */
    }

    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Personal Information</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <Form>
                    <Row>
                        <Col md='4'>
                            <FormGroup>
                                <Label for="firstName">
                                    FirstName
                                </Label>
                                <Input id="firstName" value={firstName} onChange={(e) => setfirstName(e.target.value)} invalid={firstNameNotValid} />
                                <FormFeedback>
                                    FirstName is required
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md='4'>
                            <FormGroup>
                                <Label for="firstName">
                                    LastName
                                </Label>
                                <Input id="firstName" value={lastName} onChange={(e) => setlastName(e.target.value)} invalid={lastNameNotValid} />
                                <FormFeedback>
                                    Last Name is required
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md='4'>
                            <FormGroup>
                                <Label for="firstName">
                                    MiddleName
                                </Label>
                                <Input id="firstName" value={middleName} onChange={(e) => setmiddleName(e.target.value)} invalid={lastNameNotValid} />
                                <FormFeedback>
                                    Middle Name is required
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <FormGroup>
                                <Label for='email'>Email</Label>
                                <Input id="email" value='' />
                                <FormFeedback>
                                    Email is required
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                        <Col md='6'>
                            <FormGroup>
                                <Label for='email'>Phone Number</Label>
                                <Input id="tel" value='' />
                                <FormFeedback>
                                    Phone Number is required
                                </FormFeedback>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
                <div className="btn__wrapper">
                    <div className="text-end">
                        <Button className="next__btn" onClick={nextStep}>Next</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepOne