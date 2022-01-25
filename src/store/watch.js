import moment from 'moment-timezone'
import { TIMEZONE_DEFAULT } from 'configs/site'
const initState = {
    menuItemData: [
        "Like的發問",
        "Like的回答",
        "Like的文章",
        "Like的留言"
    ],
    pageCode: '',
    menu: [],
    timezone: '',
    timezone_num: 0
};
const SET_TIME_MOMENT = (state = initState, payload) =>{
    state.timezone = TIMEZONE_DEFAULT
    moment.tz.setDefault(TIMEZONE_DEFAULT)
    state.timezone_num = Number(moment().format('ZZ').slice(0, -2))
}

const SET_PAGE_CODE = (state = initState, payload) =>{
    // console.log(state)
    // console.log(payload)
}

const itemReducer = (state = initState, action) => {
    SET_TIME_MOMENT()
    SET_PAGE_CODE()
    // console.log(state)

    
    switch (action.type) {
        case 'ADD_ITEM': {
            const menuItemCopy = state.menuItemData.slice();
            return { menuItemData: [action.payload.itemNew].concat(menuItemCopy) };
        }

        case 'SET_TIME_MOMENT': {
            // console.log(123)
            // console.log(moment.tz.setDefault(state.timezone))
            // console.log(moment())
            // moment.tz.setDefault(state.timezone)
            return state;
        }
        default:
            return state;
        }
};

export {itemReducer};