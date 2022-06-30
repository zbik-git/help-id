<template>
    <div>
      <div class="fixed top-0 left-0 w-full z-50 flex flex-row bg-gray-200 py-3 border-2 items-center justify-between">
  
        <div class="ml-5">
          <div class="font-bold text-gray-600 text-lg">
            <NuxtLink to="/#0">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
           </NuxtLink>
          </div>
        </div>  

        <div class="mr-10">
          <ul class="flex flex-row justify-between gap-4">
            <li class="hover:bg-slate-100">
              <NuxtLink to="/articles/addArticle">Add New</NuxtLink>
            </li>
             <li class="hover:bg-slate-100">
              <NuxtLink to="/articles/showArticles">Show All</NuxtLink>
            </li>
          </ul>
        </div>


        <div class="mr-10">
          <ul class="flex flex-row justify-between gap-4">
            <li class="hover:bg-slate-100">
              <NuxtLink to="/help">Help</NuxtLink>
            </li>
             <li class="hover:bg-slate-100">
              <NuxtLink to="/about">About</NuxtLink>
            </li>
          </ul>
        </div>
  
      </div>
    </div>
    
</template>