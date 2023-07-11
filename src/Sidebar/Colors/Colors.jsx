import React from 'react'
import './Colors.scss';
import Input from '../../components/Input';
const Colors = () => {
    return (
        <div>
            <h2 className="sidebar-title color-title">Color</h2>
            <div className='sidebar-items'>
                <Input />
            </div>
        </div>
    )
}

export default Colors
