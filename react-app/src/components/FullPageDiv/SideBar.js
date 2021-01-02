import React from 'react'

import './SideBar.css'

const SideBar = () => {
    return (
        <div className='sideBarDiv'>
            <div className='sideDiv joinClassDiv'>
                <a className='joinText' href='/teacher/createClass'>Create Class</a>
            </div>
            <div className='sideDiv reportDiv'>Reports</div>
            <a className='sideDiv libraryDiv' href='/libraries'>Openbook Library</a>
        </div>
    )
}

export default SideBar;
