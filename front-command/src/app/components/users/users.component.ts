import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from 'src/app/validators/must-match.validator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
  //,
  //providers: [UserService]
})

export class UsersComponent implements OnInit {
    registerForm: FormGroup;
    submitted = false;

    show: boolean = false;

    constructor(private formBuilder: FormBuilder, private userService: UserService) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            _id               : [''],
            firstName         : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
            lastName          : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(2)]],
            nick              : ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
            profile           : ['', Validators.required],
            status            : ['', Validators.required],
            phone             : ['', [Validators.required, Validators.pattern('[^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$]*')]],
            email             : ['', [Validators.required, Validators.email]],
            password          : ['', [Validators.required, Validators.minLength(3)]],
            confirmPassword   : ['', Validators.required],
        }, {
            validator: MustMatch('password', 'confirmPassword')
        });

        this.getUsers();
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    getUsers() {
      this.userService.getUsers()
        .subscribe(res => {
          //this.userService.users = res as User[];
          this.userService.users = <User[]>res
        });
    }

    editUser(user: User) {
      this.show = true;
      this.userService.selectedUser = user;

      this.registerForm.get('_id').setValue(user._id);
      this.registerForm.get('firstName').setValue(user.firstName);
      this.registerForm.get('lastName').setValue(user.lastName);
      this.registerForm.get('nick').setValue(user.nick);
      this.registerForm.get('profile').setValue(user.profile);
      this.registerForm.get('status').setValue(user.status);
      this.registerForm.get('email').setValue(user.email);
      this.registerForm.get('phone').setValue(user.phone);
      this.registerForm.get('password').setValue(user.password);
      this.registerForm.get('confirmPassword').setValue(user.password);

      //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    deleteUser(_id: string) {
      this.userService.deleteUser(_id)
        .subscribe(res => {
          this.getUsers();
          this.onReset();
        })
    }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        };

        let newUser = new User (
          this.registerForm.value._id,
          this.registerForm.value.firstName, 
          this.registerForm.value.lastName,
          this.registerForm.value.nick,
          this.registerForm.value.profile,
          this.registerForm.value.status,
          this.registerForm.value.email,
          this.registerForm.value.phone, 
          this.registerForm.value.password
        );

        if(newUser._id) {
          this.userService.putUser(newUser)
            .subscribe(res => {
              this.onReset();
              this.getUsers();
            });
        } else {
          this.userService.postUser(newUser)
          .subscribe(res => {
            this.getUsers();
            this.onReset();
          });
        }

        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
    }

    toggle() {
      this.show = !this.show;
    }       

    onReset(form?: FormGroup) {
      if (form) {
        this.submitted = false;
        form.reset();
        this.userService.selectedUser = new User();
      }
    }    

}

