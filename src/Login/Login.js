import React from 'react';
import {Form, Icon, Input, Button, Checkbox,message,Modal } from 'antd';

import {Router, Route, Link, browserHistory} from 'react-router-dom'
import ReactDOM from 'react-dom';
require('./IndexLogin.css');
require('./../index.css');
const FormItem = Form.Item;


class IndexLogin extends React.Component {
	constructor(props) {
        super(props);
        this.state={
        	phone:null,
        	count:0,
        	counting:false,
        	show: {display:"block"},
        	shows:{display:"none"}
        }
    }
	componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      	if(values.remember == false){
      		message.info('还没选择规则')
      	}else{
      		var that = this;
			var formData = new FormData();
			console.log(values)
			formData.append('phone', values.phone);
			formData.append('password', values.password);
			formData.append('code', values.code);
			// formData.append('source', 1);
			fetch('http://console.yiyaotui.com/users/login', {
				method : 'POST',
				mode : 'cors',
				body : formData
			}).then(function(res){
				if(res.ok){
					res.json().then(function(data){
						if(data.code!=1000){
							message.info(''+ data.msg)
						}else{
							console.log(123)
							localStorage.setItem("userNickName",values.phone);
							window.location.href = 'http://console.yiyaotui.com'
						}
					})
				}else{
					console.log('请求失败');
					that.errorFunc();
				}
			}, function(e){
				console.log('请求失败');
				that.errorFunc();
			})
      	}
      	console.log(values)
        console.log('Received values of form: ', values);

      }else{
      	message.info('还有信息未填写')
      }
    });
  }
  setPhone(e){
  	var phones =e.target.value;
  	this.setState({
  		phone:phones
  	})
  }

  getPhoneCode(e){
  	var phone =this.state.phone;
  	var patt1 = /^1[3|4|5|7|8][0-9]{9}$/;
  	var checkboolan = phone.match(patt1);
  	if(checkboolan==null){
  		 message.info('手机号码输入不正确');
  	}else{
  		var that = this;
		var formData = new FormData();
		formData.append('phone',''+phone);
		formData.append('source', 1);
		fetch('http://console.yiyaotui.com/code', {
			method : 'POST',
			mode : 'cors',
			body : formData
		}).then(function(res){
			if(res.ok){
				res.json().then(function(data){
					if(data.code!=1000){
							message.info(''+ data.msg)
						}else{
							var getCode = document.getElementById('getCode');
							var getCode2 = document.getElementById('getCode2');
							var i = 60;
							getCode.style.display = 'none';
							getCode2.style.display = 'block';
							message.info('验证码获取成功')
							var timer = setInterval(function(){
								getCode2.innerHTML = i+'秒';
								i -= 1;		
								if (i == 1) {
									getCode2.style.display = 'none';
									getCode.style.display = 'block';
									getCode2.innerHTML = '获取验证码';
									clearInterval(timer);
								}
							}, 1000);
					}
				})
			}else{
				console.log('请求失败');
				that.errorFunc();
			}
		}, function(e){
			console.log('请求失败');
			that.errorFunc();
		})
  	}
  }
  geterweimaCode(){
  	this.setState({
  		show: {display:"none"},
        shows:{display:"block"}
  	})
  	var obj = new WxLogin({
		 self_redirect:true,
		 id:"wxlogin", 
		 appid: "wx001fa6f201211aa9", 
		 scope: "snsapi_login", 
		 redirect_uri:encodeURI("http://console.yiyaotui.com/users/wxLogin"),
		  state: "STATE",
		 style: "black",
		 href: ""
		 });
  }
  passwordshow(){
  	this.setState({
  		show: {display:"block"},
        shows:{display:"none"}
  	})
  }

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div class='IndexLoginbox'>
				<div class="IndexLoginContent">
					<div class='IndexLoginPic'><Link  to={`/`}><img src={require('../images/yiyaotuilogo.png')} alt="" /></Link></div>
					<div class='IndexLoginfooter'>
				      		——医药推， 医药互联网营销合伙人——
				      </div>
					 <Form onSubmit={this.handleSubmit.bind(this)} className="IndexLogin-form">
					 <div class='IndexLogintext'><div onClick={this.passwordshow.bind(this)} class='passwordLogin'><a class='passwordLoginIcon'></a><span>密码登陆 </span></div><div class='Logininterval'></div><div onClick={this.geterweimaCode.bind(this)} class='weixinLogin'><a class='weixinLoginIcon'></a><span>微信登陆 </span></div></div>
					 		<div style={this.state.show}>
						        <FormItem class='topinterval'>
						          {getFieldDecorator('phone', {
						            rules: [{ required: false, message: '请输正确的手机号码',pattern:/^1[3|4|5|7|8][0-9]{9}$/}],
						          })(
						          <Input prefix={<img src={require("../images/Login/login1.png")}/>} onChange={this.setPhone.bind(this)} placeholder='请输入手机号码…' />
						          )}
						        </FormItem>
						        <div class='linediv'></div>
						        <FormItem class='topinterval'>
						          {getFieldDecorator('password', {
						            rules: [{ required: false, message: '请输入至少六位数密码' ,min:6}],
						          })(
						            <Input   prefix={<img src={require("../images/Login/Slice 33.png")}/>} type="password"  placeholder='请输入密码…'/>
						          )}
						        </FormItem>
						        <div class='linediv'></div>
						        <FormItem class='topinterval mseeagePhone'>
						          {getFieldDecorator('code', {
						            rules: [{ required: false, message: '请输入正确的短信验证码' }],
						          })(
						          <Input class='Verificationbtn'  prefix={<img src={require("../images/Login/Slice 32.png")}/>} placeholder='请输入验证码…'  />
						          )}
						        </FormItem>
						        <span id='getCode' class='phonegetbtn'  onClick={this.getPhoneCode.bind(this)}>获取验证码</span>
				        		<span id='getCode2' class='phonegetbtn' style={{display:'none'}} >获取验证码</span>
						        <div class='linediv'></div>
						        <FormItem>
						          {getFieldDecorator('remember', {
						            valuePropName: 'checked',
						            initialValue: true,
						          })(
						            <Checkbox class='checkbtn'>记住密码</Checkbox>
						          )}
						          <span class='forgetpassword'>忘记密码</span>
						        </FormItem>
						        <FormItem>
							        <Button type="primary" htmlType="submit" className="IndexLogin-form-button">
							           登陆
							          </Button>
							    </FormItem>
							    </div>
							    <div style={this.state.shows}>
							    	<div class='weixinerweima'>
							    		<div id='wxlogin'></div>
							    		<div class='Mask'></div>
							    		<div class='Mask2'>请打开微信客户端<a>「扫一扫」</a></div>
							    	</div>
							    </div>
							    <div class='toIndexLogin'>
							    已有账号?  <Link to={`/Regist`}>
							    <a>马上注册</a>
							    </Link></div>
						 </Form>
				      <span class='IndexLoginheadertext'>全域产品矩阵、多平台数据联通共享</span>
				</div>
			</div>
		);
	};
}

const WrappedIndexLoginrationForm = Form.create()(IndexLogin);
export default WrappedIndexLoginrationForm;