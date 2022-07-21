<template>
<div>
    <div class="max-w-md mx-auto pt-32">
      
    


    <div v-if="articles">
        <table class="colapse border-blue-500 [&>*]:border-2 [&>*]:p-2  " >
           <thead >
                <tr class="[&>*]:border-2 [&>*]:p-2 bg-slate-400">
                    <th >
                    id
                   </th>
                    <th >
                    title
                   </th>
                    <th >
                    content
                   </th>
                    <th >
                    category
                   </th>
                </tr>

            </thead>
            <tbody v-for="article in articles.data.articlesList " :key='article.id'>
                <tr class="[&>*]:border-2 [&>*]:p-2">
                    <td>
                        {{  article.id }}
                    </td>
                   
                    <td>
                        {{ article.title }}

                    </td>
                    <td>
                        {{ article.content }}
                    </td>
                    <td>

                        {{ article.category }}
                    </td>
                </tr>

                
            </tbody>
        </table>
    </div>
    
    </div>
</div>
</template>


<script setup>

const articles = ref('')

const getArticles = async () => {
    const resp = await useFetch("/api/articles")
    articles.value = resp
}


onBeforeUpdate(getArticles())


</script>
