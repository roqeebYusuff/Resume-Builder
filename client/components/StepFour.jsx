import React from 'react'
import { Button } from 'reactstrap'
import AnimatedPage from './AnimatedPage'

const StepFour = ({ nextStep, prevStep }) => {
    return (
        <AnimatedPage>
            <div className="text-center section__title">
                <h4 className="title">Projects</h4>
                <p className="subtitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem illum ratione sequi, facilis possimus, eveniet consequatur ad iure id tempora ex aliquid repudiandae accusantium iusto laudantium nemo esse, placeat quidem!</p>
            </div>
            <div className="content">
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

export default StepFour