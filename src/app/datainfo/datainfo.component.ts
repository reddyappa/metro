import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl ,  FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-datainfo',
  templateUrl: './datainfo.component.html',
  styleUrls: ['./datainfo.component.css']
})
export class DatainfoComponent implements OnInit {

  constructor(private http:HttpClient) { }
 /*  contactForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    address: new FormControl(),
    rating: new FormControl(),
  }) */
  ngOnInit(): void {
  }
  onSubmit(data:any){
    this.http.post('https://my-json-server.typicode.com/typicode/demo/posts',data);
    console.warn("test",data);
  }

}
