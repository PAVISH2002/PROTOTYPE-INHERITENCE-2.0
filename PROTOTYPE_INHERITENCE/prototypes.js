import {calling,messaging,displaySimtype,Simdata,callOrMessage,forMessage} from '/functions.js';
import {basicOrSmartphone} from '/objectCreation.js';

document.getElementsByClassName('submit')[0].addEventListener('click',basicOrSmartphone)    //onclick execution for basic or smartphone

let Phone={                     //common phone prototype object
    phone_number:undefined,     //from which number the call or message has to be send 
    calling : calling,          //method for calling 
    messaging : messaging       //method for messaging
};
Phone.displaySimtype=displaySimtype;    //method for choosing singlesim or dual sim
Phone.Simdata=Simdata;                  //method for getting the user numbers data
Phone.callOrMessage=callOrMessage;      //method for execution of call method and getting message text
Phone.forMessage=forMessage;            //method for execution of message method

export function Basic(){}
Basic.prototype=Phone;          //inheriting the phone object

function SmartPhone(){}
SmartPhone.prototype=Phone;     //inheriting the phone object

export function android(){}
android.prototype=SmartPhone;   //inheriting the smartphone prototype object

export function IOSPhone(){}
IOSPhone.prototype=SmartPhone;  //inheriting the smartphone prototype object
console.log(this);