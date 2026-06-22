import { Component } from "@angular/core";
import{AutoPart,PartsDataService}from"./parts-data.service"
@Component({
    selector:"app-topic09-find",
    templateUrl:"topic09-find.html",
    styleUrl:"topic09-find.css"
})
export class topic09Find {
   requiredError =false
   notFound=false
   selectPart:AutoPart|undefined
   constructor(public partsData: PartsDataService){
   }
   findPart(partCode:string):void{
    const cleanedCode=partCode.trim().toUpperCase()
    this.requiredError=false
    this.notFound=false
    this.selectPart=undefined
    if (cleanedCode==='') {
        this.requiredError=true
        return
    }
  /* Function Expresion
  const result=this.partsData.parts.find(function (item) {
    return item.code===cleanedCode
  }
  )*/
 /* Arrow Function*/
 const result=this.partsData.parts.find(item=>item.code===cleanedCode)

    if (result!=undefined) {
        this.selectPart=result
    } else {
        this.notFound=true
    }
}
}
