import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-generic',
  templateUrl: './section-generic.component.html',
  styleUrl: './section-generic.component.css'
})
export class SectionGenericComponent implements OnInit {
  @Input() title: string =''
  @Input() mode: 'small' | 'big' = 'big'
  constructor() { }
  ngOnInit(): void {
}


}
