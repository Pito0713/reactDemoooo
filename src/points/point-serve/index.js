
// ---- global ----
import React from 'react';
import "asset/share.css";
import { 
    Form,
    Input,
    Button,
    DatePicker,
    Space,
    message,
    Cascader,
} from 'antd';
import moment from 'moment'
// ---- component ----
import MainPage from 'component/mainpage';
import pointService from 'services/pointService'

// ---- site ----
import { POINTSERVE_OPTION } from 'configs/site'
const dateFormat = 'YYYY-MM-DD HH:mm'||undefined;
const { TextArea } = Input;
export default class POINT extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetehForm: {
                account: '',
            },
            resultData: {},
            disabledList: {
                account: true,
                amount: true,
                createRange: true,
            },
            submitData: {
                account: '',
                updatePoint: '',
                updateReason: '',
                updateRemark: '',
            }
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.submitData.updatePoint !== this.state.submitData.updatePoint) { 
            const rule = new RegExp(/^(\d*)(\.\d{0,2})?$/)
            const isOnlyNumber = rule.test(this.state.submitData.updatePoint)
            if (!isOnlyNumber) {
                if (!['', null, undefined].includes(this.state.submitData.updatePoint)) {
                    this.setState(state => ({
                        submitData: {
                            ...state.submitData,
                            updatePoint: prevState.submitData.updatePoint
                        }
                    }))
                    return message.error(`只能輸入數字與小數點後兩位`)
                }
            }
            if (!['', null, undefined].includes(this.state.submitData.updatePoint)) {
                if (this.state.submitData.updatePoint > this.state.resultData.data[0].amount) return message.error(`不能大於錢包`)
            }
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

    handleSubmitDataChange = (event) => {
        this.setState(state => ({
            submitData: {
                ...state.submitData,
                [event.target.name]: event.target.value
            }
        }))
    }

    handleOptionsChange = (event) => {
        this.setState(state => ({
            submitData: {
                ...state.submitData,
                updateReason: event
            }
        }))
    };

    submit = async () => {
        if (['', null, undefined].includes(this.state.fetehForm.account)) return message.error(`帳號不能是空的`)
        let submitData = {
            account: this.state.fetehForm.account,
        }
        await pointService.getPointServeData(submitData)
            .then(res => {
                if (res.data.length > 0) {
                    for (let i=0; i < res.data.length; i++) {
                        res.data[i].createRange = moment(res.data[i].createRange).format(dateFormat)
                    }
                    this.setState(state => ({
                        ...state,
                        resultData: res,
                    }));
                } else {
                    return message.error(`沒有此帳號`)
                }
            })
            .catch(err => {
            })
    }
    upadate = async () => {
        if (['', null, undefined].includes(this.state.submitData.updatePoint)) return message.error(`調整點數不能是空的`)
        if (['', null, undefined].includes(this.state.submitData.updateReason)) return message.error(`調整原因不能是空的`)

        await pointService.updatePoint()
            .then(res => {
                if (res) {
                    this.init()
                    return message.success('調整成功');
                }
            })
            .catch(err => {
            })
    }

    init = () => {
        this.setState(()=> ({
            fetehForm: {
                account: '',
            },
            resultData: {},
            submitData: {
                account: '',
                updatePoint: '',
                updateReason: '',
                updateRemark: '',
            }
        }));
    }


    render() {
        let Formtest = null
        if (['', null, undefined].includes(this.state.resultData.data)) {
            Formtest = 
                <div className='block'>
                    <Form
                        name="basic"
                        labelCol={{ span: 6 }}
                        wrapperCol= {{ span: 20 }}
                        initialValues={{ remember: true }}
                        layout='inline'
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
                        <Form.Item className ='block-padding'>
                            <Button type="primary" onClick={this.submit}>搜尋</Button>
                        </Form.Item>
                    </Form>
                </div>
        } else {
            Formtest = 
                <div className='block'>
                    <Form
                        name="basic"
                        labelCol={{ span: 2 }}
                        wrapperCol= {{ span: 5 }}
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            label="帳號"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.resultData.data[0].account} 
                                name="account"
                                placeholder="請輸入帳號"
                                disabled={this.state.disabledList.account}
                            />
                        </Form.Item>
                        <Form.Item
                            label="錢包"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.resultData.data[0].amount} 
                                name="account" 
                                placeholder="請輸入帳號"
                                disabled={this.state.disabledList.amount}
                            />
                        </Form.Item>
                        <Form.Item
                            label="創建日期"
                            rules={[{ message: 'Please input your username!' }]}
                            className ='block-padding'
                        >
                            <Space direction="vertical" size={12}>
                                <DatePicker 
                                    value={['', null, undefined].includes(this.state.resultData.data[0].createRange) ? null : moment(this.state.resultData.data[0].createRange, dateFormat)}
                                    format={dateFormat}
                                    placeholder={['開始時間']}
                                    disabled={this.state.disabledList.createRange}
                                />
                            </Space>
                        </Form.Item>
                        <Form.Item
                            label="調整點數"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.submitData.updatePoint} 
                                name="updatePoint"
                                onChange={this.handleSubmitDataChange}
                                placeholder="請輸入點數"
                            />
                        </Form.Item>
                        <Form.Item
                            label="調整原因"
                            className ='block-padding'
                        >
                            <Cascader 
                                options={POINTSERVE_OPTION} 
                                value={['', null, undefined].includes(this.state.submitData.updateReason) ? null : [this.state.submitData.updateReason]}
                                onChange={this.handleOptionsChange}
                                placeholder="請輸入原因"
                            />
                        </Form.Item>
                        <Form.Item
                            label="調整備註"
                            className ='block-padding'
                        >
                            <TextArea 
                                value={this.state.submitData.updateRemark} 
                                name="updateRemark"
                                onChange={this.handleSubmitDataChange}
                                placeholder="請輸入備註"
                                showCount
                                maxLength={100}
                            />
                        </Form.Item>
                        <Form.Item className ='block-padding'>
                            <Button type="primary" onClick={this.upadate}>更新</Button>
                        </Form.Item>
                    </Form>
                </div>
        }
        return (
            <div>
                <MainPage title={'點數服務'} />
                {Formtest}
            </div>
        );
    }
}
