
import { Injectable } from '@angular/core';

export type SubmittedInquiry = {
  id: number;
  customerName: string;
  partCode: string;
  partName: string;
  outOfStock: boolean;
};

export type InquiryResponse = {
  success: boolean;
  message: string;
  inquiry?: SubmittedInquiry;
};

@Injectable({
  providedIn: 'root'
})
export class PartsApiService  {
  async submitInquiry(customerName: string, partCode: string): Promise<InquiryResponse> {
const responce=await fetch('http://localhost:3000/api/inquiries',{
  method:'POST',headers:{
    'Content-Type':'application/json'
  },body:JSON.stringify({
    customerName:customerName,
    partCode:partCode
  })

})
const data=await responce.json()
if (responce.status===400) {
  return data
}
if (!responce.ok) {
  throw new Error("Server error");
  
}
  return data;
  }
}