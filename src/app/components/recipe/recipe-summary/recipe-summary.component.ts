import {Component, Input, OnInit} from '@angular/core';
import { RecipeSummary} from "./recipe-summary.viewmodel";

@Component({
  selector: 'app-recipe-summary',
  templateUrl: './recipe-summary.component.html',
  styleUrls: ['./recipe-summary.component.css']
})
export class RecipeSummaryComponent implements OnInit {
  @Input() recipeSummary: RecipeSummary;

  constructor() {}

  ngOnInit() {}
  
}
