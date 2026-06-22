import { Injectable } from '@angular/core';

export type SubmittedInquiry = {
  id: number;
  customerName: string;
  partCode: string;
  partName: string;
  outOfStock: boolean;
};

export type InquiriesListResponse = {
  success: boolean;
  inquiries: SubmittedInquiry[];
};

@Injectable({
  providedIn: 'root'
})
export class PartsApiService {
  async getInquiries(): Promise<InquiriesListResponse> {
    const response = await fetch('http://localhost:3000/api/inquiries');

    if (!response.ok) {
      throw new Error('Server error');
    }

    return response.json();
  }
}