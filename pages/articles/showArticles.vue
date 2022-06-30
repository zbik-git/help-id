<template>
<div>
    <div class="max-w-md mx-auto pt-32">
            <h1>Wszystkie tematy </h1>
    
        <form class="">

            <div class="flex space-x-4 px-2 py-4 border-2 border-amber-500">
                <label for="title">Title</label><br>
                <input class="" type="text" id="title" :v-model="formData.title"><br>

            </div>
            
            <div class="flex space-x-4 px-2 py-4 border-2 border-amber-500">
                <label for="content">Content</label><br>
                <textarea placeholder="Content" :v-model="formData.content">
                </textarea>
            </div>

            <button>save</button>
        </form>
    </div>
</div>
</template>


<script setup>

const formData = reactive({
    content: "",
    title: "",
})

</script>