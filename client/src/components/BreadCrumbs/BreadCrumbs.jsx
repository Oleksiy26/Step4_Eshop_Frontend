import React from 'react'
// import Breadcrumbs from '@mui/material/Breadcrumbs'
// import Link from '@mui/material/Link'
// import Typography from '@mui/material/Typography'
import { useBreadCrumb } from '../../hooks/useBreadCrumb'

// not finished

const NavigatePanel = ({ startFrom }) => {
    const { navigate, pathNames, reNavigate } = useBreadCrumb()
    return (
        <div>
            <span
                style={{ cursor: 'pointer', textDecoration: 'none' }}
                onClick={reNavigate}
            >
                {startFrom}
            </span>
            {pathNames.map((pathname, index) => {
                const routeTo = `/${pathNames.slice(0, index + 1).join('/')}`
                const isLast = index === pathNames.length - 1
                return isLast ? (
                    <span key={pathname}>{pathname}</span>
                ) : (
                    <span
                        style={{ cursor: 'pointer' }}
                        key={index}
                        onClick={() => navigate(routeTo)}
                    >
                        {pathname}
                    </span>
                )
            })}
        </div>
    )
}

export default NavigatePanel