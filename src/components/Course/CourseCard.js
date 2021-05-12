import React from 'react';

const CourseCard = ({course}) => {
  return <div style={{}} className="courseCard">
    <div className="flex fdc">
      <img src={course.image_url} alt="" style={{objectFit:'cover', height:160,}}/>
      <div className="plr-3">
        <div style={{whiteSpace: "initial", color:'black', fontWeight:600, marginTop:16}}>{course.title}</div>
        <div style={{whiteSpace: "initial", color:'#869ab8', marginTop:8,}}>{course.subtitle}</div>
      </div>
    </div>
  </div>
}


export default CourseCard