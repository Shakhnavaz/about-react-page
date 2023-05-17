import React from "react"


export default function Main() {
    return(
        <>
        <div className="bg-slate-800 p-6 text-white font-bold rounded-lg bg-bigicon bg-no-repeat bg-right">
            <div className="my-2 text-4xl tracking-tighter">Fun facts about React</div>
            <ul role="list" className="my-10 marker:text-sky-400 list-disc pl-9 space-y-4 font-extralight">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        
        </>
    )
}