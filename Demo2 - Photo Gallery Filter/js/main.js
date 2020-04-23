// Enter your JavaScript for the solution here...

window.addEventListener("load", function(){

    var tagsNodes = Array.from(document.querySelectorAll('.thumb-display'));

    var searchInput = document.querySelector('input.frm-control')
    var reset = document.querySelector('.reset')

    searchInput.addEventListener('keyup', searchByTagEntered)
    reset.addEventListener('click', onResetClick)

    function searchByTagEntered(e){   
        tagSearch = searchInput.value;

        if(tagSearch){
            reset.classList.remove("hidden")
        }

        for(var tags of tagsNodes.values()){
            var p = tags.getElementsByTagName("p");
            
            if(!p[0].innerHTML.toLowerCase().includes(tagSearch.toLowerCase())){
            
                tags.classList.add("hidden");
                
            }
            if(p[0].innerHTML.includes(tagSearch) && e.keyCode === 8){
            
            
                tags.classList.remove("hidden");
            
        }
        }  

        
    }

    function onResetClick(e){
        for(var tags of tagsNodes.values()){
            tags.classList.remove("hidden");
        }
        reset.classList.add("hidden");
        searchInput.value = "";
        e.preventDefault();
    }
})



