import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cbse',
  templateUrl: './cbse.component.html',
  styleUrls: ['./cbse.component.css']
})
export class CbseComponent implements OnInit {

  constructor(private route: ActivatedRoute){
    console.log("Inside cbse app");
  }
  ngOnInit(): void {
   
  }
  ngOnDestroy() {
    // alert("Dest")
  }
}