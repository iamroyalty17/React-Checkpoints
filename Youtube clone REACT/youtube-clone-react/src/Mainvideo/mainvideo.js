import React from "react";

const Mainvideo = () => {
    return (
        <div classname='col-md-7'>
            <div className='row'>
                <iframe
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/mxK8b99iJTg" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                ></iframe>
            </div>
            <div className='row'>
                <h2>
                    Requisite React:Learn how to use React Hooks,Suspense & JSX -Kent 
                </h2>
            </div>
        </div>
    )
}

export default Mainvideo