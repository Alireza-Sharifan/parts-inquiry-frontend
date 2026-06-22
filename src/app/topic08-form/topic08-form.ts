import { Component } from "@angular/core";

@Component({
    selector:'app-topic08-form',
templateUrl:'topic08-form.html',
styleUrl:'topic08-form.css'
})
export class topic08Form {
 requiredError=false
 nameError=false
 phoneError=false
 bothError=false
 success=false
 submitForm(name:string, phone:string):void{
    this.requiredError=false
    this.nameError=false
    this.phoneError=false
   this.bothError=false
    this.success=false
    if (name.trim()===''||phone.trim()==='') {
        this.requiredError=true
        return
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
        this.nameError=true
        return
     
    }
    if (!/^[0-9]+$/.test(phone)) {
        this.phoneError=true
        return
    }
    if (!/^[A-Za-z\s]+$/.test(name)&&!/^[0-9\s]+$/.test(phone)) {
        this.bothError=true
        return
    }
    this.success=true

 }
}



