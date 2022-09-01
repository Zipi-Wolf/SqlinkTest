import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngxs/store';
import { Project } from 'src/app/models/project.model';
import { HttpService } from 'src/app/services/http.service';
import {AuthState, PersonalDetails} from '../../../../state/login.state';
import { GetProjects } from 'src/app/actions/project.actions';
import { ProjectsState } from 'src/app/state/project.state';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.scss']
})
export class InfoScreenComponent implements OnInit {

  projects:any;
  personalDetails:PersonalDetails={} as any;
  displayedColumns: string[] = ['id', 'name', 'score', 'durationInDays', 'bugsCount', 'madeDadeline'];

  @ViewChild(MatSort) sort: MatSort| undefined;

  constructor(private store: Store ,private httpService:HttpService) {}

  ngOnInit(): void {
    var token =this.store.selectSnapshot(AuthState.token);
    this.personalDetails =this.store.selectSnapshot(AuthState.personalDetails)
    console.log(token);

    this.store.dispatch(new GetProjects({userId:"userId"})).
    subscribe((res) => {
      this.projects=new MatTableDataSource(this.store.selectSnapshot(ProjectsState.projects));
      this.projects.sort = this.sort;
     })
  }



}
