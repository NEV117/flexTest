import { Component } from '@angular/core';
import { testData } from '../export-lloreda/testData';

@Component({
  selector: 'app-llamando-export-lloreda',
  templateUrl: './llamando-export-lloreda.component.html',
  styleUrls: ['./llamando-export-lloreda.component.css']
})
export class LlamandoExportLloredaComponent {
  jsonData = testData;

}
