import React ,{ Component } from 'react';
import {Link} from "react-router-dom";
//images
import logo from '../images/logo.svg';
import {FaAlignRight} from 'react-icons/fa';




export default class Navbar extends Component {

    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
           isOpen:false
        };
    }

    handleToggle  = () => {
        this.setState({
            isOpen:!this.state.isOpen
        });
        console.log(this.state.isOpen);
    };


    render (){
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/'>
                        <img src={logo} alt='Beach resort' />
                        </Link>
                        <button type="button" className="nav-btn"
                        onClick={ this.handleToggle} >
                            <FaAlignRight className="nac-icon" />
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}
