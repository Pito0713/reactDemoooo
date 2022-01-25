// ---- global ----
import React from 'react';
import { Menu } from 'antd';
import { Link, useLocation } from "react-router-dom";
import "./style.css";

// ---- site ----
import { MENU_LIST } from 'configs/site'

const { SubMenu } = Menu;

const Sider = () => {
    let location = useLocation();

    const tempStrArr = location.pathname.split('/')
    let targetName
    if (tempStrArr.length > 1) targetName = tempStrArr[1]

    const [openKeys, setOpenKeys] = React.useState([targetName]);
    const rootSubmenuKeys = React.useState([]);
    for (let i=0; i < MENU_LIST.length; i++){
        rootSubmenuKeys.push(MENU_LIST[i].name)
    }

    const onOpenChange = keys => {
        const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };


    const state = {
        theme: 'dark',
        current: '1',
    };

    
    const listsTitle = []
        for (let i=0; i < MENU_LIST.length; i++){
            let lists = []
            for (let k=0; k < MENU_LIST[i].child.length; k++){
                lists.push( 
                    <Menu.Item key={'/'+MENU_LIST[i].child[k].route}>
                        <Link to={MENU_LIST[i].child[k].route}>
                            {MENU_LIST[i].child[k].text}
                        </Link>
                    </Menu.Item>
                )
            }        
            listsTitle.push( 
                <SubMenu key={MENU_LIST[i].name} title={MENU_LIST[i].text}>
                    {lists}
                </SubMenu>
            )
        }
        
        return (
            <Menu
                theme={state.theme}
                style={{ width: 256 }}
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                selectedKeys={[location.pathname]}
            >
                {listsTitle}
            </Menu>
        );
}
const INDEXHOME = () => {
    return (
        <div className="homeBG">
            <Link to='/'>
                HOME
            </Link>
        </div>
    );
}

export default class ASIDE extends React.Component {

    render() {
        return (
            <div className="aside-menu">
                <INDEXHOME />
                <Sider />
            </div>
        );
    }
}