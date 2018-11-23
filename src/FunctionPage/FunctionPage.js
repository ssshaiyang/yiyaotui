import React from 'react';
import {Row, Col} from 'antd';
require('./FunctionPage.css');
require('./../index.css');
import IndexHeader from '../IndexHeader/IndexHeader'
import IndexFooter from '../IndexFooter/IndexFooter.js'
export default class FunctionPage extends React.Component {

	render() {
		return (
			<div>
				<IndexHeader/>
				<div class='FunctionPagebanner'>
					<div class='bannerback'></div>
					<div class='bannertext'>为您提供数字化销售运营闭环</div>
				</div>
				<div class='FunctionPageContent'>
					<div class='FunctionTitle'>
						<span class='headertexts'>多媒体运营</span>
						<ul class='header1'>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/gongnengyeicon.png')}/></div></div>
								<div class='functiontext'>
									<div>全面托管</div>
									<span>数字化媒体营销全权托管</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice.png')}/></div></div>
								<div class='functiontext'>
									<div>一键生成H5</div>
									<span>小游戏、动态名片等一键生成</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 4.png')}/></div></div>
								<div class='functiontext'>
									<div>公众号服务</div>
									<span>提交信息即可全程托管企业公众号</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 3.png')}/></div></div>
								<div class='functiontext'>
									<div>一键建站</div>
									<span>只需一键即可生成官方网站</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 2.png')}/></div></div>
								<div class='functiontext'>
									<div>社群运营</div>
									<span>社群患者运营帮您树立品牌</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 5.png')}/></div></div>
								<div class='functiontext'>
									<div>广告投放</div>
									<span>精准广告投放增加品牌效应</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 6.png')}/></div></div>
								<div class='functiontext'>
									<div>危机公关</div>
									<span>快速反应让品牌不受侵害</span>
								</div>
							</li>
						</ul>
						<div class='topinterval'>
							<span class='headertexts'>数据分析</span>
						</div>
						<ul class='header2'>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 7.png')}/></div></div>
								<div class='functiontext'>
									<div>销售数据分析</div>
									<span>销售行为快速生成并分析</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 8.png')}/></div></div>
								<div class='functiontext'>
									<div>运营数据分析</div>
									<span>运营数据统计及自动调整</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 9.png')}/></div></div>
								<div class='functiontext'>
									<div>区域数据分析</div>
									<span>查看区域化疾病发展与变更</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 3.png')}/></div></div>
								<div class='functiontext'>
									<div>数据报表生成</div>
									<span>只需一键即可生成数据报表及解决方案</span>
								</div>
							</li>
						</ul>
						<div class='topinterval'>
							<span class='headertexts'>销售渠道拓宽</span>
						</div>
						<ul class='header3'>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 11.png')}/></div></div>
								<div class='functiontext'>
									<div>垂直药店</div>
									<span>直观查看药店销售数量并作出相应调整</span>
								</div>
							</li>
							<li>
								<div class='functionPic'><div><img src={require('../images/FunctionLogo/Slice 12.png')}/></div></div>
								<div class='functiontext'>
									<div>垂直患者</div>
									<span>庞大的医生资源协助药企解决销售问题</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class='FunctionPageFooter'>
					<div class='FunctionPageFooterback'></div>
					<div class='FunctionPageFootertext1'>更多定制托管服务</div>
					<div class='FunctionPageFootertext2'>静候您来</div>
					<div  class='FunctionPageFooterBtn'>联系我们</div>
				</div>
				<IndexFooter/>
			</div>
		);
	};
}