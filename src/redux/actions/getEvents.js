import axios from "axios";
import initEvents from './initEvents';

export default function getEvents() {
    return function (dispatch, getState) {
        axios.get('/api/events')
        .then(({data}) => {
            dispatch(initEvents(data.events))
        })
    }
}