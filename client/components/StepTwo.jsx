import { useState } from "react"
import { Button, Col, Form, FormFeedback, FormGroup, Input, Label, Row } from "reactstrap"
import AnimatedPage from "./AnimatedPage"
import { useRecoilState } from 'recoil'
import { educationList } from '../atom/atom'

function StepTwo({ nextStep, prevStep }) {
    const [educations, setEducations] = useRecoilState(educationList)
    const [study, setStudy] = useState('')
    const [institution, setInstitution] = useState('')
    const [course, setCourse] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [present, setPresent] = useState('')

    const addNewEducation = () => {
        setEducations((educations) => [...educations, { study, institution, course, startDate, endDate: present === '' ? endDate : present }]);

        /* Set fields to empty */
        setStudy('')
        setInstitution('')
        setCourse('')
        setStartDate('')
        setEndDate('')
        setPresent('')
    }

    const removeElement = (index) => {
        setEducations((educations) => educations.filter((_, i) => i !== index))
    }

    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Education</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
                <div className="education__wraper">
                    <Row>
                        {
                            educations.map((education, index) => {
                                return (
                                    <Col md='4' key={index}>
                                        <h4>Education {index + 1}</h4>
                                        <div>Study: {education.study}</div>
                                        <div>Institution: {education.institution}</div>
                                        <div>Course: {education.course}</div>
                                        <div>Start Date: {education.startDate}</div>
                                        <div>End Date: {education.endDate}</div>
                                        <div><button onClick={() => removeElement(index)}>Delete</button></div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Form >
                        <div className="single__education border-b">
                            <Row>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Study Program</Label>
                                        <Input placeholder="B.Tech" value={study} onChange={(e) => setStudy(e.target.value)} />
                                        <FormFeedback>
                                            Field cannot be empty
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Institution</Label>
                                        <Input placeholder="Institution" value={institution} onChange={(e) => setInstitution(e.target.value)} />
                                        <FormFeedback>
                                            Field cannot be empty
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md='4'>
                                    <FormGroup>
                                        <Label>Course</Label>
                                        <Input placeholder="Computer Science" value={course} onChange={(e) => setCourse(e.target.value)} />
                                        <FormFeedback>
                                            Field cannot be empty
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label>Start Date</Label>
                                        <Input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                                        <FormFeedback>
                                            Field cannot be empty
                                        </FormFeedback>
                                    </FormGroup>
                                </Col>
                                <Col md='6'>
                                    <FormGroup>
                                        <Label>End Date</Label>
                                        <Input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                                        <FormFeedback>
                                            Field cannot be empty
                                        </FormFeedback>
                                    </FormGroup>
                                    <FormGroup
                                        check
                                        inline
                                    >
                                        <Input type="checkbox" onChange={(e) => { e.target.checked ? setPresent('Present') : setPresent('') }} />
                                        <Label check>
                                            Present
                                        </Label>
                                    </FormGroup>
                                </Col>
                            </Row>
                        </div>
                        <Button onClick={addNewEducation}>Add Education</Button>
                    </Form>
                </div>

                <div className="btn__wrapper">
                    <div className="d-flex justify-content-between">
                        <Button className="next__btn" onClick={prevStep}>Prev</Button>
                        <Button className="next__btn" onClick={nextStep}>Next</Button>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    )
}

export default StepTwo