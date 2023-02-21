import { useEffect, useState } from "react";
import HistoryService from "../services/HistoryService";

export function useHistory() {
    const [history, sethistory] = useState();

    const GetFullHistory = (token) => {
        HistoryService.AllHistoryByUser(token)
        .then(({data}) => {
            sethistory(data)
        })
    }
    return {
        history: history, GetFullHistory
    }                             
}