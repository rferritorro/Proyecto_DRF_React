import React, { useState } from "react";
import "./dashboard.css"
import { useIncidence } from "../../hooks/useIncidence";
import {AiFillCheckCircle} from "react-icons/ai"
import {RiQuestionAnswerFill} from "react-icons/ri"
import {MdCancel, MdSend} from "react-icons/md"


const IncidenceComponent = (props) => {
    console.log(props)
    const [viewAnswer, SetView] = useState(false)
    const [idAnswer, SetId] = useState()
    const [answer, SetAnswer] = useState()
    const [state, SetState] = useState()
    const {putAnswer} = useIncidence()
    const formAnswer = {
        "answer": answer,
        "state": state ? state : 1
    }
    const submit = (id) => {
        putAnswer(formAnswer, id)
    }
    return (
        <div className="m-5">
            <h3 className="text-center text-primary"><u>INCIDENCES</u></h3><p></p>
            <table className="table table-striped p-3 table-bordered table-hover table-responsive tbl-header">
                    <thead className="thead-dark">
                        <tr>
                            <th className="inc">Id_Incidence</th>
                            <th className="user">User</th>
                            <th className="descr">Description</th>
                            <th className="ans">Answer</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.incidence?.map((data, index) => (
                            <tr>
                                <td className="inc">{data.id}</td>
                                <td className="user">{data.user_id.username}</td>
                                <td className="descr">{data.description}</td>
                                <td className="ans">
                                    {
                                        viewAnswer &&  idAnswer == data.id && data.state != 1 ?
                                        <textarea rows="5" cols="30" defaultValue={data.answer} onKeyUp={event => SetAnswer(event.target.value)}/>:
                                        <div>
                                            {data.answer}
                                        </div>
                                    }
                                </td>
                                {
                                    data.state != 1  ?
                                <td>
                                    {
                                        viewAnswer && idAnswer == data.id ?
                                        <RiQuestionAnswerFill onClick={() => [SetView(false), SetId(data.id)]} style={{ fontSize: "60px" }} className="btn btn-click"/>:
                                        <RiQuestionAnswerFill onClick={() => [SetView(true), SetId(data.id)]} style={{ fontSize: "60px" }} className="btn btn-click text-primary"/>
                                    }
                                    <MdSend onClick={() => submit(data.id)} style={{ fontSize: "60px" }} className="btn btn-click text-primary"/>
                                    <MdCancel onClick={() => props.deleteIncidence(data.id)} style={{ fontSize: "60px" }} className="btn btn-click text-danger"/>
                                </td>:
                                <td>
                                    <AiFillCheckCircle style={{ fontSize: "30px" }} className="text-success"/>
                                </td>
                                }
                                
                            </tr>
                        ))}
                    </tbody>

            </table>
            
        </div>
    )
}

export default IncidenceComponent;