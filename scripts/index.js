// Add the coffee to local storage with key "coffee"

`https://masai-mock-api.herokuapp.com/coffee/menu`
getCoffeeData()
async function getCoffeeData(){
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`

    let res= await fetch(url);

    let data1=await res.json();

   let coffeeData=data1.menu.data

    console.log(coffeeData)
    setData(coffeeData)
}

async function setData(coffeeData){

    coffeeData.forEach(function(el){
        let coffee=document.createElement("div")
        coffee.className="coffee"
        let img=document.createElement("img")
        img.className="image"
        img.src=el.image

        let p1=document.createElement("p")
        p1.innerText=el.title

        let p2=document.createElement("p")
        p2.innerText=el.price

        let add=document.createElement("button")
        add.innerText="add to bucket"
        add.id="add_to_bucket"
        add.addEventListener("click",addCoffee)


        coffee.append(img,p1,p2,add)
        document.getElementById("menu").append(coffee)
        // console.log(p2)
    })









}


function addCoffee(){
   
    let count=document.getElementById("coffee_count")

    count.innerText=count++;
    console.log(count)
    



}