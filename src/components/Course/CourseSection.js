import React, {useState} from 'react';
import CourseCategories from './CourseCategories';
import CourseList from './CourseList';
import {useDispatch, useSelector} from 'react-redux';

const CourseSection = ({courseData}) => {
  const dispatch = useDispatch();

  if (!courseData.courses){
    return <></>
  }

  return <div>
    <div style={{width:900, overflowX:'scroll', margin:'0 auto'}}>
      <CourseCategories 
      categories={courseData.categories} 
      />
    </div>
    <div style={{width:900, overflowX:'scroll', margin:'0 auto'}}>
      <CourseList courseData={courseData}/>
    </div>
  </div>
}

export default CourseSection