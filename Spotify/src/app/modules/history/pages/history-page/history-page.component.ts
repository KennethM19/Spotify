import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  receiveData(event: string): void{
    console.log('👍estoy en el padre -->', event)
    }
    
}
