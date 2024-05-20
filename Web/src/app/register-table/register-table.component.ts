import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService, Register } from '../app.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-register-table',
  templateUrl: './register-table.component.html',
  styleUrl: './register-table.component.scss'
})
export class RegisterTableComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;
  
  subscription: Subscription | undefined;

  displayedColumns: string[] = [
    'firstname', 
    'surname', 
    'created_date_tz',
    'created_date', 
    'luxon_date_tz', 
    'luxon_date',
    'javascript_date_tz',
    'javascript_date',
    'component',
    'timezone',
  ];

  dataSource: MatTableDataSource<Register> | undefined;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getRegisterUsers();
  }

  private getRegisterUsers = (): void => {
    this.subscription = this.appService.getRegisterAll$.subscribe(({
      next: (resp: Register[]) => {
        this.dataSource = new MatTableDataSource(resp);
      },
      error: (err: ErrorEvent) => {
        console.error(`Table error, error: ${err.message}`);
      },
      complete: () => {
        console.log('Completed');
      }
    }));
  };

  public applyFilter = (event: Event): void => {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource!.filter = filterValue.trim().toLowerCase();

    if (this.dataSource!.paginator) {
      this.dataSource!.paginator.firstPage();
    }
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
