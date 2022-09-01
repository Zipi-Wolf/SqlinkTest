//import { AddProject, RemoveProject } from './../actions/project.actions';
import { Project } from '../models/project.model';
import { State, Selector, StateContext, Action } from '@ngxs/store';
import { GetProjects } from '../actions/project.actions';
import { HttpService } from '../services/http.service';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';

export class ProjectsStateModel{
    projects:Project[]=[];
}

@State<ProjectsStateModel> ({
    name:'projects',
    defaults: {
       projects:[]
    }
})

@Injectable()
export class ProjectsState{
    @Selector()
    static projects(state:ProjectsStateModel){
        return state.projects
    }

    constructor(private httpService:HttpService) {}

    @Action(GetProjects)
    getProjects({ patchState }: StateContext<ProjectsStateModel>, { payload }: 
        GetProjects) {
        return this.httpService.getProjectsByUser(payload.userId).pipe(tap((result) => {
          patchState({ projects:result
         });
       },
       catchError((err) => {
       return throwError(`Get projects failed`);
    })
    ));
    }
  }


//     @Action(AddProject)
//     set({getState , patchState}:StateContext<ProjectStateModel>, {payload}:AddProject){
//         const state = getState();
//         patchState({
//             projects: [...state.projects , payload]
//         })
//     }

//     @Action(RemoveProject)
//     remove({getState , patchState}:StateContext<ProjectStateModel>, {payload}:RemoveProject){
//         patchState({
//             projects: getState().projects.filter(a=>a.id != payload)
//         })
//     }
//}