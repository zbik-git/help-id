<template>
<div>
    <div class="max-w-md mx-auto pt-32">
      
    {{ articles }}
    
    </div>
</div>
</template>


<script setup>

const articles = ref('')

const getArticles = async () => {
    const resp = await useFetch("/api/articles")
    articles.value = resp}

onMounted(getArticles())

</script>