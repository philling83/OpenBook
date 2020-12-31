import React from 'react'

const SideBar = () => {
    return (
        <div class='sideBarDiv'>
            <div class='sideDiv joinClassDiv'>
                <a class='joinText' href='/teacher/createClass'>Create Class</a>
            </div>
            <div class='sideDiv reportDiv'>Reports</div>
            <a class='sideDiv libraryDiv' href='/libraries'>Openbook Library</a>
        </div>
    )
}

export default SideBar;
