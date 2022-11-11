import {Basic,android,IOSPhone} from "./prototypes.js"; 

export function basicOrSmartphone(){                       //function for create object for button phone and 
    let Basicphone=document.getElementById('Basicphone');  //to select the smartphone type for the user
    let Smartphone=document.getElementById('Smartphone');
    if(Basicphone.checked){                                //will create an object on basic function
        let myPhone=new Basic();
        myPhone.displaySimtype();
    }
    if(Smartphone.checked){
        let smartType=document.getElementsByClassName('smartPhoneType')[0];
        smartType.style.display='block';
        let smartsummit=document.getElementById('smarttypeButton');
        smartsummit.addEventListener('click',displaySmartType)
    }
}

function displaySmartType(){                               //funtion for object creation either IOS or android phone 
    let and=document.getElementById('android');
    let IOS=document.getElementById('IOS');
    if(and.checked){                                       //will create an object on android phone function
        let myPhone=new android();
        myPhone.prototype.displaySimtype();
    }
    if(IOS.checked){                                       //will create an object on IOS phone function
        let myPhone=new IOSPhone();
        myPhone.prototype.displaySimtype();
    }
}