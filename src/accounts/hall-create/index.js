
// ---- global ----
import React from 'react';
import "asset/share.css";
import moment from 'moment'
import { 
    Form,
    Input,
    Button,
    DatePicker,
    Space,
    Cascader,
    message,
} from 'antd';

// ---- component ----
import MainPage from 'component/mainpage';

// ---- site ----
import { STATUS_OPTION } from 'configs/site'

// ---- services ----
import AccountService from 'services/AccountService'

const dateFormat = 'YYYY-MM-DD'||undefined;
const verifyList = [
    { value: 'account', text: '帳號' },
    { value: 'password', text: '密碼' },
    { value: 'name', text: '名稱' },
    { value: 'status', text: '狀態' },
]

// const reducer = function(state, action){
//     switch(action.type){
//         case "SWITCH":
//             return !state;
//         default:
//             throw new Error("Unknown action");
//     }
// }

// const MenuPage = () =>{
//     // const [isOpen, isOpenDispatch] = useReducer(reducer,true);

//     // const menuItemData = useSelector(state => state.menuItemData);
//     const dispatch = useDispatch();

//     return (
//         <button onClick={()=>{
//             dispatch({
//                 type: "SET_TIME_MOMENT",
//                 // payload: {itemNew:"測試資料"}
//             }); 
//         }}>更改第一個menuItem</button>
//     );
// }


export default class HALL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetehForm: {
                account: '',
                password: '',
                name: '',
                status: '',
                startTime: '',
            },
        }
    }

    handleChange = (event) => {
        this.setState(state => ({
            fetehForm: {
                ...state.fetehForm,
                [event.target.name]: event.target.value
            }
        }))
    };

    handlePickerChange=(date, dateString) => {
        this.setState(state => ({
            fetehForm: {
                ...state.fetehForm,
                startTime: dateString,
            }
        }))
    }

    handleStatusChange = (data) => {
        this.setState(state => ({
            fetehForm: {
                ...state.fetehForm,
                status: data
            }
        }))
    };
    submit = async (event) => {
        // 驗證
        for (const [key, val] of Object.entries(this.state.fetehForm)) {
            if (['', null, undefined].includes(val)) {
                const target = verifyList.filter(node => node.value === key)
                if(!['', null, undefined].includes(target[0])) return message.error(`${target[0].text}不能是空的`)
            }
        }
        await AccountService.createAccount()
            .then(res => {
                if (res) {
                    this.init()
                    return message.success('新增成功');
                }
            })
            .catch(err => {
            })
    }

    init = (event) => {
        this.setState(state => ({
            fetehForm: {
                account: '',
                password: '',
                name: '',
                status: '',
                startTime: '',
            },
        }));
    }

    render() {
        
        
        return (
            <div>
                <MainPage title={'新增帳號'} />
                <div className='block'>
                    <Form
                        name="basic"
                        labelCol={{ span: 1.5 }}
                        wrapperCol={{ span: 12 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="帳號"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.fetehForm.account} 
                                name="account" 
                                onChange={this.handleChange}
                                placeholder="請輸入帳號"
                            />
                        </Form.Item>
                        <Form.Item
                            label="密碼"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.fetehForm.password}
                                name="password"
                                onChange={this.handleChange}
                                placeholder="請輸入密碼"
                            />
                        </Form.Item>
                        <Form.Item
                            label="名稱"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.fetehForm.name}
                                name="name"
                                onChange={this.handleChange}
                                placeholder="請輸入名稱"
                            />
                        </Form.Item>
                        <Form.Item
                            label="狀態"
                            className ='block-padding'
                        >
                            <Cascader 
                                options={STATUS_OPTION} 
                                onChange={this.handleStatusChange}
                                value={this.state.fetehForm.status}
                                placeholder="請輸入狀態"
                            />
                        </Form.Item>
                        <Form.Item
                            label="生日"
                            className ='block-padding'
                        >
                            <Space direction="vertical" size={12}>
                                <DatePicker 
                                    onChange={this.handlePickerChange} 
                                    value={['', null, undefined].includes(this.state.fetehForm.startTime) ? null : moment(this.state.fetehForm.startTime, dateFormat)}
                                    format={dateFormat}
                                    placeholder={['開始時間']}
                                />
                            </Space>
                        </Form.Item>
                        <Form.Item className ='block-padding'>
                            <Button type="primary" onClick={this.submit}>提交</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
