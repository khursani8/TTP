'use strict';

import angular from 'angular';

export default class SignupController {
  user = {
    fname: '',
    lname: '',    
    email: '',
    password: '',
    nationality:'',
    driverLicense:'',
    phoneNumber:'',
  };
  errors = {};
  submitted = false;


  /*@ngInject*/
  constructor(Auth, $state) {
    this.Auth = Auth;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;
 
    if(form.$valid) {
      return this.Auth.createUser({
        fname: this.user.fname,
        lname: this.user.lname,        
        email: this.user.email,
        password: this.user.password,
        nationality: this.user.nationality,
        driverLicense: this.user.driverLicense,
        phoneNumber: this.user.phoneNumber,
      })
        .then(() => {
          // Account created, redirect to home
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
    }
  }
}
