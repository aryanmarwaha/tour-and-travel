import MyIntroductionVideo from "../../assets/images/video_screenRecod.mp4";
import "../../styles/about.css";

const About = ()=>{
    return <div className="aboutContainer">
        <video width={"80%"} src={MyIntroductionVideo} alt="" controls />
    </div>
}

export default About;