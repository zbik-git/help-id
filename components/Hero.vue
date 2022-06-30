<template>
    <div class="grid grid-cols-12 pl-10 py-13">
        
        <div class="col-span-2 w-full bg-amber-200/10 h-1/2">
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
            
        <div class="col-span-10 w-full h-screen bg-amber-100 relative p-8 overflow-scroll">
            <div class="flex flex-col">

                <Scroll />
                
            </div>
        </div>


        

    </div>

</template>