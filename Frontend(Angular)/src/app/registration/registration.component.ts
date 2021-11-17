import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  response:any
  myForm:FormGroup
  constructor(
    private fb:FormBuilder,
    private auth:AuthService
  ) { 
    this.myForm = this.fb.group({
      name:["",[Validators.required]],
      email:["",[Validators.required]],
      password:["",[Validators.required, Validators.minLength(6)]],
    })
  }
  register(){
    const formValues = this.myForm.value
    this.auth.registerUser(formValues).subscribe(
      res=> this.response = res,
      err=> this.response = err
    )
  }
  
  ngOnInit(): void {
  }

}
