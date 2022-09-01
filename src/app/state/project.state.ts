import { AddProject, RemoveProject } from './../actions/project.actions';
import { Project } from '../models/project.model';
import { State, Selector, StateContext, Action } from '@ngxs/store';

export class ProjectStateModel{
    projects:Project[]=[];
}

@State<ProjectStateModel> ({
    name:'projects',
    defaults: {
       projects:[]
    }
})

export class ProjectState{
    @Selector()
    static getProjects(state:ProjectStateModel){
        return state.projects
    }

    @Action(AddProject)
    set({getState , patchState}:StateContext<ProjectStateModel>, {payload}:AddProject){
        const state = getState();
        patchState({
            projects: [...state.projects , payload]
        })
    }

    @Action(RemoveProject)
    remove({getState , patchState}:StateContext<ProjectStateModel>, {payload}:RemoveProject){
        patchState({
            projects: getState().projects.filter(a=>a.id != payload)
        })
    }
}