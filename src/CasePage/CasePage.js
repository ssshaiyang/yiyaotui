import React from 'react';
import {Row, Col} from 'antd';
require('./CasePage.css');
require('./../index.css');
import IndexHeader from '../IndexHeader/IndexHeader'
import IndexFooter from '../IndexFooter/IndexFooter.js'
export default class CasePage extends React.Component {

	render() {
		return (
			<div class='CasePagebackground'>
				<IndexHeader/>
				<div class='CasePagebanner'>
					<div class='bannerback'></div>
					<div class='bannertext'>为您提供数字化销售运营闭环</div>
				</div>
				<div class='CasePageContent'>
					<div class='ContentTitle'>
						<span class='headertexts'>一体化托管案例</span>
						<ul>
							<li>
								<div class='companypic1'></div>
								<div>顶真药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic2'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic1'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
						</ul>
						<div class='topinterval'>
							<span class='headertexts'>数字化营销案例</span>
						</div>
						<ul>
							<li>
								<div class='companypic1'></div>
								<div>顶真药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic2'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic1'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic2'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic1'></div>
								<div>顶真药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic2'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
						</ul>
						<div class='topinterval'>
							<span class='headertexts'>媒体运营案例</span>
						</div>
						<ul>
							<li>
								<div class='companypic1'></div>
								<div>顶真药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic2'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic1'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
						</ul>
						<div class='topinterval'>
							<span class='headertexts'>小程序推广</span>
						</div>
						<ul>
							<li>
								<div class='companypic1'></div>
								<div>顶真药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
							<li>
								<div class='companypic2'></div>
								<div>幸福药业</div>
								<div class='companypicback'>
								</div>
								<div class='companypiccontent'>
									<img src={require('../images/anlierweima.png')}/>
									<span>扫码查看</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class='CasePageFooter'>
					<div class='CasePageFooterback'></div>
					<div class='CaseFootertext1'>更多定制托管服务</div>
					<div class='CaseFootertext2'>静候您来</div>
					<div  class='CaseFooterBtn'>联系我们</div>
				</div>
				<IndexFooter/>
			</div>
		);
	};
}