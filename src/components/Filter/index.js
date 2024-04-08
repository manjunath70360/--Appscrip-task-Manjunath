import {Component} from "react"
import './index.css'

import { MdKeyboardArrowDown } from "react-icons/md";

class Filter extends Component {

state = {isidealActive:false, isoccasionActive:false, isworkActive:false, isfabricActive:false, issegementActive:false, issuitableActive:false, israwActive:false, ispatternActive:false}

onChangeIdealView = ()=>{
    this.setState(prevState =>({isidealActive : !prevState.isidealActive}))
}

onChangeoccasionView = ()=>{
    this.setState(prevState =>({isoccasionActive : !prevState.isoccasionActive}))
}
onChangeworkView = ()=>{
    this.setState(prevState =>({isworkActive : !prevState.isworkActive}))
}

onChangefabricView = ()=>{
    this.setState(prevState =>({isfabricActive : !prevState.isfabricActive}))
}
onChangesegmentView = ()=>{
    this.setState(prevState =>({issegementActive : !prevState.issegementActive}))
}
onChangesuitableView = ()=>{
    this.setState(prevState =>({issuitableActive : !prevState.issuitableActive}))
}
onChangerawView = ()=>{
    this.setState(prevState =>({israwActive : !prevState.israwActive}))
}
onChangepatternView = ()=>{
    this.setState(prevState =>({ispatternActive : !prevState.ispatternActive}))
}

    render(){
        const {isidealActive, isoccasionActive, isworkActive, isfabricActive, issegementActive, issuitableActive, israwActive, ispatternActive} = this.state
    return(
        <div className='filter-container'>
            
                <div className="custome-con">
                     <input type='checkbox' className='check'/>
                     <h3 className='side-cus'>CUSTOMER <MdKeyboardArrowDown className="arrowDown" /></h3>
                </div>
                <div className="ideal">
                  
                           <h3 className='side-name'>IDEAL FOR <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangeIdealView}/></h3>
                   
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {isidealActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Men</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Women</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Baby & Kids</p>
                                </div>
                            </div>
                        </>}
                     </div>
                    
                </div>
                <div className="ideal">
                   
                           <h3 className='side-name'>OCCASION <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangeoccasionView}/></h3>
                  
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {isoccasionActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Festivals</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Party</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Functions</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
                <div className="ideal">
                    
                           <h3 className='side-name'>WORK <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangeworkView}/></h3>
                           
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {isworkActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Men</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Women</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Baby & Kids</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
                <div className="ideal">
                  
                           <h3 className='side-name'>FABRIC  <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangefabricView}/> </h3>
                       
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {isfabricActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Cotton</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Polyester</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Jeans</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
                <div className="ideal">
                   
                           <h3 className='side-name'>SEGMENT <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangesegmentView}/> </h3>
                       
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {issegementActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Men</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Women</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Baby & Kids</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
                <div className="ideal">
                  
                           <h3 className='side-name'>SUITABLE FOR <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangesuitableView}/> </h3>
                
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {issuitableActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Men</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Women</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Baby & Kids</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
                <div className="ideal">
                   
                           <h3 className='side-name'>RAW METIRIAL   <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangerawView}/></h3>
                         
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {israwActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Cotton</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Jeans</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Polyester</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
                <div className="ideal">
                           <h3 className='side-name'>PATTREN <MdKeyboardArrowDown className="arrowDown" onClick={this.onChangepatternView}/> </h3>
                     <div className="all">
                        <p className='side-para'>ALL</p>
                        {ispatternActive && <>
                            <div className="unselected-all">
                                <h2 style={{color:"#BFC8CD",textDecoration: "underline", fontSize:'13px'}}>Unselect all</h2>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Strips</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Plane</p>
                                </div>
                                <div  className="men-women-baby-kids">
                                    <input type="checkbox" className='check'/>
                                    <p className='side-paras'>Checks</p>
                                </div>
                            </div>
                        </>}
                     </div>
                </div>
           </div>
            
      
    )
}
}

export default Filter
