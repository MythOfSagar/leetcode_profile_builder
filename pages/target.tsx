import React, { useState } from 'react'
import { utcDate } from '@hamroctopus/utc-date'

type easyTargetProps = {
    startDate: number,
    endDate: number,
    target:number,
    period: string
}

const Target = () => {
    const easyInitialData:easyTargetProps = {
        startDate: Date.now(),
        endDate: Date.now(),
        target: 0,
        period: "0"
    }

    const [easyTarget , setEasyTarget] = useState(easyInitialData)

    const handleEasy = (e: any) => {
        e.preventDefault()
       
    }

    const handleChange=(e:any)=>{
console.log(e.target.value)
    }

    return (
        <>
            <div className="setTarget">
                <div id='EasyTarget'>
                    <div style={{ display: 'flex' }}>
                        <h3 onClick={() => { if (easyTarget.target > 0) { setEasyTarget({...easyTarget,target:easyTarget.target -1}) } }}>-</h3>
                        <h3>{easyTarget.target}</h3>
                        <h3 onClick={() => setEasyTarget({...easyTarget,target:easyTarget.target +1})}>+</h3>
                    </div>
                    <form id="easyProblem" onSubmit={handleEasy}>
                        <select name="" id="">
                            <option >Set for a Day</option>
                            <option value="">Set for a Week</option>
                        </select>
                        <br />
                        <input type="date" name="" id="" value={easyTarget.startDate} onChange={handleChange}/>
                        <br />
                        <input type="date" name="" id="" value={easyTarget.endDate} onChange={handleChange}/>
                        <br />

                        <input type="submit" value="Set" />

                    </form>
                </div>
                <form id="mediumProblem">
                    <input type="date" name="" id="" />
                    <input type="date" name="" id="" />
                </form>
                <form id="hardProblem">
                    <input type="date" name="" id="" />
                    <input type="date" name="" id="" />
                </form>
            </div>
        </>
    )
}

export default Target