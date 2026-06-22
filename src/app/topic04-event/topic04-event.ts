import { Component } from '@angular/core';
@Component({
  selector: 'app-topic04-event',
  // standalone: true,
  // THEN in TERMINAL:  cd D:\JavaScript\Angular\angular-Component
//                      ng serve
  templateUrl: './topic04-event.html',
  styleUrl: './topic04-event.css'
})

  
   // text="No click yet!"
 //   onClick():void{
 //     this.text="Button clicked!"
//    }
//}

/*
export class Topic04Event {
  text="Start typing ..."
  enterInput(userType:string):void{
    this.text=userType
  }
}*/

/*
export class Topic04Event {
  //text=""
  isDisabled=true
  enterInput(usertext:string):void{
    //this.text=usertext
    if (usertext==="") {
      this.isDisabled=true
    } else {
      this.isDisabled=false
    }
  }
}

*/


/*
export class Topic04Event {
  text="No clicked yet"
  isDisabled=false
  onClick():void{
    this.text="Button clicked!"
    this.isDisabled=true
  }
}
*/

/*
export class Topic04Event {
 text="No clicked yet!"
 isDisable=false
 onClick():void{
  this.text="Button clicked!"
  this.isDisable=true
 }
}*/


/*
export class Topic04Event {
 text="Start Typing ..."
 enterInput(userInput:string):void{
  this.text=userInput
}
}*/

/*
export class Topic04Event {
text="Name is required!"
   isDisable=true
enterInput(userType:string):void{
  if (userType==="") {
    this.text="Name is required!"
   this.isDisable=true
  } else {
    this.isDisable=false
    this.text="Okay!"
  }
}
}
*/

/* 
input event
export class Topic04Event {
 text="Start typing ..."
 enterInput(usertype:string):void{
  this.text=usertype
 }
}*/





/*  keyup event*/
/*
export class Topic04Event {
  text1="Start typing ..."
   text2="Start typing ..."
  enterInput(usertype:string):void{
  this.text1=usertype
 }
  enterKeyup(userTpye:string):void{
    this.text2=userTpye
  }
}*/





/*

export class Topic04Event {
 text = 'No action yet';

  onClick(): void {
    this.text = 'Button clicked!';
  }

  onInput(userText: string): void {
    this.text = 'Input event: ' + userText;
  }

  onKeyup(userText: string): void {
    this.text = 'Keyup event: ' + userText;
  }
}*/
export class Topic04Event {
  
}


