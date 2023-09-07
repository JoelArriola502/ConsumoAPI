const marvel={
    render:()=>{
        //191c006ab6e8a64f7213fe61f0006a51336172e79acaa2d922db5b86aff95b9b58f99d168
        const URL_APLI='https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=acaa2d922db5b86aff95b9b58f99d168&hash=2cbbcdacbdf6cd8a191ba89a133d58a2';
        const Mostrar=document.querySelector('#marvel');
        let contentHTML='';
        fetch(URL_APLI)
        .then(res=>res.json())
        .then((json)=>{
            console.log(json,'RES.JSON');
            for(const comic of json.data.results){
                let comicMostra=comic.urls[0].url;
                if(!comic.description){
                    comic.description="Lo siento no hay descripcion";
                }
                contentHTML+=` 
                <div class="col-md-4">
                <a href="${comicMostra}" class="navbar">
                <img src="${comic.thumbnail.path}.${comic.thumbnail.extension}" alt="${comic.name}" class="img-thumbnail">
                </a>
                <h3 class="title">${comic.name}</h3>
                <p>${comic.description}</p>
        
                </div>
            </div>
        `;
            }
            Mostrar.innerHTML=contentHTML;
        })
    }
}
marvel.render();