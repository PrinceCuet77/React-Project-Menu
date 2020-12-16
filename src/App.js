import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

// taking unique categories
let allCategories = ['all', ...new Set(items.map((item) => item.category))]

function App() {
	let [menuItem, setMenuItem] = useState(items)
	let [categories, setCategories] = useState(allCategories)

	let filterItems = (category) => {
		if (category === 'all') {
			setMenuItem(items)
			return
		}
		let newItems = items.filter((item) => item.category === category)
		setMenuItem(newItems)
	}

	return (
		<main>
			<section className='menu section'>
				<div className='title'>
					<h2>our menu</h2>
					<div className='underline'></div>
				</div>
				<Categories
					allCategories={allCategories}
					filterItems={filterItems}
				/>
				<Menu items={menuItem} />
			</section>
		</main>
	)
}

export default App
