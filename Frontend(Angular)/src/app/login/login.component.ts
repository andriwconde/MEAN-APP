import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  response:any;
  myForm:FormGroup;
  constructor(
    private fb:FormBuilder,
    private auth:AuthService
  ) { 
    this.myForm = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required, Validators.minLength(6)]],
    })
  }
//idetificar al usuario a traves de el token
  login(){    
    const formValues = this.myForm.value
      this.auth.loginUser(formValues).subscribe(
     res=> this.response = res,
     err=> this.response = err
     )
  }
  
  ngOnInit(): void {
  }

}
