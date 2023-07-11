import React from 'react'
import './Category.scss';
import Input from '../../components/Input';
const Category = () => {
    return (
        <div style={{marginLeft:"20px"}}>
            <h2 className="sidebar-title">Category</h2>
            <div className='sidebar-items'>
                <Input/>
            </div>
        </div>
    )
}

export default Category
