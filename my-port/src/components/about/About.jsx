import "./about.css"
import Award from "../../img/award.jpg"

const About = () => {
  return <div className="a">
      <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
              <img src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="a-img" />
          </div>
      </div>
      <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
            It is a long phrase that the client will be distracted so much by the readable content......................
          </p>
          <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent blandit auctor tellus, eu cursus dui volutpat eu. Suspendisse ac nisl tristique lorem tempor dictum. 
          Nunc sit amet vehicula felis. Fusce quis auctor felis. Fusce elementum vehicula sapien a blandit. In tristique odio sed aliquet vestibulum. 
          Aliquam ac vulputate orci. Nullam feugiat feugiat diam.
          </p>
          <div className="a-award">
            <img src={Award} alt="" className="a-awards-img" />
            <div className="a-award-texts">
                <h4 className="a-award-title">Web & design</h4>
                <p className="a-award-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                </p>
            </div>
          </div>
      </div>
  </div>;
};

export default About;
