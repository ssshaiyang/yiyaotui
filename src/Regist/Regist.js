import React from 'react';
import {Form, Icon, Input, Button, Checkbox,message } from 'antd';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'
require('./Regist.css');
require('./../index.css');
const FormItem = Form.Item;


class Regist extends React.Component {
	constructor(props) {
        super(props);
        this.state={
        	phone:null,
        	count:0,
        	counting:false
        }
    }
	componentDidMount() {
    // To disabled submit button at the beginning.
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
      	if(values.remember == false){
      		message.info('还没选择规则')
      	}else if(values.password!=values.password2){
      		message.info('两次密码不一致')
      	}else{
      		var that = this;
			var formData = new FormData();
			formData.append('phone', values.phone);
			formData.append('password', values.password);
			formData.append('password2', values.password2);
			formData.append('code', values.code);
			// formData.append('source', 1);
			fetch('http://console.yiyaotui.com/users/register', {
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
							message.info('注册成功')
							localStorage.setItem("userNickName",values.phone);
							// let path = {
							// 	 pathname:'/'
							// } 
							// this.props.history.push(path);
							window.location.href = '#/Login';
						}
					})
				}else{
					console.log('请求失败');
				}
			}, function(e){
				console.log('请求失败');
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
  PasswordCheck(){
  	
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
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div class='Registbox'>
				<div class="RegistContent">
					<div class='RegistPic'><Link  to={`/`}><img src={require('../images/yiyaotuilogo.png')} alt="" /></Link></div>
					<div class='Registfooter'>
				      		——医药推，医药互联网营销合伙人——
				     </div>
					 <Form onSubmit={this.handleSubmit.bind(this)} className="Regist-form">
					 	<div class='Registtext'>免费注册</div>
				        <FormItem class='topinterval'>
				          {getFieldDecorator('phone', {
				            rules: [{ required: true, message: '请输正确的手机号码',pattern:/^1[3|4|5|7|8][0-9]{9}$/}],
				          })(
				          <Input onChange={this.setPhone.bind(this)} prefix={<span>手机号码</span>}  />
				          )}
				        </FormItem>
				        <div class='linediv'></div>
				        <FormItem class='topinterval mseeagePhone'>
				          {getFieldDecorator('code', {
				            rules: [{ required: true, message: '请输入正确的短信验证码',min:6}],
				          })(
				          <Input class='Verificationbtn'  prefix={<span>验证码</span>}  />
				          )}
				        </FormItem>
				        <span id='getCode' class='phonegetbtn'  onClick={this.getPhoneCode.bind(this)}>获取验证码</span>
				        <span id='getCode2' class='phonegetbtn' style={{display:'none'}} >获取验证码</span>
				        <div class='linediv'></div>
				        <FormItem class='topinterval'>
				          {getFieldDecorator('password', {
				            rules: [{ required: true, message: '请输入至少六位数密码' ,min:6}],
				          })(
				            <Input   prefix={<span>设置密码</span>} type="password" />
				          )}
				        </FormItem>
				        <div class='linediv'></div>
				         <FormItem class='topinterval' onChange={this.PasswordCheck.bind(this)}>
				          {getFieldDecorator('password2', {
				            rules: [{ required: true, message: '两次输入密码不一致'}],
				          })(
				            <Input  prefix={<span>确认密码</span>} type="password"/>
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('remember', {
				            valuePropName: 'checked',
				            initialValue: true,
				          })(
				            <Checkbox class='checkbtn'>我已阅读并同意《yiyaotui服务协议》</Checkbox>
				          )}
				        </FormItem>
				        <FormItem>
					        <Button type="primary" htmlType="submit" className="Regist-form-button">
					           确认注册
					          </Button>
					          <div class='toRegist'>已有账号?  <Link to={`/Login`}><a>马上登录</a></Link></div>
					    </FormItem>
				      	</Form>
				      <div class='Registheadertext'>全域产品矩阵、多平台数据联通共享</div>
				</div>
			</div>
		);
	};
}

const WrappedRegistrationForm = Form.create()(Regist);
export default WrappedRegistrationForm;