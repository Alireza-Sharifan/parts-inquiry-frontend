
//          import { ServicesDataService } from './services-data.service';













import { Component } from '@angular/core';

import { ServicesDataService } from './services-data.service';

@Component({
  selector: 'app-topic06-service',
    templateUrl: './topic06-service.html',
  styleUrl: './topic06-service.css'
})
export class Topic06Service {
  constructor( public serviceData:ServicesDataService) {
    
  }
}

// serviceData

