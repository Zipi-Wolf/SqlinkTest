import { Project } from "../models/project.model";

export class AddProject{
   static readonly type='[Project] Add'; 
   
   constructor(public payload: Project){}
}


export class RemoveProject{
   static readonly type='[Project] Remove'; 
   
   constructor(public payload: string){}
}