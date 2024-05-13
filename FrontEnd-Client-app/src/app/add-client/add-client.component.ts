import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {ClientServiceService} from "../service/client-service.service";

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrl: './add-client.component.css'
})

export class AddClientComponent implements OnInit {

  public clientFormGroupe!: FormGroup;

  constructor(private formBuilder: FormBuilder, private clientService: ClientServiceService) {
  }

  ngOnInit(): void {
    this.clientFormGroupe = this.formBuilder.group(
      {
        name: this.formBuilder.control(''),
        email: this.formBuilder.control(''),
        password: this.formBuilder.control(''),
        adresse: this.formBuilder.control('')
      }
    );
  }


  addClient() {
    let formData: FormData = new FormData();
    formData.set('name', this.clientFormGroupe.value.name);
    formData.set('email', this.clientFormGroupe.value.email);
    formData.set('password', this.clientFormGroupe.value.password);
    formData.set('adresse', this.clientFormGroupe.value.adresse);
    this.clientService.addClient(formData).subscribe(
      {
        next: data => {
          alert('Client has been saved succefully');
        },
        error: err => {
          console.log(err);
        }
      }
    );

  }
}
