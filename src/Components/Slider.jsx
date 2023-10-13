import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
import img1 from "../Images/1.jfif"
import img2 from "../Images/2.jfif"
import img3 from "../Images/3.jfif"
import img4 from "../Images/4.jfif"
import img5 from "../Images/5.jfif"

 const Slider = ()=> {
    const [sliderRef] = useKeenSlider(
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout
          let mouseOver = false
          function clearNextTimeout() {
            clearTimeout(timeout)
          }
          function nextTimeout() {
            clearTimeout(timeout)
            if (mouseOver) return
            timeout = setTimeout(() => {
              slider.next()
            }, 2000)
          }
          slider.on("created", () => {
            slider.container.addEventListener("mouseover", () => {
              mouseOver = true
              clearNextTimeout()
            })
            slider.container.addEventListener("mouseout", () => {
              mouseOver = false
              nextTimeout()
            })
            nextTimeout()
          })
          slider.on("dragStarted", clearNextTimeout)
          slider.on("animationEnded", nextTimeout)
          slider.on("updated", nextTimeout)
        },
      ]
    )
  
    return (
      <>
        <div ref={sliderRef} className="keen-slider" style={{heigth:"400px",width:"90%",margin:"auto"}} >
          <div className="keen-slider__slide number-slide1">
            <img src={img1} alt="no i,age" style={{width:"100%",height:"100%"}}/>
          </div>
          <div className="keen-slider__slide number-slide3"><img src={img3} alt="no i,age" style={{width:"100%",height:"100%"}}/></div>
          <div className="keen-slider__slide number-slide4"><img src={img4} alt="no i,age" style={{width:"100%",height:"100%"}}/></div>
          <div className="keen-slider__slide number-slide5"><img src={img5} alt="no i,age" style={{width:"100%",height:"100%"}}/></div>
          <div className="keen-slider__slide number-slide2">2</div>
        </div>

        <br/><br/>
      </>
    )
  }
  export default Slider;
