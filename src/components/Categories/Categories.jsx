import React from 'react';
import Category from '../Category/Category';

const Categories = ({ categories }) => {

	return (
		<section className="max-w-7xl mx-auto mt-12 lg:mt-32 p-4">
			<header>
				<h2 className="content-title text-center">Job Category List</h2>
			</header>
			<p className="content-description text-center mt-4">Looking for job opportunities? Look no further than our Job Category List! With thousands of job openings and all the information you need, it's your go-to resource for exploring job options in various categories. Please give it a try.</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
				{
					categories.map((category) => <Category key={category.category_id} category={category}></Category>)
				}
			</div>
		</section>
	);
};

export default Categories;