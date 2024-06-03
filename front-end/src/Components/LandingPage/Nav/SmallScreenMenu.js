/*
    This module contains the SmallScreenMenu Component.
    This component contains the menu that we see in the small screens.
*/
import React from 'react'
import { DropdownMenu, DropdownItem, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const SmallScreenMenu = () => (
    //use of the Dropdown component to come up with a dropdown button containing all the menu options
    <Dropdown text='Menu' className='button' id="signUpButton">
        <DropdownMenu className='left'>
            <a href="#home">
                <DropdownItem>
                    <span>Home</span>
                </DropdownItem>
            </a>
            <a href="#features">
                <DropdownItem>
                    <span>Features</span>
                </DropdownItem>
            </a>
            <a href="#featuredContent">
                <DropdownItem>
                    <span>Featured Content</span>
                </DropdownItem>
            </a>
            <a href="#FAQ">
                <DropdownItem>
                    <span>FAQ</span>
                </DropdownItem>
            </a>
            <a href="#contacts">
                <DropdownItem>
                    <span>Contacts</span>
                </DropdownItem>
            </a>
            <Link to="/signIn">
                <DropdownItem>
                    <span>Sign In</span>
                </DropdownItem>
            </Link>
            <Link to="/signUp">
                <DropdownItem>
                    <span>Sign Up</span>
                </DropdownItem>
            </Link>
        </DropdownMenu>
    </Dropdown>
);

export default SmallScreenMenu;