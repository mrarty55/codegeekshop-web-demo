<script lang="ts">
	import { page } from '$app/stores';
	import type { Product } from '$lib/models/Product';

	let product: Product = $page.data.product;

  function onOpenApp() {
    window.open(`codegeek://app/products/${product.id}`)
  }
</script>

{#if product != null}
	<title>{product.name} | CodeGeek</title>
	<meta name="description" content={`${product.description}`} />
	<meta name="og:title" content={`${product.name} | CodeGeek`} />
	<meta name="og:type" content="website" />
	<meta name="og:description" content={`${product.description}`} />
	<meta name="og:image" content={`${product.imageUrl}`} />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={`${product.name} | CodeGeek`} />
	<meta
		name="twitter:description"
		content={`${product.description}`}
	/>
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
				<button class=" border-solid border-2 border-black rounded-full px-4 py-2" on:click={onOpenApp}
					>Open in App</button
				>
			</div>
			<p>{product.description}</p>
		</div>
	</div>
{:else}
	<title>404 | CodeGeek</title>
	<div>
		<p>No product found haiyaaa!</p>
	</div>
{/if}
