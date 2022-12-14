import React from 'react'
import { Link } from "react-router-dom"
import { useBreadCrumb } from '../../hooks/useBreadCrumb'

const NavigatePanel = ({ startFrom }) => {
    const { navigate, pathNames, reNavigate } = useBreadCrumb()
    return (
        <div>
           <span
                style={{ cursor: 'pointer', textDecoration: 'none' }}
                onClick={reNavigate}
            >
                {startFrom} &#62;
            </span>
            {pathNames.map((pathname, index) => {
                const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
                const isLast = index === pathNames.length - 1
                return isLast ? (
                    <Link key={pathname}> {pathname} </Link>
                ) : (
                    <Link
                        style={{ cursor: 'pointer' }}
                        key={index}
                        onClick={() => navigate(routeTo)}
                    >
                        {pathname}
                    </Link>
                )
            })}
        </div>
    )
}

export default NavigatePanel