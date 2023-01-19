import Item from "./Components/Item";
import dishes from "./data";
import React, { useState } from "react";
import Radio from "./Components/Radio";
import Range from "./Components/Range";


const categories = [
	"all",
	"burger",
	"hot dog",
	"sandwich",
	"fries",
	"topping",
	"drink",
	"extra",
  ];

function App() {
	const [all, setAll] = useState(dishes);
	// const [categories, setCategories] = useState([]);
	// const [filters, setFilters] = useState([]);
	
	function Filter(dishes , e) {
		let arr = dishes;
		if(e.target.value === "all") {
			setAll(arr);
		}else{
			let arr = dishes.filter((dish) => dish.category === e.target.value);
			setAll(arr);
		}
		
	}

	function FilterRangeMin(dishes , min ) {
		//Between min and max
		console.log('min is' +min);
		let arr = dishes.filter((dish) => dish.price >= min );
		setAll(arr);
		
	}

	function FilterRangeMax(dishes , max ) {
		//Between min and max
		console.log('max is' +max);
		let arr = dishes.filter((dish) => dish.price <= max );
		setAll(arr);
		
	}

	return (
		<main>
			<section className="filters">
				<h1>Burger Place</h1>
				<h2>Filters</h2>
				<fieldset>
					<legend>Range Filter</legend>
					<Range id={'min'} title={'min'}  onChange={(e) => FilterRangeMin(dishes , e.target.value) } />
					<Range id={'max'} title={'max'} onChange={(e) => FilterRangeMax(dishes , e.target.value) } />
				</fieldset>
				<fieldset>
					<legend>Categories Filter</legend>
				{ 
				categories.map((cat) => 
 					<Radio  value={cat} onClick={ (e) => Filter(dishes , e)} />
				)
				}
				</fieldset>
			</section>
			<section className="dishes">
				<h2>Dishes</h2>
				<ul className="grid">
					{ 
					
					all.map( (dish) => 
 						<Item 
						name={dish.name}
						desc={dish.description}
						price={dish.price}
						 />
					)
					}
					
				</ul>
			</section>
		</main>
	);
}

export default App;
