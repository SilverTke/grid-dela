const products = await fetch("https://fakestoreapi.com/products")
	.then((res) => res.json())
	.then((j) => j.slice(0, 10));

export default products;
