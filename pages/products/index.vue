<script setup>
    definePageMeta({
        layout: 'products'
    });

    // Fetch products
    const { data: products } = await useFetch('https://fakestoreapi.com/products')
    useHead({
        title: 'Nuxt Dojo | Merch',
        meta: [
            {name: 'description', content: 'Nuxt 3 Merch'}
        ]
    })

</script>

<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <ProductCard :product="p"/>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>