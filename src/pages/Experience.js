import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date = "2022 - 2023"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Australian National University, Canberra, Australia
          </h3>
          <p> Master of Computing (Advanced) </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date = "2016 - 2018"
        iconStyle={{ background: '#dda15e', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Zoomy Media International, Shanghai, China
          </h3>
          <p> Technical Client Manager </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date = "2015 - 2016"
        iconStyle={{ background: '#dda15e', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Avazu Holding, Shanghai, China
          </h3>
          <p> Technical Support Engineer </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        date = "2014 - 2015"
        iconStyle={{ background: '#dda15e', color: '#fff' }}
        icon={<WorkIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Dofun, Shanghai, China
          </h3>
          <p> Web Engineer </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
        className="vertical-timeline-element--education"
        date = "2012 - 2014"
        iconStyle={{ background: '#3e497a', color: '#fff' }}
        icon={<SchoolIcon />}
        >
          <h3 className = "vertical-timeline-element-title">
            Osmania University, Hyderabad, India
          </h3>
          <p> Master of Computer Science </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>
  )
}

export default Experience