import React, { useState } from "react";
import "./dashboard.css"
import {AiFillCheckCircle} from "react-icons/ai"
import {RiQuestionAnswerFill} from "react-icons/ri"
import {MdCancel, MdSend} from "react-icons/md"


const IncidenceComponent = (props) => {
    const [viewAnswer, SetView] = useState(false)
    const [idAnswer, SetId] = useState()
    const [answer, SetAnswer] = useState()
    const formAnswer = {
        "answer": answer,
        "state": "1"
    }
    return (
        <div className="m-5">
            <h3 className="text-center text-primary"><u>INCIDENCES</u></h3><p></p>
            <table className="table table-striped p-3 table-bordered table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th className="inc">Id_Incidence</th>
                            <th className="user">User</th>
                            <th className="descr">Description</th>
                            <th className="ans">Answer</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
            </table>
            <div class="tbl-header">
                <table className="table table-striped p-3 table-bordered table-hover">
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
                                    data.state != 1 ?
                                <td>
                                    {
                                        viewAnswer && idAnswer == data.id ?
                                        <RiQuestionAnswerFill onClick={() => [SetView(false), SetId(data.id)]} style={{ fontSize: "30px" }} />:
                                        <RiQuestionAnswerFill onClick={() => [SetView(true), SetId(data.id)]} style={{ fontSize: "30px" }} className="text-primary"/>
                                    }
                                    <MdSend style={{ fontSize: "30px" }} className="text-primary"/>
                                    <MdCancel onClick={() => SetView(false)} style={{ fontSize: "30px" }} className="text-danger"/>
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
        </div>
    )
}

export default IncidenceComponent;