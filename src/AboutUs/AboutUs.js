import React from 'react';
import {Row, Col} from 'antd';
require('./Aboutus.css');
require('./../index.css');
import IndexHeader from '../IndexHeader/IndexHeader'
import IndexFooter from '../IndexFooter/IndexFooter.js'
export default class AboutUs extends React.Component {

	render() {
		return (
			<div class='Aboutbackground'>
				<IndexHeader/>
				<div class='Aboutbanner'>
					<div class='abouttext1'>医药推</div>
					<div class='abouttext2'>让医药销售更简单</div>
				</div>
				<div class='abouttext3'>
					<div class='textheader'>
						关于我们
					</div>
					<div class='textfooter'>
						      医药推是专注于移动互联网的营销具有整合、交互、实效性的跨时空特征，正以惊人的链接力量在影响着我们的生活各个方面。“互联网+”早已经融入到各个行业中，并成为了当前社会的主流发展趋势。
					</div>
				</div>
				<IndexFooter/>
			</div>
		);
	};
}