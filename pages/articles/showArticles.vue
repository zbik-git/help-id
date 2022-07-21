<template>


      
    


   




    
    

        <div v-if="articles" class="flex flex-col mt-16 p-16 max-w-5xl mx-auto">
            <div class="overflow-x-auto shadow-md sm:rounded-lg">
                <div class="inline-block min-w-full align-middle">
                    <div class="overflow-hidden ">
                        <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                            <thead class="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                
                                    <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        ID
                                    </th>
                                     <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Title
                                    </th>
                                     <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Category
                                    </th>
                                     <th scope="col" class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400">
                                        Content
                                    </th>
                                
                                </tr>
                            </thead>
                            <tbody v-for="article in articles.data.articlesList " :key='article.id' class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                <tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
                                    
                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{  article.id }}
                                    </td>

                                     <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ article.title }}
                                    </td>

                                    <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ article.category }}
                                    </td>

                                     <td class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ article.content.length > 50 ? article.content.slice(0, 50) + "..." : article.content}}
                                    </td>



                                
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


        <!-- <table class="colapse border-blue-500 [&>*]:border-2 [&>*]:p-2  " >
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
                        {{ article.content.length > 125 ? article.content.slice(0, 125) + "..." : article.content}}
                    </td>
                    <td>

                        {{ article.category }}
                    </td>
                </tr>

                
            </tbody>
        </table> -->
    </div>

</template>


<script setup>

const articles = ref('')

const getArticles = async () => {
    const resp = await useFetch("/api/articles")
    articles.value = resp
}



onMounted(getArticles)


</script>
