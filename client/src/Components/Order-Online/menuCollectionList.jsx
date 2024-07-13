import React from 'react';
import MenuList from './menuList';
import { useParams } from 'react-router-dom';

const MenuCollectionList = (props) => {

    return (
        <div className='h-10 md:h-14 font-normal'>
            <MenuList isActive={props.target == props.selected} {...props} />
        </div>


    )
}

export default MenuCollectionList;