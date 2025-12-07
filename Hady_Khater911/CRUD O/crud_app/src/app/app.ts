import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CommonModule, NgIf, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  // protected readonly title = signal('crud_app');
  @ViewChild('userForm') userForm!: NgForm;
  isNewUser: boolean = false;
  userObj: User = new User();
  localKey: string = 'userList';
  ngOnInit(): void {
    debugger;
    const LocalData = localStorage.getItem(this.localKey);
    if (LocalData != null) {
      this.userList = JSON.parse(LocalData);
    }
  }
  userList: User[] = [];
  changeView() {
    this.isNewUser = !this.isNewUser;
  }
  onEdit(data: User) {
    this.userObj = data;
    this.isNewUser = true;
  }
  onDelete(userId: number) {
    const isDelete = confirm('Are you Sure want to Delete');
    if (isDelete) {
      const index = this.userList.findIndex((m) => m.userId == userId);
      if (index != -1) {
        this.userList.splice(index, 1);
        this.storeData();
        this.userForm.resetForm();
      }
    }
  }
  onUpdate() {
    const record = this.userList.find((m) => m.userId == this.userObj.userId);
    if (record != undefined) {
      record.city = this.userObj.city;
      record.fName = this.userObj.fName;
    }
    this.storeData();
    this.changeView();
    this.userObj = new User();
    this.userForm.resetForm();
  }

  storeData() {
    localStorage.setItem(this.localKey, JSON.stringify(this.userList));
  }

  onSave() {
    debugger;
    this.userObj.userId = this.userList.length + 1;
    this.userList.push(this.userObj);
    this.userObj = new User();
    this.storeData();
    this.userForm.resetForm();
  }
}

class User {
  userId: number;
  fName: string;
  lName: string;
  uName: string;
  city: string;
  state: string;
  zipCode: string;
  isAgree: boolean;

  constructor() {
    this.userId = 0;
    this.fName = '';
    this.lName = '';
    this.uName = '';
    this.city = '';
    this.state = '';
    this.zipCode = '';
    this.isAgree = false;
  }
}
