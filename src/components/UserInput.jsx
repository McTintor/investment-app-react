import { useState } from "react"

export default function UserInput({ handleChange, userInput }) {

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input value={userInput.initialInvestment} type="number" required onChange={(event) => handleChange('initialInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input value={userInput.annualInvestment} type="number" required onChange={(event) => handleChange('annualInvestment', event.target.value)}/>
                </p>
                <p>
                    <label>Expected Return</label>
                    <input value={userInput.expectedReturn} type="number" required onChange={(event) => handleChange('expectedReturn', event.target.value)}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input value={userInput.duration} type="number" required onChange={(event) => handleChange('duration', event.target.value)}/>
                </p>
            </div>
        </section>
    )
}