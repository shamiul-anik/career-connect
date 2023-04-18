import React from 'react';

const Category = ({ category }) => {
  
  const { category_img, category_name, jobs_available } = category;

  return (
    <div className="flex flex-col justify-center items-center gap-2 p-10 custom-bg rounded-lg custom-box-shadow">
      <div className="custom-card-img-bg p-4 rounded-lg">
        <img src={category_img} alt={category_name} />
      </div>
      <header>
        <h3 className="category-title">{category_name}</h3>
      </header>
      <div>
        <p className="category-description">{jobs_available} Jobs Available</p>
      </div>
    </div>
  );
};

export default Category;