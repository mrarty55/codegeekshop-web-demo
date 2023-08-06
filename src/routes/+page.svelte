<script lang="ts">
	import { page } from '$app/stores';
	import type { Product } from '$lib/models/Product';

	// TODO: Make this type-safe
	let products: Product[] = $page.data.products;

	let bannerUrl = `${$page.data.host}/banner.webp`;
</script>

<title>CodeGeek by artyboy.dev</title>
<meta
	name="description"
	content="Just a demo website for my session at the I/O Extended 2023 Vientiane event"
/>
<meta name="og:title" content="CodeGeek by artyboy.dev" />
<meta name="og:type" content="website" />
<meta
	name="og:description"
	content="Just a demo website for my session at the I/O Extended 2023 Vientiane event"
/>
<meta name="og:image" content={`${bannerUrl}`} />
<meta name="twitter:card" content="summary" />
<meta name="twitter:title" content="CodeGeek by artyboy.dev" />
<meta
	name="twitter:description"
	content="Just a demo website for my session at the I/O Extended 2023 Vientiane event"
/>

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
