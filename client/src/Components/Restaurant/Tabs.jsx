import React from "react";
import classNames from "classnames";
import { useParams, Link, useLocation } from "react-router-dom";

const Tab = (props) => {
    const location = useLocation();
    const { id } = useParams();
    const isActive = location.pathname.includes(props.route);
    return (<>
        <Link to={`/restaurant/${id}/${props.route}`}>
            <div className={classNames(" h-full w-auto px-6  text-xl text-gray-600   over", {
                "border-b-4 border-red-400": isActive,
            })}>
                {props.tabName}
            </div>
        </Link>
    </>)
}

const Tabs = (props) => {
    const tabList = [{
        tabName: "Overview",
        route: "overview",
        activeColor: "cyan-100",
        color: "gray-300"
    }, {
        tabName: "OrderOnline",
        route: "order-online",
        activeColor: "cyan-100",
        color: "gray-300"
    }, {
        tabName: "Reviews",
        route: "reviews",
        activeColor: "cyan-100",
        color: "gray-300"
    }, {
        tabName: "Photos",
        route: "photos",
        activeColor: "cyan-100",
        color: "gray-300"
    }, {
        tabName: "Menu",
        route: "menu",
        activeColor: "cyan-100",
        color: "gray-300"
    }]


    return (<>
        <div className="w-full flex  align-center lg:justify-center  md:overflow-hidden overflow-x-auto">
            <div className="w-full lg:w-4/5 h-11 flex flex-row gap-3 m-2  border-b-2">
                {
                    tabList.map((prop, index) => {
                        return (
                            <Tab {...prop} key={index}></Tab>
                        )
                    })
                }
            </div>

        </div>



    </>)
}

export default Tabs;