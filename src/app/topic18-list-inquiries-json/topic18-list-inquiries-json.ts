import { ChangeDetectorRef, Component } from '@angular/core';
import { PartsApiService, SubmittedInquiry } from './parts-api.service';

@Component({
  selector: 'app-topic18-list-inquiries-json',
  templateUrl: './topic18-list-inquiries-json.html',
  styleUrl: './topic18-list-inquiries-json.css'
})
export class Topic18ListInquiriesJson {
  loading = false;
  serverError = false;
  inquiries: SubmittedInquiry[] = [];

  constructor(
    public partsApi: PartsApiService,
    private cdr: ChangeDetectorRef
  ) {}

  async loadInquiries(): Promise<void> {
    this.loading = false;
    this.serverError = false;
    this.inquiries = [];

    this.loading = true;
    this.cdr.detectChanges();

    try {
      const result = await this.partsApi.getInquiries();
      this.inquiries = result.inquiries;
    } catch (error) {
      this.serverError = true;
    } finally {
      this.loading = false;
      this.cdr.detectChanges();
    }
  }
}