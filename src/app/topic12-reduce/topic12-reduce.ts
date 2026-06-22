import { Component } from "@angular/core";
import { KeyValuePipe } from "@angular/common";
import { AutoPart,PartsDataService } from "./parts-data.service";
type PartsSummary={
    totalProducts:number
    totalStock:number
    totalInventoryValue:number
    lowStockCount:number
    outOfStockCount:number
    theMostExpensive:number
    theCheapest:number
    categoryGroups: Record<string,AutoPart[]>
}
@Component({
    selector:'app-topic12-reduce',
    imports:[KeyValuePipe],
    templateUrl:'topic12-reduce.html',
    styleUrl:'topic12-reduce.css'
    
})
export class Topic12Reduce {
    summary:PartsSummary
    constructor(public partsData:PartsDataService) {
        this.summary=this.partsData.parts.reduce(
            (accumulator:PartsSummary,item)=>{
accumulator.totalProducts+=1
/*accumulator.totalStock+=item.stock*/
accumulator.totalStock=accumulator.totalStock+item.stock
accumulator.totalInventoryValue+=item.stock*item.price
if (item.stock<=item.reorderLevel) {
    accumulator.lowStockCount+=1
}

/*if (item.stock===0) {
    accumulator.outOfStockCount+=1
}*/
accumulator.outOfStockCount += item.stock === 0 ? 1 : 0


if (item.price>accumulator.theMostExpensive) {
    accumulator.theMostExpensive=item.price
}
if (item.price<accumulator.theCheapest) {
    accumulator.theCheapest=item.price
}

      if (!accumulator.categoryGroups[item.category]) {
          accumulator.categoryGroups[item.category] = [];
        }

        accumulator.categoryGroups[item.category].push(item);

                return accumulator
            },{
                totalProducts:0,
    totalStock:0,
    totalInventoryValue:0,
    lowStockCount:0,
    outOfStockCount:0,
     theMostExpensive:0,
     theCheapest:Infinity,
     categoryGroups:{}
            }
        )
    }
}