export interface Login{
    token:string;
    personalDetails:PersonalDetails
}


export interface PersonalDetails{
    name:string;
    Team:string;
    joinedAt:Date;
    avatar:string;
}