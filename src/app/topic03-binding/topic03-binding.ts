





import { Component } from '@angular/core';

@Component({
  selector: 'app-topic03-binding',
  templateUrl: './topic03-binding.html',
  styleUrl: './topic03-binding.css'
})







/*export class Topic03Binding {
   greeting="Welcome"
   text="This text will be changed soon."
}*/


/*export class Topic03Binding {
   isDisabled=true
}*/
/*export class Topic03Binding {
    title="Welcome"
    text="This text will be changed soon."
   isDisabled=true
}*/


/*export class Topic03Binding {
    text="This text will be changed soon."
    textChange():void{
        this.text="Button Clicked!"
        
    }

}*/


/*
export class Topic03Binding {
text="This text will be changed by clicking."
isDisabled=false
textChange():void{
    this.text="Button clicked!"
}
}*/


/*
export class Topic03Binding {
  text="Your name will appear after click on the button."
  textChange(username:string):void{
this.text=username
  }
}*/
/*
export class Topic03Binding {
text="The result will appear here."
showResult(username:string,placeholderText:string):void{
if (username==="") {
    //this.text=placeholderText
    this.text="Name is mandatory."
} else {
    this.text=username
}
}
}*/

/*
export class Topic03Binding {
    text="The result will appear here!"
    showResult(inputName:string,placeholderText:string):void{
        if (inputName==="") {
            this.text=placeholderText
        } else {
            this.text=inputName
        }
    }
}*/

/*export class Topic03Binding {
    text="Submission result will appear here!"
    Submission(inputName:string,inputPhone:number):void{
      if (inputName===""||inputPhone==="") {
        this.text="Both name and phone must be entered!"
      } else {
        this.text="Your submission is done, "+inputName
      }
}
}*/

/*
export class Topic03Binding {
    text="The result will appear here!"
    showResult(inputName:string,inputPhone:string){
        //keep inputPhone as string and validate that it contains only digits
        if (inputName===""&&inputPhone==="") {
            this.text="Both name and phone are needed for submission!"
        } else if (inputName==="") {
            this.text="Name?"
        } else if (inputPhone==="") {
            this.text="Phone?"
        } else {
            this.text="Your submission is done, "+inputName+"."
        }
    }
}
*/

export class Topic03Binding {
  text = "The result will appear here!";

  showResult(inputName: string, inputPhone: string): void {
    if (inputName === "" && inputPhone === "") {
      this.text = "Both name and phone are needed for submission!";
    } else if (inputName === "") {
      this.text = "Name?";
    } else if (inputPhone === "") {
      this.text = "Phone?";
    } else if (!/^[0-9]+$/.test(inputPhone)) {
   
      this.text = "Phone number must contain digits only!";
    } else {
      this.text = "Your submission is done, " + inputName + ".";
    }
  }
}

















/*
textSuccess="Your submission is done!"
    textUsernameProblem="Name is madatory!"
    textPhoneProblem="Phone number is madatory!"
    */











