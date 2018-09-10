import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public Contacts = [];

  constructor(private router: Router)
  {
    var ranNum = Math.floor(Math.random() * 50) + 1;
    for (let index = 0; index < ranNum; index++)
    {
      this.Contacts.push({
        Name: `${index+1}) Bailey Miller`,
        Id: index
      });
    }
   }

  ngOnInit()
  {
    
  }

  NavigateToContactView(contactId: number)
  { 
    this.router.navigate(["Contacts", contactId]);
  }

}
