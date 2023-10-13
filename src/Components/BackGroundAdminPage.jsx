import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const Stars = () => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
   "fullScreen": {
   "enable": true,
   "zIndex": -1000
          },
   "detectRetina": true,
   "fpsLimit": 120,
   "interactivity": {
   "events": {
   "onClick": {
   "enable": true,
   "mode": "push"
                  },
   "onDiv": {
   "elementId": "repulse-div",
   "enable": false,
   "mode": "repulse"
                  },
   "onHover": {
   "enable": true,
   "mode": "connect",
   "parallax": {
   "enable": false,
   "force": 60,
   "smooth": 10
                      }
                  },
   "resize": true
              },
   "modes": {
   "bubble": {
   "distance": 400,
   "duration": 2,
   "opacity": 0.8,
   "size": 40,
   "speed": 1
                  },
   "connect": {
   "distance": 80,
   "lineLinked": {
   "opacity": 0.5
                      },
   "radius": 60
                  },
   "grab": {
   "distance": 400,
   "lineLinked": {
   "opacity": 1
                      }
                  },
   "push": {
   "quantity": 4
                  },
   "remove": {
   "quantity": 2
                  },
   "repulse": {
   "distance": 200,
   "duration": 0.4
                  }
              }
          },
   "particles": {
   "color": {
   "value": "random"
              },
   "lineLinked": {
   "blink": false,
   "color": "#ffffff",
   "consent": false,
   "distance": 150,
   "enable": false,
   "opacity": 0.4,
   "width": 1
              },
   "move": {
   "attract": {
   "enable": false,
   "rotate": {
   "x": 600,
   "y": 1200
                      }
                  },
   "bounce": false,
   "direction": "none",
   "enable": true,
   "outMode": "out",
   "random": false,
   "speed": 2,
   "straight": false
              },
   "number": {
   "density": {
   "enable": true,
   "area": 800
                  },
   "limit": 500,
   "value": 300
              },
   "opacity": {
   "animation": {
   "enable": false,
   "minimumValue": 0.1,
   "speed": 1,
   "sync": false
                  },
   "random": false,
   "value": 0.5
              },
   "shape": {
   "type": "circle"
              },
   "size": {
   "animation": {
   "enable": false,
   "minimumValue": 0.1,
   "speed": 40,
   "sync": false
                  },
   "random": true,
   "value": 5
              }
          },
   "polygon": {
   "draw": {
   "enable": false,
   "lineColor": "#ffffff",
   "lineWidth": 0.5
              },
   "move": {
   "radius": 10
              },
   "scale": 1,
   "type": "none",
   "url": ""
          },
   "background": {
   "color": "rgb(21 23 25)",
   "image": "",
   "position": "50% 50%",
   "repeat": "no-repeat",
   "size": "cover"
          }
      }
        }/>
    );
};

export default Stars


