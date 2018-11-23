import React from 'react';
import {Row, Col} from 'antd';
require('./IndexFooter.css');
require('./../index.css');
export default class PCFooter extends React.Component {

	render() {
		return (
			<footer>
				<div class='footerHeader'>
					<div class='footerLeft'>
						<div class='LeftOne'>
							<div>产品与服务</div>
							<ul>
								<li>快速建站</li>
								<li>小程序推广</li>
								<li>公众号运营</li>
								<li>广告投放</li>
								<li>数据分析</li>
							</ul>
						</div>
						<div class='LeftTwo'>
							<div>关于我们</div>
							<ul>
								<li>最新动态</li>
								<li>帮助中心</li>
								<li>关于我们</li>
							</ul>
						</div>
						<div class='LeftThree'>
							<div>联系我们</div>
							<ul>
								<li>联系电话：187-6811-9456</li>
								<li>公司邮箱：baoyu.li@kangcenet.com</li>
								<li>微信客服：lbyzju</li>
								<li>公司地址：杭州市余杭区文一西路1218号</li>
							</ul>
						</div>
					</div>
					<div class='footerRight'>
						<img src={require('../images/dibuerweima.png')} alt="" />
						<span>扫码获得更多资讯</span>
					</div>
				</div>
				<div class="CopyText">
					Copyright © 2015-2018    杭州康策网络科技有限公司   All Rights Reserved. 浙ICP备15020529号-1    浙公网安备 44030502002037号
				</div>
			</footer>
		);
	};
}