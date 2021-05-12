import React from 'react';
import Category from './Category';

const CourseCategories = ({categories}) => {
  return <div className="flex fdr jcc">
    {categories.map((category, index) => <Category 
    category={category} 
    key={index}/>)}
  </div>
}

export default CourseCategories
