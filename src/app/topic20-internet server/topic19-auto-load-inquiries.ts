import { ChangeDetectorRef,Component,OnInit } from "@angular/core";
import { SubmittedInquiry, PartsApiService } from "./parts-api.service";
@Component({
    selector:'app-topic19-auto-load-inquiries',
templateUrl:'topic19-auto-load-inquiries.html',
styleUrl:'topic19-auto-load-inquiries.css'

})
export class Topic19AutoLoadInquiries implements OnInit {
loading=false
serverError=false
inquiries:SubmittedInquiry[]=[]
    constructor(public partsApi: PartsApiService,
        private cdr:ChangeDetectorRef
    ) { }
    
    async loadInquiries():Promise<void>{
        this.loading=false
        this.serverError=false
        this.inquiries=[]

        this.loading=true
        this.cdr.detectChanges()

        try {
            const result=await this.partsApi.getInquiries()
            this.inquiries=result.inquiries
        } catch (error) {
            this.serverError=true
        }finally{
            this.loading=false
            this.cdr.detectChanges()
        }

    }
  ngOnInit(): void {
      this.loadInquiries()
  }
}