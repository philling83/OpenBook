import React from 'react'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
    return (
        <div class='sideBarDiv'>
            <div class='sideDiv joinClassDiv'>
                {/* <a class='joinText' href='/teacher/createClass'>Create Class</a> */}
                <NavLink className='joinText' to='/teacher/createClass'>Create Class</NavLink>
            </div>
            <div class='sideDiv reportDiv'>Reports</div>
            <a class='sideDiv libraryDiv' href='/libraries'>Openbook Library</a>
        </div>
    )
}

export default SideBar;
