
import { ChangeDetectorRef, Component } from '@angular/core';
import { AutoPart, PartsApiService } from './parts-api.service';

@Component({
  selector: 'app-topic15-local-server',
  templateUrl: './topic15-local-server.html',
  styleUrl: './topic15-local-server.css'
})
export class Topic15LocalServer {
  loading = false
  requiredError = false
  notFound = false
  serverError = false
  selectedPart: AutoPart | undefined

  constructor(
    public partsApi: PartsApiService,
    private cdr: ChangeDetectorRef
  ) {
  }

  async checkPart(partCode: string): Promise<void> {
    const cleanedCode = partCode.trim().toUpperCase()

    this.loading = false
    this.requiredError = false
    this.notFound = false
    this.serverError = false
    this.selectedPart = undefined

    if (cleanedCode === '') {
      this.requiredError = true
      this.cdr.detectChanges()
      return;
    }

    this.loading = true
    this.cdr.detectChanges()

    try {
      const result = await this.partsApi.checkPartByCode(cleanedCode);

      if (result.found) {
        this.selectedPart = result.part
      } else {
        this.notFound = true
      }
    } catch (error) {
      this.serverError = true
    } finally {
      this.loading = false
      this.cdr.detectChanges()
    }
}
}