let fetchData=async (url)=>{
    try{
       let res= await fetch(url);
       let data =await res.json();
       return data;
    }
    catch(error){
    console.log(error)
    }
}

// let displayData=(data, displayArea)=>{
//   data.map()
// }

function displayData(data,displayItems){
    data.map(function(elem){
        let movieDiv=document.createElement("div");
        movieDiv.setAttribute("id","movieDiv")
        let imgDiv=document.createElement("div");
        imgDiv.style.height="70%";
        let image=document.createElement("img");
        image.src=elem.image;
        image.style.width="100%";
        image.style.height="100%";
        imgDiv.append(image);
        let title=document.createElement("p");
        title.innerText=elem.title;
        
        let price=document.createElement("p");
        price.innerText=elem.price;
        movieDiv.append(imgDiv,title,price);

        displayItems.append(movieDiv);
    })
}

export {fetchData,displayData};