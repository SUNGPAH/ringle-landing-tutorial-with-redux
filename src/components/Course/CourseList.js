import React from 'react';
import CourseListWithCategory from './CourseListWithCategory';

const CourseList = ({courseData}) => {
  return <>
  {courseData.courses.map((coursesWithCategoryId, index) => {
    return <CourseListWithCategory 
    key={index}
    courses={coursesWithCategoryId.courses}
    categoryId={coursesWithCategoryId.category_id}/>
  })}
  </>
}

export default CourseList;