import React from "react"
import icon from '../assets/reactjs-icon.png'

export default function Navbar() {
    return(
        <>
         


        <div className="flex justify-between items-center rounded-lg p-6 h-20 w-100% bg-slate-900">
            <div className="flex justify-stretch w-20">
                <img src={icon} className="p-1" />
                <div className="blue text-2xl font-bold text-cyan-400">ReactFacts</div>
            </div>
            <div className="font-semibold text-slate-100">React Course - Project 1</div>

        </div>
        </>
    )
}