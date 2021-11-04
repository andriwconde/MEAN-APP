import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  myForm:FormGroup
  constructor(
    private fb:FormBuilder
  ) { 
    this.myForm = this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required, Validators.minLength(6)]],
    })
  }

  registrarse(){
    
    console.log(this.myForm.value)
  }
  ngOnInit(): void {
  }

}
