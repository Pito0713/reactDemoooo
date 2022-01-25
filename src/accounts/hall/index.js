// ---- global ----
import React from 'react';
import "asset/share.css";
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { 
    Form,
    Input,
    Button,
    DatePicker,
    Space,
    Table,
    Cascader,
} from 'antd';

// ---- component ----
import MainPage from 'component/mainpage';

// ---- services ----
import AccountService from 'services/AccountService'

// ---- site ----
import { STATUS_OPTION } from 'configs/site'

const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD HH:mm'||undefined;
const columnsData = [
    {
        title: '帳號',
        dataIndex: 'account',
        key: 'account',
        width: 200,
    },
    {
        title: '名稱',
        dataIndex: 'name',
        key: 'name',
        width: 200
    },
    {
        title: '錢錢',
        dataIndex: 'amount',
        key: 'amount',
        width: 200
    },
    {
        title: 'IP',
        dataIndex: 'ip',
        key: 'ip',
        width: 200
    },
    {
        title: '狀態',
        dataIndex: 'status',
        key: 'status',
        width: 300
    },
    {
        title: '創建時間',
        dataIndex: 'createRange',
        key: 'createRange',
        width: 500
    },
]

const GoCreate = () => {
    const navigate = useNavigate();
    const goCreateIN = () => {
        navigate("../accounts/hall-create", { replace: false });
    }

    return( 
        <Button className ='block-padding' type="primary" onClick={goCreateIN}>新增</Button>
    );
}

export default class HALL extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetehForm: {
                account: '',
                name: '',
                dateRange: '',
                status: '',
                startTime:undefined,
                endTime:undefined,
            },
            resultData: {},
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
                startTime: dateString[0],
                endTime: dateString[1],  
            }
        }))
    }

    handleStatusChange = (event) => {
        this.setState(state => ({
            fetehForm: {
                ...state.fetehForm,
                status: event
            }
        }))
    };

    statusFormatter = (row, column, cellValue) => {
        let result = '错误'
        const target = STATUS_OPTION.find(item => item.value === cellValue)
        if (target.value !== undefined) result = target.label
        return result
    }

    submit = async (event) => { 
        await AccountService.getAccountlist(this.state.fetehForm)
            .then(res => {
                for (let i=0; i < res.data.length; i++) {
                    res.data[i].createRange = moment(res.data[i].createRange).format(dateFormat)
                    res.data[i].status = this.statusFormatter(null, null, res.data[i].status)
                }
                this.setState(state => ({
                    ...state,
                    resultData: res,
                }));
            })
            .catch(err => {
            })
    }
    clear = (event) => {
        this.setState(state => ({
            fetehForm: {
                account: '',
                name: '',
                dateRange: '',
                startTime:undefined,
                endTime:undefined,
            },
            resultData: {},
        }));
    }

    render() {
        return (
            <div>
                <MainPage title={'會員帳號'} />
                <div className='block'>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 40 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
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
                        <Form.Item
                            label="名稱"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.fetehForm.name} 
                                name="name" 
                                onChange={this.handleChange}
                                placeholder="請輸入帳號"
                            />
                        </Form.Item>
                        <Form.Item
                            label="狀態"
                            className ='block-padding'
                        >
                            <Cascader 
                                options={STATUS_OPTION} 
                                value={this.state.fetehForm.status}
                                onChange={this.handleStatusChange} 
                                placeholder="請輸入狀態"
                            />
                        </Form.Item>
                        <Form.Item
                            label="創建日期"
                            rules={[{ message: 'Please input your username!' }]}
                            className ='block-padding'
                        >
                            <Space direction="vertical" size={12}>
                                <RangePicker 
                                    onChange={this.handlePickerChange} 
                                    value={['', null, undefined].includes(this.state.fetehForm.startTime) || ['', null, undefined].includes(this.state.fetehForm.endTime) ? null : [moment(this.state.fetehForm.startTime, dateFormat), moment(this.state.fetehForm.endTime, dateFormat)]}
                                    format={dateFormat}
                                    placeholder={['開始時間','結束時間']}
                                />
                            </Space>
                        </Form.Item>
                        <Form.Item className ='block-padding'>
                            <Button type="primary" onClick={this.submit}>搜尋</Button>
                        </Form.Item>
                        <Form.Item className ='block-padding'>
                            <Button type="primary" onClick={this.clear}>清除</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='block'>
                    <GoCreate />
                    <Table 
                        bordered
                        size="middle"
                        dataSource={this.state.resultData.data}
                        columns={columnsData}
                    />
                </div>
            </div>
        );
    }
}
