var registerForm = document.querySelector(".registerForm");
var Data = [];
registerForm.onsubmit = function(e){
    e.preventDefault();
    var elements = e.target.elements;
     var userData_Number = {
        number : elements["amount"].value,
        currency :elements[ "exchange"].value,

    };
    
    Data.push(userData_Number);
    console.log(Data);
    operation();
}
function operation(){
    var result = "" ;
    for(var i=0 ; i<Data.length ; i++){
    switch (Data[i].currency) {
        case 'dollar':
            result += `${Data[i].number / 3.73} dollar ...... `;
            break;
        case 'dinar':
            result += `${Data[i].number / 5.29}  dinar ...... `;
            break;
        case 'nis':
            result += `${Data[i].number} nis .....` ;
            break;
    }
    document.querySelector("p").innerHTML = result ;

}
}