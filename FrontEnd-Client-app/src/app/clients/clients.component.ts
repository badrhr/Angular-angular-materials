import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, MatPaginatorModule} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {ClientServiceService} from "../service/client-service.service";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent implements OnInit{

  public clients :any;
  public dataSource: any ;
  public displayedColumns = ['name', 'email', 'adresse'];

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(  private clientService: ClientServiceService) {
  }
  ngOnInit(): void {

    this.clientService.getClients()
      .subscribe(
        {
          next: data =>{
            this.clients = data;
            this.dataSource = new MatTableDataSource(this.clients);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
          },
          error:err => {
            console.log(err);
          }
        })
  }

}
