import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-contact-viewer',
  templateUrl: './contact-viewer.component.html',
  styleUrls: ['./contact-viewer.component.css']
})
export class ContactViewerComponent implements OnInit {

  private ContactID: number = this.route.snapshot.params["contact_ID"];

  private ParamIsValid(): boolean
  {
    return Number.isInteger(Number.parseInt(this.ContactID.toString()));
  }

  constructor(private route: ActivatedRoute, private router: Router)
  { 
    
  }

  ngOnInit()
  {
    if (!this.ParamIsValid())
    {
      // Navigate back to just Contacts
      this.router.navigate(['Contacts/']);
    }
  }

}
