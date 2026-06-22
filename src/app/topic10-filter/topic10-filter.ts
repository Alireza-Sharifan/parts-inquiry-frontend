import { Component } from "@angular/core";
import { autoPart,PartsDataService } from "./parts-data.service";

@Component({
    selector:'app-topic10-filter',
    templateUrl:'topic10-filter.html',
    styleUrl:'topic10-filter.css'
})
export class topic10Filter {
    filterParts:autoPart[]=[]
    constructor(public partData:PartsDataService) {
        this.filterParts=this.partData.parts
    }
    showAllParts():void{
        this.filterParts=this.partData.parts
        
    }
 showAvailableParts():void{
    this.filterParts=this.partData.parts.filter(function (item) {
        return item.stock>0
    })
 }






showBrakingParts():void{
    this.filterParts=this.partData.parts.filter(item=>item.category==="Braking System")
}
















showOutOfStockParts():void{
    this.filterParts=this.partData.parts.filter(item=>{
        return item.stock===0
    })
}




}


/*
showAvailableParts

showBrakingParts

showOutOfStockParts*/