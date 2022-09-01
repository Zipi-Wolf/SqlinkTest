import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Project } from 'src/app/models/project.model';
import { HttpService } from 'src/app/services/http.service';
//import { AddProject } from 'src/app/actions/project.actions';
import {AuthState, PersonalDetails} from '../../../../state/login.state';//
import {MatTableDataSource} from '@angular/material/table';
import { DataSource } from '@angular/cdk/table'


@Component({
  selector: 'app-info-screen',
  templateUrl: './info-screen.component.html',
  styleUrls: ['./info-screen.component.scss']
})
export class InfoScreenComponent implements OnInit {

  projects:any;
  personalDetails:PersonalDetails={} as any;
  displayedColumns: string[] = ['id', 'name', 'score', 'durationInDays', 'bugsCount', 'madeDadeline'];

  constructor(private store: Store ,private httpService:HttpService) {

   }

  ngOnInit(): void {
    var token =this.store.selectSnapshot(AuthState.token);
    this.personalDetails =this.store.selectSnapshot(AuthState.personalDetails)
    console.log(token);

    //this.store.dispatch(new AddProject({}))

    this.httpService.getProjectsByUser().subscribe(
      (res) => {
          console.log(res);
          //this.projects=new MatTableDataSource(res);
          this.projects=res;
      })


  }
 

  addProject()
  {
   // this.store.dispatch(new AddProject({}))
  }

}
