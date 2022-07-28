<template>
    <main class="w-11/12 mx-auto py-20">
        <article class="relative flex pb-40">
            <div v-if="articlesData" class="w-3/4">
                <h1  class="text-xl">
                    Help
                   
                </h1>
               
                <section v-for="(article, index) in articlesData.articlesList" 
                :key="article.title">
                <h2 :id="index" class="text-xl pt-16">{{ article.title }}</h2>
               
                        <p @mouseover="observerFn()">
                           {{ article.content }}
                           
                        </p>

                    


                </section>
            </div>
            <aside class="w-1/4">
                <div v-if="articlesData" class="sticky top-[80px] pl-10">
                    
                    <a class="block border-l-2 pl-2 space-y-2" v-for="(hd, index) in articlesData.articlesList" 
                    :key="hd.id" 
                    :href="`#${index}`" 
                    :class="{ active:  (index)  == currentSection }"
                    >
                    {{ hd.title }}
                    </a>

                </div>
            </aside>

        </article>
    </main>
</template>

<script setup>

const articlesData = ref(null)

const route = useRoute()

const headers = [
    'Programowanie menu',
    'Dodanie kategorii',
    'Dodanie produktów',
    'Konfiguracja wydruków',
];
const currentSection = ref('');

function observerFn () {
     const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // entry.target.classList.toggle("active", entry.isIntersecting)
             
                if (entry.intersectionRatio > 0) {
                    currentSection.value = entry.target.getAttribute('id')
                    console.log(entry.target.getAttribute('id'))
                }
            })
        },
    {
        rootMargin: '0px 0px -75% 0px',
    })

    document.querySelectorAll('article h2').forEach((section) => {
        observer.observe(section)
    })
}
 const getData = async () => {
    const resp = await fetch("/api/articles")
    console.log(resp)
    articlesData.value = await resp.json()

 }

onMounted(getData)


// watch(route.query, () => {
//     observerFn()
    
// })






</script>

<style scoped>
.active {
    
    color: rgb(48, 154, 154);
    border-color: rgb(48, 154, 155)
}
</style>