import { Component } from '@angular/core';
import { ReactiveFormsModule,FormBuilder,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,CommonModule,FontAwesomeModule,RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class login {
  [x: string]: any;

  public register: String | undefined;
  public loginForm: any;
  submitted = false;
  

  constructor(private fb: FormBuilder,private router:Router) {}
  
  navigateUrl(type:String){

    this.register = type;
    this.router.navigate([this.register]);

  }
  ngOnInit() {
     this.loginForm = this.fb.group({
      email: ['',[Validators.required,Validators.email]],
      // phoneNumber: ['', [Validators.required]],
      password:['',[Validators.required,Validators.minLength(8)]]

     });
    }
    
  public login() {
    console.log(this.loginForm);
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid)
  }
  showPassword = false;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  togglePasswordVisibility() {
  this.showPassword = !this.showPassword;
  }

  isEmailValid(){
    console.log(this.loginForm);
    return !this.loginForm.get('email').valid && this.loginForm.get('email').dirty;
  }
  isPassValid(){
    console.log(this.loginForm);
    return !this.loginForm.get('password').valid && this.loginForm.get('password').dirty;
  }
  onLogin() {
  this.submitted= true;
    if (this.loginForm.valid) {
      let existingUserList:any = localStorage.getItem('registeredInUser') || [];
      existingUserList = JSON.parse(existingUserList);

      const isCredentialValid = existingUserList.some((user: { email: any; password: any; }) => {
        return user.email === this.loginForm.value.email && user.password === this.loginForm.value.password 
      });
// find, foreach, map, filter - arr
      if (isCredentialValid) {
        const userData = {
          email:this.loginForm.value.email,
          // phoneNumber:this.loginForm.value.phoneNumber,
          password:this.loginForm.value.password
        };
        localStorage.setItem('loggedInUser',JSON.stringify(userData));
        localStorage.setItem('isUserLogin','true');
        alert('Login Successfully!!!')
        console.log('Login successful:',userData);
      } else {
        alert('Ohh dada! credential shi daal');
      }
      this.router.navigate(['music-play']);
    }
  }
  getUserData(){
    const userData =localStorage.getItem('loggedInUser');
    if(userData) {
      const user = JSON.parse(userData);
      alert('logged in as: '+user.email);
    }   
    else{
      alert('No user is logged in');
    }
  }
  // For logout
  logout(){
    localStorage.removeItem('loggedInUser');
    alert('Logged out successfully')
  }
}
