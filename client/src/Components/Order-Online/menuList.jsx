import React from 'react';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';

const MenuList = (props) => {
    const { id } = useParams();


    return (
        <a href={`#${props.target + "nav"}`}
            onClick={(event) => {
                props.selectCategory(event);
            }}
            id={props.collectionName}
        >
            <div className={classNames("flex items-center text-base md:text-lg text-gray-400 pl-1 h-full cursor-pointer  truncate text-ellipsis", { "bg-gradient-to-r from-transparent  to-red-100  border-r-2  border-r-red-400 text-red-600": props.isActive })} id={props.target} >
                {props.collectionName} ({props.collectionMenu.length})
            </div>
        </a>
    )
}

export default MenuList;