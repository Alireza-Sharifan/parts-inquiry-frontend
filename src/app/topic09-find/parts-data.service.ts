import { Injectable } from "@angular/core";
export type AutoPart={
    code:string
    name:string
    category:string
    material:string
    stock:number
}
@Injectable({
    providedIn:'root'
})
export class PartsDataService  {
  parts:AutoPart[]=[
    {code:"P101",
        name:"Brake Pad",
        category:"Braking System",
        material:"Ceramic",
        stock:24},

        {code:"P102",
            name:"Wheel Bearing",
            category:"Wheel System",
            material:"Chrome Steel",
            stock:8},

        {code: 'P103',
            name: 'Drive Shaft',
            category: 'Transmission',
            material: 'Alloy Steel',
            stock: 0}
            ,    {
      code: 'P104',
      name: 'Control Arm',
      category: 'Suspension',
      material: 'Forged Steel',
      stock: 11
    },
    {
      code: 'P105',
      name: 'Clutch Plate',
      category: 'Clutch System',
      material: 'Composite',
      stock: 5
    }]
}