import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cbse',
  templateUrl: './cbse.component.html',
  styleUrls: ['./cbse.component.css']
})
export class CbseComponent implements OnInit {

  classId!: number | null; // Change type to allow null

  constructor(private route: ActivatedRoute){
    console.log("Inside cbse app");
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.classId = +params.get('classId')!;
    });
  }
  ngOnDestroy() {
    // alert("Dest")
  }
}