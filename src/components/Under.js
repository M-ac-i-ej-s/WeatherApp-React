import {FaSun, FaArrowDown,FaArrowUp, FaWind, FaCloud} from 'react-icons/fa'

const Under = ({windDir, windSpeed, cloudsPer, sunRise, sunSet}) => {

    const convertHMS = (value) => {
        var date = new Date(value * 1000);
        return date.toLocaleTimeString();
    }
    const direction = (value) => {
          if(0<=value<45 || 315<value<360) return "North"
          if(45<=value<135) return "West"
          if(135<=value<225) return "South"
          if(225<=value<315) return "East"
    }
    return (
      <div className="container">
          <div id="Wind">
              <p><FaWind style={{marginLeft: "55px", fontSize: "40px", marginTop: "20px"}}></FaWind></p>
              <p style={{marginTop:"65px",marginLeft: "30px", fontSize: "20px"}}>{windSpeed} km/h</p>
              <p style={{marginTop:"85px",marginLeft: "50px", fontSize: "20px"}}>{direction(windDir)}</p>
          </div>
          <div id="clouds">
              <p><FaCloud style={{marginLeft: "54px", fontSize: "40px", marginTop: "20px"}}></FaCloud></p>
              <p style={{marginTop:"65px",marginLeft: "50px", fontSize: "30px"}}>{cloudsPer}%</p>
          </div>
          <div id="SunRiseSet">
              <p><FaSun style={{marginLeft: "210px", fontSize: "35px", marginTop: "10px"}}/><FaArrowDown style={{ fontSize: "30px"}}/></p>
              <p><FaSun style={{marginLeft: "50px", fontSize: "35px", marginTop: "10px"}}/><FaArrowUp style={{ fontSize: "30px"}}/></p>
              <p style={{marginLeft: "186px", fontSize: "28px", marginTop: "65px"}}>{convertHMS(sunRise)}</p>
              <p style={{marginLeft: "32px", fontSize: "28px", marginTop: "65px"}}>{convertHMS(sunSet)}</p>
          </div>
      </div>
    )

  }
  
  export default Under
  