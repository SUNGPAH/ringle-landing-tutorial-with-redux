import React from 'react';
import CourseCard from './CourseCard';
import {useSelector} from 'react-redux';

const CourseListWithCategory = ({courses, categoryId}) => {
  const currentCategoryId = useSelector(state => state.user.currentCategoryId);

  if(categoryId !== currentCategoryId) {
    return <></>
  }

  return <div style={{overflowX:'visible',
  whiteSpace: 'nowrap',
  display:'inline-block',width:'100%', marginTop:16, marginBottom:16,}}>{courses.map((course,index) => {
    return <CourseCard course={course} key={index}/>
  })}</div>
}

export default CourseListWithCategory 