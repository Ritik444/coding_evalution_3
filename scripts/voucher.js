const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

let getData = async () =>{
    try{
        let res = await fetch(url);

        let user = await res.json();
         append(user)
        console.log(user);
    } catch (err) {
        console.log(err)
    }
}
getData();

function append(user) {
let conatainer = document.getElementById("voucher_list") 
    let img = document.createElement('img')
    img.src = user.image;

    let h2 = document.createElement('h2')
    h2.innerText = user.name;

    let p = document.createElement('p')
    p.innerText = user.price;

    let div = document.createElement('div')
    div.append(img,h2,p)

    conatainer.append(div);
 
    

}

