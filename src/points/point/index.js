
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
    Table,
    Cascader,
    Modal,
    message,
} from 'antd';

// ---- component ----
import MainPage from 'component/mainpage';
import pointService from 'services/pointService'

// ---- site ----
import { POINT_OPTION } from 'configs/site'
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
        title: '原因',
        dataIndex: 'reason',
        key: 'reason',
        width: 200
    },
    {
        title: '內容',
        dataIndex: 'content',
        key: 'content',
        width: 200
    },
    {
        title: '金額',
        dataIndex: 'amount',
        key: 'amount',
        width: 200
    },
    {
        title: '單據',
        dataIndex: 'single',
        key: 'single',
        width: 300
    },
    {
        title: '更新時間',
        dataIndex: 'createRange',
        key: 'createRange',
        width: 500
    },
    {
        title: '編輯',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <GoUpdate value={record}/>
            </Space>
        ),
        width: 200
    }
]

const GoUpdate = (data) => {
    // data 
    const target = data.value
    if (!['', null, undefined].includes(target.reason) && !Array.isArray(target.reason)) {
        let targetOption = POINT_OPTION.find(item => item.options === target.reason)
        if (targetOption.value !== undefined) target.reason = [targetOption.value]
    }
    const disabledList = {
        account: true,
        single: true,
        amount: false,
        content: false,
        reason: false,
    }

    const [isModelVisible, setIsModelVisible] = React.useState(false);

    const showModal = () => {
        setIsModelVisible(true);
    };

    const handleConfirm = async () => {
        setIsModelVisible(false);
        await pointService.updatePoint(variables)
            .then(res => {
                if (res) {
                    return message.success('更新成功');
                }
            })
            .catch(err => {
            })
    };

    const handleCancel = () => {
        setIsModelVisible(false);
    };

    const [variables, setVariables] = React.useState({
        target
    });

    const handleChange = (e) => {
        setVariables(target => ({
            target: {
                ...target.target,
                [e.target.name]: e.target.value
            }
        }))
    };

    const handleReasonChange = (event) => {
        setVariables(target => ({
            target: {
                ...target.target,
                reason: event
            }
        }))
    };

    return(
        <div>
            <Button type="primary" onClick={showModal}>
                編輯
            </Button>
            <Modal title="編輯" visible={isModelVisible} onOk={handleConfirm} onCancel={handleCancel}>
                <Form
                    name="basic"
                    labelCol={{ span: 4 }}
                    wrapperCol= {{ span: 10 }}
                    initialValues={{ remember: true }}
                >
                    <Form.Item
                        label="帳號"
                        className ='block-padding'
                    >
                        <Input 
                            value={variables.target.account} 
                            name="account"
                            disabled={disabledList.account}
                            onChange={handleChange}
                            placeholder="請輸入帳號" 
                        />
                    </Form.Item>
                    <Form.Item
                        label="單據"
                        className ='block-padding'
                    >
                        <Input 
                            value={variables.target.single}
                            disabled={disabledList.single}
                            name="single" 
                            onChange={handleChange}
                            placeholder="請輸入帳號" 
                        />
                    </Form.Item>
                    <Form.Item
                        label="金額"
                        className ='block-padding'
                    >
                        <Input 
                            value={variables.target.amount}
                            disabled={disabledList.amount}
                            name="amount" 
                            onChange={handleChange}
                            placeholder="請輸入金額" 
                        />
                    </Form.Item>
                    <Form.Item
                        label="內容"
                        className ='block-padding'
                    >
                        <Input 
                            value={variables.target.content}
                            disabled={disabledList.content}
                            name="content" 
                            onChange={handleChange}
                            placeholder="請輸入帳號" 
                        />
                    </Form.Item>
                    <Form.Item
                        label="單據原因"
                        className ='block-padding'
                    >
                        <Cascader 
                            options={POINT_OPTION} 
                            value={[variables.target.reason[0]]}
                            onChange={handleReasonChange}
                            placeholder="請輸入單據原因"
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}

export default class POINT extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fetehForm: {
                account: '',
                single: '',
                reason: '',
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

    handleOptionsChange = (event) => {
        this.setState(state => ({
            fetehForm: {
                ...state.fetehForm,
                reason: event
            }
        }))
    };

    reasonFormatter = (row, column, cellValue) => {
        let result = '错误'
        const target = POINT_OPTION.find(item => item.value === cellValue)
        if (target.value !== undefined) result = target.label
        return result
    }

    submit = async (event) => { 
        await pointService.getPointlist(this.state.fetehForm)
            .then(res => {
                for (let i=0; i < res.data.length; i++) {
                    res.data[i].createRange = moment(res.data[i].createRange).format(dateFormat)
                    res.data[i].reason = this.reasonFormatter(null, null, res.data[i].reason)
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
        this.setState(() => ({
            fetehForm: {
                account: '',
                single: '',
                reason: '',
                startTime:undefined,
                endTime:undefined,
            },
            resultData: {},
        }));
    }

    render() {
        return (
            <div>
                <MainPage title={'點數管理'} />
                <div className='block'>
                    <Form
                        name="basic"
                        labelCol={{ span: 10 }}
                        wrapperCol={{ span: 20 }}
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
                            label="單號"
                            className ='block-padding'
                        >
                            <Input 
                                value={this.state.fetehForm.single} 
                                name="single" 
                                onChange={this.handleChange}
                                placeholder="請輸入單號" 
                            />
                        </Form.Item>
                        <Form.Item
                            label="單據原因"
                            className ='block-padding'
                            labelCol={{ span: 12 }}
                        >
                            <Cascader 
                                options={POINT_OPTION} 
                                value={this.state.fetehForm.reason}
                                onChange={this.handleOptionsChange} 
                                placeholder="請輸入單據原因"
                            />
                        </Form.Item>
                        <Form.Item
                            label="選擇日期"
                            className ='block-padding'
                            labelCol={{ span: 10 }}
                        >
                            <Space direction="vertical">
                                <RangePicker 
                                    onChange={this.handlePickerChange} 
                                    value={['', null, undefined].includes(this.state.fetehForm.startTime) || ['', null, undefined].includes(this.state.fetehForm.endTime) ? null : [moment(this.state.fetehForm.startTime, dateFormat), moment(this.state.fetehForm.endTime, dateFormat)]}
                                    format={dateFormat}
                                    placeholder={['开始时间','结束时间']}
                                />
                            </Space>
                        </Form.Item>
                        <Form.Item className ='block-padding'>
                            <Button type="primary" onClick={this.submit}>搜尋</Button>
                        </Form.Item>
                        <Form.Item className ='block-padding'>
                            <Button onClick={this.clear}>清除</Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className='block'>
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
