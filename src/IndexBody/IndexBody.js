import React from 'react';
import {BrowserRouter,Link, Route, HashRouter} from 'react-router-dom';
import {Row, Col } from 'antd';
import {
	Carousel 
} from 'antd';
import IndexHeader from '../IndexHeader/IndexHeader'
import IndexFooter from '../IndexFooter/IndexFooter'

export default class IndexBody extends React.Component {


	onChange(a, b, c) {
	  console.log(a, b, c);
	}

	constructor(props) {
	    super(props);
	    this.state = {
	    	carouselRef:'',
	    	bool1: false,
			bool2: false,
			bool3: false,
			scrollTop:0,
			bottomstyle:{},

	    }

	    this.carouselRef = null;

	    this.setCarouselRef = el => {
	      console.log("el")
	      console.log(el)
	    };
	    console.log(this.carouselRef)
	}


  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll(e) {
		//console.log(e)
		let anchorElement = document.getElementById('screens');
		//console.log(anchorElement)
		// if(anchorElement) { anchorElement.scrollIntoView(); }
		
		this.getScrollTop();
  }
  getScrollTop() {　　
    var scrollTop = 0,
        bodyScrollTop = 0,
        documentScrollTop = 0;　　
      
    if (document.body) {　　　　
        bodyScrollTop = document.body.scrollTop;　　
    }　　
    if (document.documentElement) {　　　　
        documentScrollTop = document.documentElement.scrollTop;　　
    }　　
    let scrollTop_old = this.state.scrollTop
   
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;　

    if(scrollTop > 50){
    	console.log("scrollTop > 130")
    	this.setState({
    		bottomstyle :{
    		bottom :'-80px',
    		transition: 'all 1s ',
    		opacity:'0.9',
    	}
    	}) 
    }else{
    	this.setState({
    		bottomstyle :{
    		bottom :'0px',
    		transition: 'all 1s ',
    		opacity:'0.9',
    	}
    	})
    }
	    //  if (scrollTop - scrollTop_old > 300) {
	    //  	if (scrollTop >=2585 && scrollTop <3530) {
	    // 	let anchorElement = document.getElementById('Index_detail_show_1')
	    // 	anchorElement.scrollIntoView({behavior: 'smooth'});
	    // }
	    // if (scrollTop >=3530 && scrollTop <4518) {
	    // 	let anchorElement = document.getElementById('Index_detail_show_2')
	    // 	anchorElement.scrollIntoView({behavior: 'smooth'});
	    // }
     // }
     // console.log(scrollTop);　
    
    // if (scrollTop >=1650 && scrollTop <2550) {
    // 	let anchorElement = document.getElementById('Index_detail_show_3')
    // 	anchorElement.scrollIntoView({behavior: 'smooth'});
    // }
    // if (scrollTop >=1650 && scrollTop <2550) {
    // 	let anchorElement = document.getElementById('Index_detail_show_4')
    // 	anchorElement.scrollIntoView({behavior: 'smooth'});
    // }
    return scrollTop;
}
	componentDidMount() {
	    // 调用
	    if (this.carouselRef){ this.carouselRef.next()};
	    window.addEventListener('scroll', this.handleScroll.bind(this));
	}
	CarouselChange(){
		console.log(this.state)
		if (this.carouselRef) {this.carouselRef.slickNext()};
	}

	handleEnter(shadeid){
		switch(shadeid)
		{
			case 1:
			this.setState({
				bool1:true
			})
			break;
			case 2:
			this.setState({
				bool2:true
			})
			break;
			case 3:
			this.setState({
				bool3:true
			})
			break;
		}
		
	}
	handleOut(shadeid){
		switch(shadeid)
		{
			case 1:
			this.setState({
				bool1:false
			})
			break;
			case 2:
			this.setState({
				bool2:false
			})
			break;
			case 3:
			this.setState({
				bool3:false
			})
			break;
		}
	}
	

