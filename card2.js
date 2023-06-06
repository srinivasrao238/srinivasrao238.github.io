let pmoldinfo = {
    imgurl: "https://www.pmindia.gov.in/wp-content/uploads/2023/05/H20230525132606.jpg",
    name: "Narendra Modi",
    Description: "Prime Minister of India"
}

let pmyounginfo = {
    imgurl: "https://www.pmindia.gov.in/wp-content/uploads/2023/05/H20230521132252.jpg",
    name: "Shree Narendra Modi",
    Description: "Prime Minister of INDIA"
}

let ispmold = true;
let displayobject;
let flipdata = function(){
    if(ispmold == true){
        displayobject = pmyounginfo;
        ispmold = false;
    }
    else{
        displayobject = pmoldinfo;
        ispmold = true;
    }
    document.getElementById("pm-img").src = displayobject.imgurl;
    document.getElementById("pm-name").innerHTML = displayobject.name;
    document.getElementById("pm-description").innerHTML = displayobject.Description;
}