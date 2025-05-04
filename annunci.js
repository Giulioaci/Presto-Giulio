fetch('./annunci.json').then((Response)=>Response.json()).then((data)=>{
    data.sort((a,b)=> a.price - b.price);

    let radiowrapper = document.querySelector('#radiowrapper');
    let Cardwrapper = document.querySelector('#cardwrapper');

    function radiocreate(){
        let categories = data.map((annuncio)=> annuncio.category);
        let uniqueCategories = Array.from(new Set(categories));
        uniqueCategories.forEach((category)=>{
            let div = document.createElement('div')
            div.classList.add('form-check');
            div.innerHTML =`<input class="form-check-input" type="radio" name="radioDefault" id="${category}">
                            <label class="form-check-label" for="${category}"> ${category}
                            </label>
            `;
            radiowrapper.appendChild(div);
        });
    }
       radiocreate()

       function showcards(array){
        Cardwrapper.innerHTML ='';
        array.forEach((annuncio , i)=>{
           let div= document.createElement('div');
           div.classList.add('card-custom');
           div.innerHTML = `<img src = "https://picsum.photos/${300+i}" alt = "immagine casuale" class = "img-fluid img-card">
              <p class="h5">${annuncio.name}</p>
              <p class="h5">${annuncio.category}</p>
              <p class="h5">${annuncio.price}€</p>
            `;
           Cardwrapper.appendChild(div);
        });
       }
        showcards(data);

       function filterCategory(categoria){
        if(categoria !='All'){
            let filtered = data.filter((annuncio)=> annuncio.category == categoria);
            showcards(filtered)  
        }else{
            showcards(data);
        }
       }
       let radiobuttons = document.querySelectorAll('.form-check-input');
       radiobuttons.forEach((button)=>{
        button.addEventListener('click' , ()=>{
            filterCategory(button.id)
        })
       });

       let priceInput = document.querySelector('#priceInput');
       let priceValue = document.querySelector('#priceValue');

       function SetPriceInput(){
        let prices = data.map( (annuncio)=> +annuncio.price );
        prices.sort( (a, b)=> a - b );
        let maxPrice = Math.ceil(prices.pop());
        priceInput.max = maxPrice;
        priceInput.value = maxPrice;
        priceValue.innerHTML = maxPrice;
       }
       SetPriceInput();

       function filterprice(){
        let filtered = data.filter((annuncio)=> +annuncio.price <= priceInput.value);
        showcards(filtered);
       }
       priceInput.addEventListener('input',()=>{
        filterprice();
        priceValue.innerHTML = priceInput.value;
       });


       let wordInput = document.querySelector('#wordInput');
       

       function filterWord(parola){
          let filtered = data.filter( (annuncio)=> annuncio.name.toLowerCase().includes(parola.toLowerCase()) );
          showcards(filtered);
       }

       wordInput.addEventListener('input',()=>{
        filterWord(wordInput.value);
       });

});

