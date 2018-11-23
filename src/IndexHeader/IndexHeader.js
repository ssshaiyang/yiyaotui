import React from 'react';
import {Row, Col} from 'antd';
import {
	Menu,
	Icon,
	Tabs,
	message,
	Form,
	Input,
	Button,
	CheckBox,
	Modal,
	Dropdown
} from 'antd';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;
const MenuItemGroup = Menu.ItemGroup;
import {Router, Route, Link, browserHistory} from 'react-router-dom'
export default class IndexHeader extends React.Component {
	constructor(props) {
		super();
		this.state = {
			current: 'top',
			modalVisible: false,
			action: 'login',
			hasLogined: false,
			userNickName: '',
			userid: 0,
			headerKey:localStorage.getItem("headerKey")
		};
		console.log("constructor")
		console.log(props)
	};

	componentWillMount(){
		if (localStorage.userNickName!='' && localStorage.userNickName!= undefined) {
			console.log(localStorage.userNickName)
			this.setState({hasLogined:true});
			this.setState({userNickName:localStorage.userNickName});
		}
		console.log(this.state)
	};
	componentDidMount(){
		console.log(this.state)
	}

	setModalVisible(value) {
    this.setState({
        modalVisible: value
    });
	};
	handleClick(e) {
		if (e.key == "register") {
			this.setState({current: 'register'});
			this.setModalVisible(true);
		} else {
			console.log(e)
			{
				this.setState({current: e.key});
				localStorage.setItem("headerKey",e.key)
			}
		}
	};

	callback(key) {
		if (key == 1) {
			this.setState({action: 'login'});
		} else if (key == 2) {
			this.setState({action: 'register'});
		}
	};
	logout(){
		localStorage.userid= '';
		localStorage.userNickName = '';
		this.setState({hasLogined:false});
	};
	render() {

		
		const DropMenu = (
			  <Menu className="HeaderDropMenu">
			    <Menu.Item>
			    		<Link  to={`/FunctionPage`}>多媒体运营</Link>
			    </Menu.Item>
			    <Menu.Item>
			      <Link  to={`/FunctionPage`}>社群运营</Link>
			    </Menu.Item>
			    <Menu.Item>
			      <Link  to={`/FunctionPage`}>广告投放</Link>
			    </Menu.Item>
			    <Menu.Item>
			       <Link  to={`/FunctionPage`}>客群管理</Link>
			    </Menu.Item>
			    <Menu.Item>
			      <Link  to={`/FunctionPage`}>数据分析</Link>
			    </Menu.Item>
			  </Menu>
			);
		return (
			<header >
				<Row>
					<Col span={8} className="HeaderLogo">
						<span href="/"className="logo" >
							<Link  to={`/`}>
								<img src="/static/images/yiyaotuilogo.png"  alt="logo"/>
							</Link>
						</span>
					</Col>
					<Col span={14}>
						<Menu mode="horizontal" className="Menu" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.headerKey]}>
							<Menu.Item key="top">
								<Link  to={`/`}>
								首页
								</Link>
							</Menu.Item>
							<Menu.Item key="shehui">
								<Dropdown overlay={DropMenu} trigger={['click']}>
								    <a className="ant-dropdown-link" href="#">
								      功能 <Icon type="down" />
								    </a>
								</Dropdown>
							</Menu.Item>
							<Menu.Item key="guonei">
								<Link  to={`/CasePage`}>
								案例
								</Link>
							</Menu.Item>
							<Menu.Item key="guoji">
								<Link  to={`/IndexCustomized`}>
								定制
								</Link>
							</Menu.Item>
							<Menu.Item key="yule">
								<Link  to={`/Cooperation`}>
								合作
								</Link>
							</Menu.Item>
							<Menu.Item key="tiyu">
								<Link  to={`/AboutUs`}>
								关于我们
								<Icon type="down"  />
								</Link>
							</Menu.Item>
							<Menu.Item key="login" class="Index_header_login">
								<Link  to={`/Login`}>
								登录
								</Link>
								
							</Menu.Item>
							<Menu.Item key="register" class="Index_header_register">
								<Link  to={`/Regist`}>
								注册
								</Link>
							</Menu.Item>
						</Menu>		
					</Col>
					<Col span={2}></Col>
				</Row>
			</header> 
		);
	};
}

