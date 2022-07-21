<template>
<div>
    <div class="max-w-md mx-auto pt-32">
            <h1>Wszystkie tematy </h1>
    
        <form @submit.prevent="addArticle" class="flex flex-col bg-slate-200/50 rounded-xl m-2">

            <div class="flex space-x-4 px-2 py-4">
               
                <input class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="title" placeholder="Title" v-model="formData.title"><br>

            </div>
            
            <div class="flex space-x-4 px-2 py-4">
                <!-- <label for="category" class=" items-center justify-center text-xl block mb-2 font-medium text-gray-900 dark:text-gray-400">Kategoria</label><br> -->
                <!-- <input class="" type="list" id="category" v-model="formData.category"><br> -->
            
                <select v-model="formData.category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                    <option disabled value="">Select category</option>
                    <option>Sprzedaz</option>
                    <option>Konfiguracja</option>
                    <option>Uzytkownicy</option>
                </select>

            </div>
            
            <div class="flex space-x-4 px-2 py-4">
               
                <!-- <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label> -->
                <textarea id="message" rows="4" v-model="formData.content" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your content..."></textarea>

            </div>
            <div class="mx-auto">
                <button class="m-2 px-6 py-4 mb-5 bg-amber-400/90 hover:bg-amber-500 rounded-xl text-2xl text-white border-gray-500 border-2 max-w-lg">save</button>
            </div>
        </form>
    </div>
</div>
</template>


<script setup>

const formData = reactive({
    content: "",
    title: "",
    category: ""
})

const addArticle = async ()=> {
    if(!formData.category || !formData.content || !formData.title) {
        return
    }
    await useFetch('/api/articles/addArticle', {
        method: 'POST',
        body: formData
    })
    location.assign('/articles/showArticles') //articles/showArticles
}



</script>