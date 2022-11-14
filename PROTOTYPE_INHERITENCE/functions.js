export function Simdata(myPhone){                       // function for getting the sim numbers, calling or messaging numbers
    let singlesimCheck=document.getElementById('singlesim');
    let dualsimCheck=document.getElementById('dualsim');
    if(singlesimCheck.checked){                  //checks wheather the singlesim option is checked and getting that single number
        let SingleSim=document.getElementsByClassName('singlesim')[0];
        SingleSim.style.display='block';
    }
    if(dualsimCheck.checked){                    //checks wheather the dualsim option is checked and getting the two sim numbers
        let DualSim=document.getElementsByClassName('dualsim')[0];
        DualSim.style.display='block';
    }
    let messageOrCall=document.getElementsByClassName('messageOrCall')[0];
    messageOrCall.style.display='block';
    let msgorcallsummit=document.getElementById('msgorcallsummit');
    msgorcallsummit.addEventListener('click',function(){myPhone.callOrMessage(myPhone)});
}

export function callOrMessage(myPhone){                 //function for exectution of call and gathering the text data incase of message
    let call=document.getElementById('call');
    let msg=document.getElementById('msg');
    if(call.checked)                                    //if call is checked invokes the phone objects calling method
    {   
        let receiver=document.getElementById('callNum').value;
        let singlesimCheck=document.getElementById('singlesim');
        let dualsimCheck=document.getElementById('dualsim');
        if(singlesimCheck.checked){                     //calling for single sim
            myPhone.phone_number=document.getElementById('myNum').value;
            myPhone.calling(receiver);
        }
        if(dualsimCheck.checked){                       //calling for dual sim
            let mySim1=document.getElementById('mySim1');
            let mySim2=document.getElementById('mySim2');
            if(mySim1.checked){
                myPhone.phone_number=document.getElementById('myNum1').value;
                myPhone.calling(receiver);
            }
            if(mySim2.checked){
                myPhone.phone_number=document.getElementById('myNum2').value;
                myPhone.calling(receiver);
            }
        }
    }
    if(msg.checked){                              //getting the message text to be sent
        let messageBox=document.getElementsByClassName('message')[0];
        messageBox.style.display='block';
        let msgsubmit = document.getElementById('msgsubmit');
        msgsubmit.addEventListener('click',function(){myPhone.forMessage(myPhone)});
    }
}

export function forMessage(myPhone){                    //function for execution of message
    let receiver=document.getElementById('callNum').value;
    let singlesimCheck=document.getElementById('singlesim');
    let dualsimCheck=document.getElementById('dualsim');
    let myText=document.getElementById('messagebox').value;
    if(singlesimCheck.checked){                  //invokes the phone object message method for single sim
        myPhone.phone_number=document.getElementById('myNum').value;
        myPhone.messaging(receiver,myText);
    }
    if(dualsimCheck.checked){                    //invokes the phone object message method for dual sim
        let mySim1=document.getElementById('mySim1');
        let mySim2=document.getElementById('mySim2');
        if(mySim1.checked){
            myPhone.phone_number=document.getElementById('myNum1').value;
            myPhone.messaging(receiver,myText);
        }
        if(mySim2.checked){
            myPhone.phone_number=document.getElementById('myNum2').value;
            myPhone.messaging(receiver,myText);
        }
    }
}

export function displaySimtype(myPhone){                //function for the user to select the sim type
    let simType=document.getElementsByClassName('simType')[0];
    simType.style.display='block';
    let simtypeButton=document.getElementById('simtypeButton');
    simtypeButton.addEventListener('click',function(){myPhone.Simdata(myPhone)});
}

export function calling(receiver){                // Phone Object calling Method
    let screen=document.getElementsByClassName('display')[0];
    screen.style.display='block';
    let from=document.getElementById('from');
    let to=document.getElementById('to');
    from.textContent+=this.phone_number;
    to.textContent+=receiver;
}

export function messaging(receiver,msgtext){      // Phone Object messaging Method
    let screen=document.getElementsByClassName('display')[0];
    screen.style.display='block';
    let from=document.getElementById('from');
    let to=document.getElementById('to');
    let msg=document.getElementById('messging');
    msg.style.display='block';
    from.textContent+=this.phone_number;
    to.textContent+=receiver;
    msg.textContent+=msgtext;
}