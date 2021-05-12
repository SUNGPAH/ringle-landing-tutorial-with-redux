import React, {} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setCurrentCategoryId} from '../../reducers/user';

const classNames = require("classnames");
const Category = ({category}) => {
  const dispatch = useDispatch();
  const currentCategoryId = useSelector(state => state.user.currentCategoryId);

  const onClick = (id) => {
    dispatch(setCurrentCategoryId(id));
  }

  return <div className={classNames({category:true, active: category.id === currentCategoryId})} 
  onClick={e => {onClick(category.id)}}>{category.title}</div>
}

export default Category