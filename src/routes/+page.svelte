<script lang="ts">
	import type { Product } from '$lib/models/Product';

	let products: Product[] = [
		{
			id: "t-shirt",
			name: 'T-Shirt',
			description: 'A cool t-shirt',
			price: 99000,
			currencyUnit: 'LAK',
			imageUrl:
				'https://img.freepik.com/free-psd/isolated-white-t-shirt-front-view_125540-1194.jpg?w=2000&t=st=1690625291~exp=1690625891~hmac=8fbd9191974c372c2a414e7a57a9f82e8f0ba86f9dd0454bab34b7440a916af9'
		},
		{
			id: "bottle",
			name: 'Bottle',
			description: 'A cool bottle',
			price: 199000,
			currencyUnit: 'LAK',
			imageUrl: 'https://img.freepik.com/free-psd/isolated-rectangle-carpet-shape_176382-1236.jpg'
		},
		{
			id: "mouse-pad",
			name: 'Mouse Pad',
			description: 'A cool Mouse Pad',
			price: 199000,
			currencyUnit: 'LAK',
			imageUrl: 'https://img.freepik.com/free-psd/transparent-bottle-water_125540-2834.jpg'
		}
	];
</script>

<h2 class="text-4xl">Features</h2>
<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-8">
	{#each products as product}
		<a class="flex" href={`/products/${product.id}`}>
			<div class="rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
				<img class="object-cover w-full h-2/3" src={product.imageUrl} alt={product.name} />
				<div class="p-4 space-y-2">
					<h3 class="text-xl md:text-2xl">{product.name}</h3>
					<p>
						{Intl.NumberFormat('lo', {
							style: 'currency',
							currency: product.currencyUnit
						}).format(product.price)}
					</p>
				</div>
			</div>
		</a>
	{/each}
</div>