	render() {
		let style1 = {};let style2= {};let style3 = {} ;let style11 = {};let style22 = {};let style33 = {};
		if (this.state.bool1) {
			style1 = {
			opacity:0.7,
	        backgroundColor: 'black',
	        transition: 'all 0.4s'
	      }
	      	style11 = {
	      		background: '#FFFFFF',
				boxShadow: '0 4px 8px 0 #ADD2F7',
				transition: 'all 0.2s'
	      	}
		}else {
			style1 = {
	      	 opacity:0
	      }
	      style11={}
		}
		if (this.state.bool2) {
			style2 = {
			opacity:0.7,
	        backgroundColor: 'black',
	        transition: 'all 0.4s'
	      }
	      style22 = {
	      		background: '#FFFFFF',
				boxShadow: '0 4px 8px 0 #ADD2F7',
				transition: 'all 0.2s'
	      	}
		}else {
			style2 = {
	      	 opacity:0
	      }
		}
		if (this.state.bool3) {
			style3 = {
			opacity:0.7,
	        backgroundColor: 'black',
	        transition: 'all 0.4s'
	      }
	      style33 = {
	      		background: '#FFFFFF',
				boxShadow: '0 4px 8px 0 #ADD2F7',
				transition: 'all 0.2s'
	      	}
	      
		}else {
			style3 = {
	      	 opacity:0
	      }
		}
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 1,
			autoplay: true,
		};
		return(
			<div>
				<IndexHeader/>
				<div className="carousel">
					<Carousel {...settings} ref={this.setCarouselRef}>
					    <div className="carouselitem">
					    	<div className="carouselitem-shade"></div>
					    	<img src="/static/images/1shouyebanner .png"  alt=""/>
					    	<div className="carousel-font">
							 	<div className="carousel-title">
							 		专业的医药数字化媒体营销技术服务商
							 	</div>
							 	<div className="carousel-title2">全域产品矩阵、多平台数据联通共享</div>
							 </div>
							 <div className="carousel-button">
							 		<a href="/">
							 			<Link  to={`/CasePage`}>
							 			查看案例
							 			</Link>
							 		</a>
							 		<a href="/">
							 			
							 				<span>快速了解</span>
							 			
							 		</a>
							 </div>
							{/*<div className="carousel-next-button" onClick={this.CarouselChange}>
							 	<img src="/static/images/index/bannerqiehuan-you.png" alt=""  />
							 </div>*/}
					    </div>
					    <div className="carouselitem">
					    	<div className="carouselitem-shade"></div>
					   		<img src="/static/images/2shouyebanner .png" alt=""/>
					   		<div className="carousel-font">
							 	<div className="carousel-title">
							 		专注医药销售数据分析
							 	</div>
							 	<div className="carousel-title2">让销售数据驱动业务智能决策</div>
							 </div>
							 <div className="carousel-button">
							 		<a href="/">

							 			查看案例
							 		</a>
							 		<a href="/">
							 			<span>快速了解</span>
							 		</a>
							 </div>
					    </div>
					    <div className="carouselitem">
					    	<div className="carouselitem-shade"></div>
					    	<img src="/static/images/3shouyebanner .png" alt=""/>
					    	<div className="carousel-font">
							 	<div className="carousel-title">
							 		拓宽医药销售渠道网络
							 	</div>
							 	<div className="carousel-title2">提升销售价值，加强药企药品销售的数据附加价值</div>
							 </div>
							 <div className="carousel-button">
							 		<a href="/">
							 			查看案例
							 		</a>
							 		<a href="/">
							 			<span>快速了解</span>
							 		</a>
							 </div>
					    </div>
					 </Carousel>
				 </div>
				 
				 <div className="middleLogo">
				 	<div className="middleLogo-font">在中国，医药销售应该这么做</div>
				 	<div className="middleLogo-pic"><img src="/static/images/index/xiangxiajiantou.png" alt=""/></div>
				 </div>

				 <div style={this.state.bottomstyle} className="IndexBottom">
				 	<div className="IndexBottom-button">
				 		<a href="/">体验demo</a>
				 	</div>
				 	<div className="IndexBottom-button2">
				 		<a href="/">联系客服</a>
				 	</div>
				 	<div className="IndexBottom-font">
				 		<span href="/">187-6811-9456</span>
				 	</div>
				 </div>

				 <div className="Index_detail_num" id="Index_detail_num">
				 <div class='Index_detail_num_box'>
				 	<div className="Index_detail_num_back">
					 	<div className="Index_detail_num_1">
					 		<img className="Index_detail_num_pic" src="/static/images/index/circle.png" alt=""/>
					 		<div className="Index_detail_num_num">888+</div>
					 		<div className="Index_detail_num_title">家制药企业用户</div>
					 	</div>
					 	<div className="Index_detail_num_1">
					 		<img className="Index_detail_num_pic" src="/static/images/index/circle.png" alt=""/>
					 		<div className="Index_detail_num_num">888+</div>
					 		<div className="Index_detail_num_title">已分析销售数据</div>
					 	</div>
					 	<div className="Index_detail_num_1">
					 		<img className="Index_detail_num_pic Body_num_top_pic" src="/static/images/index/circle.png" alt=""/>
					 		<div className="Index_detail_num_num">888+</div>
					 		<div className="Index_detail_num_title">互联网营销方案</div>
					 	</div>
					 	<div className="Index_detail_num_1">
					 		<img className="Index_detail_num_pic" src="/static/images/index/circle.png" alt=""/>
					 		<div className="Index_detail_num_num">888+</div>
					 		<div className="Index_detail_num_title">入驻医生和药师</div>
					 	</div>
				 	</div>
				 	</div>
				 </div>
				 <div className="Index_detail_card">
				 	<div style={style11} className="Index_detail_card_item" onMouseEnter={this.handleEnter.bind(this,1)
}  onMouseLeave={this.handleOut.bind(this,1)}>

				 		<img className="Index_detail_card_item_pic" src="/static/images/index/zuotu.png" alt=""/>
				 		<div style={style1} className="Index_detail_card_item_shade">
				 			建站、H5、小程序、公众号全方位营销，一键托管数据互通。
				 		</div>
				 		<div className="Index_detail_card_item_word">数字化媒体营销</div>
				 	</div>
				 	
				 	<div style={style22} className="Index_detail_card_item" onMouseEnter={this.handleEnter.bind(this,2)
}  onMouseLeave={this.handleOut.bind(this,2)}>
				 		<img className="Index_detail_card_item_pic" src="/static/images/index/zhongtu.png" alt=""/>
				 		<div style={style2} className="Index_detail_card_item_shade">
				 			全国销售数据轻松整合，智能销售分析模型和报表，智能销售佣金奖金设置，联通代理商
				 		</div>
				 		<div className="Index_detail_card_item_word">智能流向数据分析</div>
				 	</div>
				 	<div style={style33} className="Index_detail_card_item" onMouseEnter={this.handleEnter.bind(this,3)
}  onMouseLeave={this.handleOut.bind(this,3)}>
				 		<img className="Index_detail_card_item_pic" src="/static/images/index/youtu.png" alt=""/>
				 		<div style={style3} className="Index_detail_card_item_shade">
				 			拓宽销售渠道，为企业找到更多机会，让销售更简单。
				 		</div>
				 		<div className="Index_detail_card_item_word">拓宽销售渠道</div>
				 	</div>
				 </div>
				 <div className="Index_detail_banner">
				 	<img className="Index_detail_card_item_pic" src="/static/images/4shouye banner.png" alt=""/>
				 	<div className="Index_detail_banner_shade"></div>
				 	<div className="Index_detail_banner_word_1">全面覆盖医药销售链</div>
				 	<div className="Index_detail_banner_word_2">互联网可以让医药销售更简单，更高效!</div>
				 </div>
				 <div className="Index_detail_show" id="Index_detail_show_1">
				 	<div className="Index_detail_show_word">数字化媒体营销</div>
				 	<div className="Index_detail_show_pic">
				 		<div className="Index_detail_show_pic_left displayleft"> 
				 			<img  className src="/static/images/index/shouji.png" alt=""/>
				 		</div>
				 		<div className="Index_detail_show_small displayleft">
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft">
				 					<img  src="/static/images/index/Slice 13.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>一键部署建站</h3>
					 				<p>一键搭建企业官网，小程序，公众号，H5活动页</p>
					 			</div>
				 			</div>
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft">
				 					<img  src="/static/images/index/Slice 14.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>推广营销数据互通</h3>
					 				<p>让企业主看到广告投放的资金的真实效益，把握目标客户</p>
					 			</div>
				 			</div>
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft">
				 					<img  src="/static/images/index/Slice 15.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>用户运营</h3>
					 				<p>通过爆款互动、积分体系、健康主题构建属于医药企业的全面、有效的用户运营体系</p>
					 			</div>
				 			</div>
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft">
				 					<img  src="/static/images/index/shouyeicon1.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>医药知识传播</h3>
					 				<p>直播、管理、资讯、广告分发、企业内训 一站服务，满足医药营销多种需求</p>
					 			</div>
				 			</div>
				 			
				 		</div>
				 	</div>
				 </div>
				 <div className="Index_detail_show_2" id="Index_detail_show_2">
				 <div class='show2background'>
				 	<div className="Index_detail_show_word paddingtop"> 智能销售数据分析</div>
				 	<div className="Index_detail_show_pic_2">
				 		
				 		<div className="Index_detail_show_small displayleft">
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft wihtebkc">
				 					<img  src="/static/images/index/Slice 16.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>销售数据智能采集</h3>
					 				<p>自动抓取全国销售数据，一键管理，数据清洗，统一格式</p>
					 			</div>
				 			</div>
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft wihtebkc">
				 					<img  src="/static/images/index/Slice 17.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>多维数据报表</h3>
					 				<p>多维度/精细化销售管理体系，使销售更智能；移动办公，提高销售人员效率</p>
					 			</div>
				 			</div>
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft wihtebkc">
				 					<img  src="/static/images/index/Slice 18.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>医药销售SFE</h3>
					 				<p>优化销售路径，按照区域层级细化销售管控，优化奖金，返利模型</p>
					 			</div>
				 			</div>
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft wihtebkc">
				 					<img  src="/static/images/index/Slice 19.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>渠道伙伴联通</h3>
					 				<p>联通各级代理商，管理辖区，指标，特例，挂靠； 上下游紧密合作</p>
					 			</div>
				 			</div>
				 		</div>
				 		<div className="Index_detail_show_pic_2_right displayleft"> 
				 			<img  className src="/static/images/index/shujufenxi.png" alt=""/>
				 			<div className=""><div>多维销售数据分析模型    医药销售决策更智能</div></div>
				 		</div>
				 	</div>
				 	</div>
				 </div>
				<div className="Index_detail_show" id="Index_detail_show_3">
				<div class='show3background'>
				 	<div className="Index_detail_show_word">医药新零售，拓宽销售渠道</div>
				 	<div className="Index_detail_show_pic">
				 		<div className="Index_detail_show_pic_left displayleft"> 
				 			<img  className src="/static/images/index/shouji2.png" alt=""/>
				 		</div>
				 		<div className="Index_detail_show_small displayleft margintop">
				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft">
				 					<img  src="/static/images/index/Slice 20.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>药企——>医院——>消费者</h3>
					 				<p>帮助药企加强和医院合作， 提升药企品牌影响</p>
					 			</div>
				 			</div>

				 			<div className="Index_detail_show_small_pic">
				 				<div className="Index_detail_show_small_pic_back displayleft">
				 					<img  src="/static/images/index/shouyeicon.png" alt=""/>
				 				</div>
				 				<div className="Index_detail_show_small_word displayleft">
					 				<h3>药企——>药店——>消费者</h3>
					 				<p>提升药师药店销售附加价值，构建医药新零售</p>
					 			</div>
				 			</div>
				 		</div>
				 	</div>
				 </div>
				</div>
				<div className="Index_detail_show" id="Index_detail_show_4">
				<div class='show4background'>
				 	<div className="Index_detail_show_word">医药领域领航者 我们更专业</div>
				 	<div className="Index_detail_show_word_small">以下企业已经使用了我们的产品</div>
				 	<ul	class="companyIconShow">
				 		<li>
				 			<img src={require("../images/CompanyLogo/qilu.png")} />
				 			<div>齐鲁制药</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/shanghaiyiyao.png")} />
				 			<div>上海医药集团股份有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/luoshi.png")} />
				 			<div>罗氏</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/huirui.png")} />
				 			<div>辉瑞</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/hengrui.png")} />
				 			<div>恒瑞</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/xinan.png")} />
				 			<div>西南药业股份有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/yangzijiang.png")} />
				 			<div>扬子江药业集团有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/yunnanbaiyao.png")} />
				 			<div>云南白药集团股份有限公司</div>
				 		</li>				 		
				 		<li>
				 			<img src={require("../images/CompanyLogo/jiangshuhaoseng.png")} />
				 			<div>豪森医药集团</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/moshadong.png")} />
				 			<div>默沙东</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/baier.png")} />
				 			<div>拜耳</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/kelun.png")} />
				 			<div>科伦集团</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/zhengdatianqin.png")} />
				 			<div>正大天晴药业集团</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/hayao.png")} />
				 			<div>哈药集团有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/kangmei.png")} />
				 			<div>康美药业股份有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/xingfu.png")} />
				 			<div>清华德人西安幸福制药有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/shanghaifuxing.png")} />
				 			<div>上海复星医药(集团)股份有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/baiyunshan.png")} />
				 			<div>广州白云山医药集团股份有限公司</div>
				 		</li>
				 		<li>
				 			<img src={require("../images/CompanyLogo/asilikang.png")} />
				 			<div>阿斯利康</div>
				 		</li>
				 	</ul>
				 	</div>
				</div>
				<div className="Index_detail_banner_bottom">
				 	<img className="Index_detail_banner_bottom_pic" src="/static/images/5shouye banner.png" alt=""/>
				 	<div className="Index_detail_banner_bottom_shade"></div>
				 	<div className="Index_detail_banner_bottom_word_1">更多专业订制方案</div>
				 	<div className="Index_detail_banner_bottom_word_2" id="screens">
				 		<a href="/">

				 			<span>免费试用</span>
				 		</a>
				 	</div>
				</div>
				<IndexFooter/>
			</div>
		);
	};
}

