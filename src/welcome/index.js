// ---- global ----
import React from 'react';
import "asset/share.css";
import "./style.css";

// ---- component ----
import MainPage from 'component/mainpage';
import CARD from "./card";
import VALUECARD from "./valuecard";

// ---- Service ----
import ReportsService from 'services/ReportsService'
export default class welcome extends React.Component {
    constructor() {
        super()
        this.state = {
            resultData: {
                data: [
                    {
                        unfinishProduct: '',
                        finishProduct: '',
                        unfinishAmount: '',
                        finishAmount: '',
                    },
                ],
            },
        }
    }

    async componentDidMount() {
        await this.initValue()
    }

    initValue = async (event) => {
        await ReportsService.getSiteList()
            .then(res => {
                this.setState(state => ({
                    ...state,
                    resultData: res,
                }));
            })
            .catch(err => {
            })
    }

    render() {
        return (
            <div>
                <MainPage title={'站台數據'} />
                <div className='block'>
                    <div className='card-block'>
                        <div className='red-card card-container'>
                            <CARD title={'瀏覽人數'} value={this.state.resultData.peopleTotal + ` 人 `}/>
                        </div>
                        <div className='green-card card-container'>
                            <CARD title={'下單量'} value={this.state.resultData.productTotal + ` 單 `}/>
                        </div>
                        <div className='blue-card card-container'>
                            <CARD title={'營收'} value={` $ ` + this.state.resultData.AmountTotal + ` 元 ` }/>
                        </div>
                    </div>
                    <div className='card-block'>
                        <div className='valueCard-container'>
                            <VALUECARD 
                                value={'商品總數'} 
                                fristTitle={'未結單數量'}
                                secondTitle={'已結單數量'}
                                fristValue={this.state.resultData.data[0].unfinishProduct}
                                secondValue={this.state.resultData.data[0].finishProduct}
                            />
                        </div>
                        <div className='valueCard-container'>   
                            <VALUECARD 
                                value={'存款'} 
                                fristTitle={'存入金額'}
                                secondTitle={'未付款金額'}
                                fristValue={this.state.resultData.data[0].unfinishAmount}
                                secondValue={this.state.resultData.data[0].finishAmount}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}