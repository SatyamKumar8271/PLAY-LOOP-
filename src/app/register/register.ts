import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule,FontAwesomeModule,CommonModule,RouterOutlet],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  public login: String | undefined;
  public registerForm: any;
  submitted = false;

  constructor(private fb: FormBuilder,private router:Router) {}
  
  navigateUrl(type:String){

    this.login = type;
    this.router.navigate([this.login]);

  }

  ngOnInit() {
     this.registerForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      phoneNumber: ['', [Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.maxLength(10)]],
      password:['',[Validators.required,Validators.minLength(8)]]

     });
    }
    
  public register() {
    console.log(this.registerForm);
    console.log(this.registerForm.value);
    console.log(this.registerForm.valid)
  }
  showPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  }

  isEmailValid(){
    console.log(this.registerForm);
    return !this.registerForm.get('email').valid && this.registerForm.get('email').dirty;
  }
  isPassValid(){
    console.log(this.registerForm);
    return !this.registerForm.get('password').valid && this.registerForm.get('password').dirty;
  }
  isNumValid(){
    console.log(this.registerForm);
    return !this.registerForm.get('phoneNumber').valid && this.registerForm.get('phoneNumber').dirty;
  }
  onRegister() {
    this.submitted= true;
    if (this.registerForm.valid) {
      const userData = {
        email:this.registerForm.value.email,
        phoneNumber:this.registerForm.value.phoneNumber,
        password:this.registerForm.value.password
      };

      let existingUserList:any = localStorage.getItem('registeredInUser') || [];
      if (existingUserList?.length > 0) {
        existingUserList = JSON.parse(existingUserList);
         existingUserList = existingUserList.concat([userData]);
         localStorage.setItem('registeredInUser',JSON.stringify(existingUserList));
      } else {
        localStorage.setItem('registeredInUser',JSON.stringify([userData]));
      }
      
      console.log('Register successful:',userData);
      this.router.navigate(['login']);
   }
 }
}


