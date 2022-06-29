<template>
    <main class="w-11/12 mx-auto py-5 mb-10">
        <article class="relative flex mb-2">
            <div class="w-3/4">
                <h1 class="text-xl">
                    Help
                </h1>
                <section v-for="(header, index) in headers" 
                :key="header">
                <h2 :id="index" class="text-xl pt-4">{{ header }}</h2>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni aut eaque enim cumque, aliquam delectus quaerat aperiam voluptatem. Quo nulla magni numquam facere facilis eum cupiditate tempora cum tempore porro.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, harum distinctio? Natus fuga iste officiis odio cumque unde nihil facere aspernatur tempore incidunt quibusdam velit, suscipit ad iusto nobis iure eaque blanditiis. Repellat architecto, quae esse dicta unde dignissimos vitae voluptatibus et reiciendis recusandae blanditiis totam eos, possimus ut incidunt dolorem nemo! Odio ea esse ipsum, aperiam asperiores consequatur, voluptas reiciendis ut nobis dicta ipsam non quam animi, quia earum sequi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio adipisci, tempora error assumenda autem aliquid! Ad sequi harum culpa modi maiores. Ratione aliquam voluptatem assumenda consequuntur numquam enim distinctio architecto!
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, voluptatem autem. Ex perspiciatis porro dolorem culpa a, vitae autem quod consectetur quibusdam repellat corporis facilis consequuntur nemo explicabo id necessitatibus distinctio mollitia assumenda rerum laudantium eius, voluptas itaque? Quibusdam error nostrum, vero minima inventore molestiae provident culpa distinctio perferendis dolorem! Aspernatur magni laudantium iusto nam natus voluptates libero itaque nemo aliquam quis veritatis accusantium dolor tempore deleniti odio tenetur doloremque, quae recusandae eius saepe alias nostrum. Velit fuga, culpa animi quia eveniet incidunt vel labore eaque impedit molestiae quo excepturi repellat, nostrum fugiat consequuntur doloribus tempora! Quibusdam perferendis delectus aspernatur, incidunt dolorem reprehenderit voluptatibus odit quos, nemo animi dolores ex ipsam accusamus qui ea. Laudantium illum optio blanditiis id obcaecati quae, ea nam doloribus maxime natus magni, debitis delectus veniam sunt distinctio facilis necessitatibus velit animi quod dolorum eos. Eveniet et dolorum hic pariatur accusantium aperiam reiciendis id laborum itaque explicabo unde odio, voluptates temporibus corrupti deleniti mollitia, repellat consequuntur nobis harum? Deserunt reiciendis libero tenetur nemo molestiae mollitia veritatis temporibus. Nulla dicta possimus totam, veritatis unde labore nemo pariatur deserunt dolores et suscipit ducimus, enim facilis blanditiis eius officia, qui similique error. Nisi fuga sunt atque optio fugiat impedit!
                    
                </p>
    
                </section>
            </div>
            <aside class="w-1/4">
                <div class="sticky top-[80px] pl-10">
                    
                    <a class="block border-l-2 pl-2 space-y-2" v-for="(header, index) in headers" 
                    :key="header" 
                    :href="`#${index}`" 
                    :class="{ active:  (index)  == currentSection }"
                    >
                    {{ header }}
                    </a>

                </div>
            </aside>

        </article>
    </main>
</template>

<script setup>

const headers = [
    'Programowanie menu',
    'Dodanie kategorii',
    'Dodanie produktów',
    'Konfiguracja wydruków',
];

const currentSection = ref('');

onMounted(() => {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                // entry.target.classList.toggle("active", entry.isIntersecting)
                if (entry.intersectionRatio > 0) {
                    currentSection.value = entry.target.getAttribute('id')
                }
        })
    },
    {
        rootMargin: '0px 0px -80% 0px',
    }
    
    )
    document.querySelectorAll('article h2').forEach((section) => {
        observer.observe(section)
    })
    
})



</script>

<style scoped>
.active {
    
    color: rgb(48, 154, 154);
    border-color: rgb(48, 154, 155)
}
</style>