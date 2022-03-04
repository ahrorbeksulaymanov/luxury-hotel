import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax'

const ParallaxComp = (props) => {

    return(
        <ParallaxBanner 
            layers={[{image:props.imgsrc, speed: -30}]}
            style={{height:props.height}}
            >
            <div className={props.className}>
                {props.children}
            </div>
        </ParallaxBanner>
    )
}
export default ParallaxComp;