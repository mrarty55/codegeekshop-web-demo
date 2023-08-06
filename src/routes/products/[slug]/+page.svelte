<script lang="ts">
	import type { Product } from '$lib/models/Product';

	let product: Product = {
		id: 't-shirt',
		name: 'T-Shirt',
		description: "A cool t-shirt for a cool geek!",
		price: 99000,
		currencyUnit: 'LAK',
		imageUrl:
			'https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg'
	};
</script>

<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
	<div>
		<img src={product.imageUrl} alt={product.name} />
	</div>
	<div>
		<h3 class="text-4xl mb-4">{product.name}</h3>
		<p class="text-xl mb-4">
			{Intl.NumberFormat('lo', {
				style: 'currency',
				currency: product.currencyUnit
			}).format(product.price)}
		</p>
		<div class="mb-4">
			<button class="bg-black text-white rounded-full px-4 py-2">Add to Card</button>
			<button class=" border-solid border-2 border-black rounded-full px-4 py-2">Open in App</button
			>
		</div>
		<p>{product.description}</p>
	</div>
</div>
