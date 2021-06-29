import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
    render() {
        return(
            <li>
                <Link className='navlink' to={this.props.path}>
                    {this.props.display}
                </Link>
            </li>
        )
    }
}
export default NavItem;