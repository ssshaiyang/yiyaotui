import React from 'react';
import {Row, Col,Input} from 'antd';
require('./Cooperation.css');
require('./../index.css');
const Search = Input.Search;
import IndexHeader from '../IndexHeader/IndexHeader'
import IndexFooter from '../IndexFooter/IndexFooter.js'
export default class Cooperation extends React.Component {

	render() {
		return (
			<div class='Cooperationbackground'>
				<IndexHeader/>
				<div class='Cooperationbanner'>
					<div class='Cooperationback'></div>
					<span>只有8%的药企拥有媒体运营
						只有2%的药企拥有数字分析
						只有1%的药企拥有客群托管
					……</span>
				</div>
				<div class='titleText'>
					<span class='iconleft'><img src={require('../images/Cooperation/wenzizuobian.png')}/></span>
					<span>市场庞大·前景无限·期待您的加入</span>
					<span class='iconright'><img src={require('../images/Cooperation/wenziyoubian.png')}/></span>
				</div>
				<div class='stepcontent'>
					<ul class='stepul'>
						<li class='contentstep'>
							<div class='stepicon'>
								<img src={require('../images/Cooperation/tijiaoshenqingicon.png')}/>
							</div>
							<div class='steptext'>1:提交申请</div>
						</li>
						<li class='Arrowicon'>
							<img src={require('../images/Cooperation/buzoujiantou.png')}/>
						</li>
						<li class='contentstep'>
							<div class='stepicon'>
								<img src={require('../images/Cooperation/dengdaishenheicon.png')}/>
							</div>
							<div class='steptext'>2:等待审核</div>
						</li>
						<li class='Arrowicon'>
							<img src={require('../images/Cooperation/buzoujiantou.png')}/>
						</li>
						<li class='contentstep'>
							<div class='stepicon'>
								<img src={require('../images/Cooperation/lianximiantanicon.png')}/>
							</div>
							<div class='steptext'>3:联系面谈</div>
						</li>
						<li class='Arrowicon'>
							<img src={require('../images/Cooperation/buzoujiantou.png')}/>
						</li>
						<li class='contentstep'>
							<div class='stepicon'>
								<img src={require('../images/Cooperation/qiandinghetongicon.png')}/>
							</div>
							<div class='steptext'>4:签订合同</div>
						</li>
						<li class='Arrowicon'>
							<img src={require('../images/Cooperation/buzoujiantou.png')}/>
						</li>
						<li class='contentstep'>
							<div class='stepicon'>
								<img src={require('../images/Cooperation/kaishihezuoicon.png')}/>
							</div>
							<div class='steptext'>5:开始合作</div>
						</li>
					</ul>
					<div class='moreproblem'>更多问题请联系我们</div>
				</div>
				<div class='support'>
					<div class='supporttitle'>
						<span>YiYaoTui</span>扶持计划
					</div>
					<ul>
						<li>
							<div class='leftbtnpicback'>
								<div class='leftbtnpic'/>
							</div>
						</li>
						<li class='supportli'>
							<img src={require('../images/Cooperation/zuotu.png')}/>
							<div class='footercontent'><div class='liheader'>产品支持</div><span class='liheadercontent'>服务商可根据第一线市场反馈，经过总部产品部门评估后进行产品优化，促销服务商销售工作。</span></div>
						</li>
						<li class='supportli'>
							<img src={require('../images/Cooperation/zhongtu.png')}/>
							<div class='footercontent'><div class='liheader'>资源支持</div><span class='liheadercontent'>总部各渠道获取到的资源线索将根据地区、转化率分发给各个服务商服务商将建成更多元的资源获取途径。</span></div>
						</li>
						<li class='supportli nomargin'>
							<img src={require('../images/Cooperation/youtu.png')}/>
							<div class='footercontent'><div class='liheader'>市场支持</div><span class='liheadercontent'>展会、交流会、发布会等市场活动，总部给予专业市场支持，指派相关人员协助市场活动开展。</span></div>
						</li>
						<li>
							<div class='rightbtnpicback'>
								<div class='rightbtnpic'/>
							</div>
						</li>
					</ul>
				</div>
				<div class='Cooperationfooter'>
					<div class='footertext'>
						<span>YiYaoTui</span>代理商查询
					</div>
					<div class='footerbtn'>
						<Search
						      placeholder="请输入代理商名称"
						      enterButton="确认"
						      size="large"
						      onSearch={value => console.log(value)}
						    />
					</div>
				</div>
				<IndexFooter/>
			</div>
		);
	};
}