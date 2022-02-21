import moment from 'moment-timezone'
import { TIMEZONE_DEFAULT, LANGUAGE_DEFAULT } from 'configs/site'
const initState = {
    timezone: '',
    timezone_num: 0,
    LANGUAGE: '',
}
const SET_TIME_MOMENT = (state = initState, payload) =>{
    state.timezone = TIMEZONE_DEFAULT
    moment.tz.setDefault(TIMEZONE_DEFAULT)
    state.timezone_num = Number(moment().format('ZZ').slice(0, -2))
    if (!localStorage.getItem('timezone') || !localStorage.getItem('timezone_num')) {
        localStorage.setItem('timezone', state.timezone)
        localStorage.setItem('timezone_num', state.timezone_num)
    }
}

const SET_LANGUAGE = (state = initState, payload) =>{
    state.LANGUAGE = LANGUAGE_DEFAULT
    if (!localStorage.getItem('LANGUAGE')) {
        localStorage.setItem('LANGUAGE', state.LANGUAGE )
    }
}


SET_TIME_MOMENT();
SET_LANGUAGE();

const itemReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_TIME_MOMENT': {
            SET_TIME_MOMENT()
            return state;
        }
        default:
            return state;
        }
};

export {itemReducer};