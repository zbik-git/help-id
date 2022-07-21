<template>
    <div class="">

        <div class="grid grid-cols-12 pl-10 py-13 border-4 border-amber-500">
            
            <div class="col-span-2 w-ful h-3/4 overflow-y-auto mt-14">
                    <h1 class="text-3xl font-bold">Produkty </h1>
                <ul class="p-8 text-xl">
                    <li>Lista produktów</li>
                    <li>Kategorie</li>
                    <li>Grupy</li>
                    <li>Departament sprzedażowy</li>
                    <li>Limity produktów</li>
                    <li>Jednostki miary</li>
                    <li>Komentarze do produktów</li>
                    <li>Opisy strat</li>
                    <li>Opisy wycofań</li>
                </ul>
            </div >
                
            <div class="col-span-10 w-full h-screen p-4 overflow-y-auto">
                <div class="flex flex-col">
    
                    <Scroll />
                    
                </div>
            </div>
    
    
            
    
        </div>
    </div>

</template>