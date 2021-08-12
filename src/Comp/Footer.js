import React from 'react'

export default function Footer() {
    let style={
        position:"fixed",
        bottom:"0vh",
        width:"100%",
        height:'40px'
    }
    return (
        <footer style={style} className="bg-dark text-light py-3">
            <p className="text-center">footer</p>
        </footer>
    )
}
