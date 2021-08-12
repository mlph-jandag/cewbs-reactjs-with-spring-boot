import React, { useState } from 'react'
import { useEffect } from 'react'

const Pagination = ({totalPages = 0,currentPage,first, last, navigate}) => {
    
    const pageList = (pages) => {
        let list = []
        for(let x = 0; x < pages; x++) {
            let classes = ["page-item"]
            if(currentPage === x)
                classes.push("btn-custom")
            list.push(
                <li key={x} className={classes.join(" ")}><button onClick={() => navigate(x)} className="page-link">{x + 1}</button></li>
            );
        }
        return list
    }
    
    return (
        <div>
            <ul className="pagination justify-content-end">
                <li className={first ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={() => navigate(currentPage-1)} tabIndex="-1"><i className="fa fa-chevron-left"></i></button>
                </li>
                { pageList(totalPages) }
                <li className={last ? "page-item disabled" : "page-item"}>
                    <button className="page-link" onClick={() => navigate(currentPage+1)}><i className="fa fa-chevron-right"></i></button>
                </li>
            </ul>
        </div>
    )
}

export default React.memo(Pagination)
