<script lang="ts">
	import { page } from '$app/stores';
	import type { Product } from '$lib/models/Product';

	// TODO: Make this type-safe
	let products: Product[] = $page.data.products;
</script>

<h2 class="text-4xl">Features</h2>
{#if products.length > 0}
	<div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 my-8">
		{#each products as product}
			<a class="flex" href={`/products/${product.id}`}>
				<div
					class="rounded shadow transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110"
				>
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
	{:else}
	<div class="my-8">
		<p>No product available at the moment haiyaaa...</p>
	</div>
{/if}
