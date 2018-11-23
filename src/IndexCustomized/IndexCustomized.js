import React from 'react';
import {Form, Icon, Input, Button, Checkbox,Modal} from 'antd';
import ReactDOM from 'react-dom';
import IndexHeader from '../IndexHeader/IndexHeader.js';
import IndexFooter from '../IndexFooter/IndexFooter.js'
const FormItem = Form.Item;
require('./IndexCustomized.css');
require('./../index.css');
class IndexCustomized extends React.Component {
	constructor(props) {
        super(props);
        this.state={
            visible:false,
        }
    }
	componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
     this.getcookie()
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  getcookie(){
  	console.log(123)
  	var arr, reg = new RegExp("(^| )" + 'cookieok' + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg)){
            return unescape(arr[2]);
        }else{
        	this.setState({
 				visible:true
 			})
            return null;
        }

  }
  offClick(){
  	console.log(123)
  	this.setState({
  		visible:false
  	})
    var exp = new Date();
    exp.setTime(exp.getTime() + 148*60 * 60 * 1000);
     document.cookie = 'cookieok' + "=" + escape('123') + ";expires=" + exp.toGMTString() + ";path=/"
  }
	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<div class='IndexCustomizedBack'>
				<IndexHeader/>
				<div class='IndexCustomizedbanner'>
					<div class='IndexCustomizedtext1'>医药推</div>
					<div class='IndexCustomizedtext2'>让医药销售更简单</div>
				</div>
				<div class='IndexCustomizedtext3'>
					<div class='IndexCustomizedheader'>
						关于我们
					</div>
					<div class='IndexCustomizedfooter'>
						      医药推是专注于移动互联网的营销具有整合、交互、实效性的跨时空特征，正以惊人的链接力量在影响着我们的生活各个方面。“互联网+”早已经融入到各个行业中，并成为了当前社会的主流发展趋势。
					</div>
				</div>
				<Modal class='Cform'
					visible={this.state.visible? true:false}
	                width=""
	                footer={null}
                >
					<span class='Cformheader'>请留下您的联系方式，稍后为您定制…</span>
					<Form className="IndexCustomized-form">
				        <FormItem>
				          {getFieldDecorator('userName', {
				            rules: [{ required: false, message: '请输入姓名' }],
				          })(
				            <Input prefix={<img src={require("../images/IndexCustomized/xingmingicon.png")}/>} placeholder="请输入你的名字" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('userPhone', {
				            rules: [{ required: false, message: '请输入手机号码' }],
				          })(
				            <Input prefix={<img style={{}} src={require("../images/IndexCustomized/mimaicon.png")}/>} placeholder="请输入手机号码" />
				          )}
				        </FormItem>
				        <FormItem>
				          {getFieldDecorator('userCompany', {
				            rules: [{ required: false, message: '请输入公司名称' }],
				          })(
				            <Input prefix={<img src={require("../images/IndexCustomized/gongsiicon.png")}/>} placeholder="请输入公司名称" />
				          )}
				        </FormItem>
				        <FormItem class='Customizedfooterbtn'>
				          <Button class='Submissionbtn' type="primary" htmlType="submit" onClick={this.offClick.bind(this)}>
				            提交
				          </Button>
				          <Button class='cancelbtn' type="primary" htmlType="submit" onClick={this.offClick.bind(this)}>
				            取消
				          </Button>
				        </FormItem>
				      </Form>
				      <div class='Customizedfooter'>
				      		——医药推，药企互联网营销合伙人——
				      </div>
				</Modal>
				<IndexFooter/>
			</div>
		);
	};
}

const IndexCustomizedLoginForm = Form.create()(IndexCustomized);
export default IndexCustomizedLoginForm;