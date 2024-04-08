import {Component} from 'react'

import Filter from "../Filter"
import Products from "../Products"
import Contact from "../Contact"

import { LuSearch } from "react-icons/lu";
import { GrFavorite } from "react-icons/gr";
import { BsBagDash } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight} from "react-icons/md";
import { BiLogoReact } from "react-icons/bi";



import "./index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

class Home extends Component{

    state = {isFilterHide:true, isrecommendActive:false}

    hideFilter = ()=>{
        this.setState({isFilterHide:false})
    }
    showFilter = ()=>{
        this.setState({isFilterHide:true})
    }
    onClickRecommend = ()=>{
        this.setState(prevState =>({isrecommendActive:!prevState.isrecommendActive}))
    }

    render(){
        const {isFilterHide, isrecommendActive} = this.state
        return(
                <div className='app-container'>
                    <div className='nav-logo-section'>
                        <div className='logo-section'>
                            <BiLogoReact className='logo'/>
                            <h1 className='logo-name'>LOGO</h1>
                            <div className='right-items'>
                            <LuSearch />
                            <GrFavorite />
                            <BsBagDash />
                            <VscAccount className='account'/>
                            <p className='eng'>ENG <MdKeyboardArrowDown size={16}/></p>
                            </div>
                        </div>
                        <div className='nav-section'>
                        <nav className="navbar navbar-expand-sm bg-body-tertiary" id='nav-bar'>
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link active nav-name" aria-current="page" href="#">SHOP</a>
                                    <a className="nav-link nav-name" href="#wew">SKILLS</a>
                                    <a className="nav-link nav-name" href="#wee">STORIES</a>
                                    <a className="nav-link nav-name" href="#wew">ABOUT</a>
                                    <a className="nav-link nav-name" href="#wee">CONTACT US</a>
                                    
                                </div>
                                </div>
                            </div>
                        </nav>
                        </div>
                    </div>
                    <hr/>
                    <div className='content-container'>
                        <div className='discover'>
                            <h1 className='heading'>DISCOVER OUR PRODUCTS</h1>
                            <p className='para'>Lorem ipsum dotor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
                        </div>
                        <hr/>
                        <div className='recommend-sec'>
                            <div className='left-rec'>
                            <h2 className='item'>3425 ITEMS</h2>
                            {isFilterHide ? <h2 className='show-filter' onClick={this.hideFilter}><MdOutlineKeyboardArrowLeft className='arrow' size={16}/>HIDE FILTER</h2> :  <h2 onClick={this.showFilter} className='show-filter'><MdOutlineKeyboardArrowRight className='arrow' size={16}/>SHOW FILTER</h2>  }
                            </div>
                         <> <h2 className='item recommand' onClick={this.onClickRecommend}>RECOMMENDED <MdKeyboardArrowDown size={16} /></h2>
                          {isrecommendActive && <div className='recommend-options'>
                                <p className='recommend-names bold'>RECOMMENDED</p>
                                <p className='recommend-names'>NEWEST FIRST</p>
                                <p className='recommend-names'>POPULAR</p>
                                <p className='recommend-names'>PRICE : HIGH TO LOW</p>
                                <p className='recommend-names'>PRICE : LOW TO HIGH</p>
                            </div>}
                           </> 
                        </div>
                    
                        <hr />

                        <div className='filter-product-section'>
                          {isFilterHide && <Filter />}
                            <Products />

                        </div>
                        <Contact />

                    </div>
                </div>
        )
    }
}

export default Home