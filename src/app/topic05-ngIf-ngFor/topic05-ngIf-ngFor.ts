import { Component } from "@angular/core";
@Component({
  selector: 'app-topic05-ngIf-ngFor',
  templateUrl:'./topic05-ngIf-ngFor.html',
  styleUrl:'./topic05-ngIf-ngFor.css'})




/*export class Topic05ngIfngFor {
  isClicked=false
  onClick():void{
    this.isClicked=!this.isClicked
  }
}*/

/*
export class Topic05ngIfngFor {
  nameEmpty=false
  numberEmpty=false
  bothEmpty=false
  success=false

  submitForm(nameType:string,numberType:string):void{
      this.nameEmpty=false
  this.numberEmpty=false
  this.bothEmpty=false
    this.success=false
if (nameType===''&&numberType==='') {
      this.bothEmpty=true
  return
  

}         
     if (nameType==='') {
      this.nameEmpty=true
   
     }
     if (numberType==='') {
      this.numberEmpty=true
  
     }
   /*else {
      this.success=true
    }
    
    */



/*
else {
      this.bothEmpty=false
    }
    if (nameType==='') {
      this.nameEmpty=!this.nameEmpty
    } else {
      this.nameEmpty=false
    }
    if (numberType==='') {
      this.numberEmpty=!this.numberEmpty
    } else {
      this.numberEmpty=false
    }
      */

/*
  export class Topic05ngIfngFor {
   nameEntered=false
   checkName(nameType:string):void{
    if (nameType==='') {
      this.nameEntered=false
    } else {
      this.nameEntered=true
    }
   }
  }*/


  /* export class Topic05ngIfngFor {
   canSubmit = false;

  checkName(userText: string): void {
    if (userText.trim() === '') {
      this.canSubmit = false;
    } else {
      this.canSubmit = true;
    }
  }
   }*/

 /* export class Topic05ngIfngFor {
   nameError = false;
phoneError = false;
requiredError = false;

submitForm(name: string, phone: string): void {
  this.nameError = false;
  this.phoneError = false;
  this.requiredError = false;

  if (name.trim() === '' || phone.trim() === '') {
    this.requiredError = true;
    return;
  }

  if (!/^[A-Za-z\s]+$/.test(name)) {
    this.nameError = true;
    return;
  }

  if (!/^[0-9]+$/.test(phone)) {
    this.phoneError = true;
    return;
  }

  
}
  }*/
/*

/*
export class Topic05ngIfngFor {
  services=["Cleaning","Moving","TP",5,true]

}*/



/*export class Topic05ngIfngFor {
   isLoggedIn = false;

  services = ['Cleaning', 'Moving', 'TP'];

  toggleLogin(): void {
    this.isLoggedIn = !this.isLoggedIn;
  }
}*/





export class Topic05ngIfngFor {
  services=["Cleaning","Moving","TP"]

}
/*export class Topic05ngIfngFor {
 isloggedIn=false

 toggleLogin():void{
  this.isloggedIn=!this.isloggedIn
 }
}*/
  
   