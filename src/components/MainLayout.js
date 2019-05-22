import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import NavBar from './NavBar';
import SideBar from './SideBar';

const MainLayout = props => (
    <div id="pcoded" class="pcoded">
        <div class="pcoded-overlay-box"></div>
        <div class="pcoded-container navbar-wrapper">
            <NavBar />
            <div class="pcoded-main-container">
                <div class="pcoded-wrapper">
                    <SideBar />
                    <div class="pcoded-content">
                        {props.children}
                    </div>
                    <div id="styleSelector">
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default MainLayout;
