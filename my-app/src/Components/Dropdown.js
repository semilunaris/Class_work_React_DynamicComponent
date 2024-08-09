import React, {Component} from 'react'
import 'Components/Dropdown.css'


class Dropdown extends Component {
    state = {
        visible: false
    }

    toggle = () => {
        this.setState(prevState => ({
            visible: !prevState.visible
        }))
    }

    // show =()=>{
    //     this.setState({visible: true})
    // }

    // hide =()=>{
    //     this.setState({visible: false})
    // }


    render(){
        return(
             <div className='Dropdown'>
                 <button type='button' className='Dropdown__togle' onClick={this.toggle}>
                  {this.state.visible? 'скрыть':'показать'}
                 </button>
               
                 {
                    this.state.visible&&<div className='Dropdown__menu'>меню</div>   
                 }  
             </div> )
    }
}

export default Dropdown