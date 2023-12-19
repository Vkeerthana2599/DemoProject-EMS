import { Designation } from "./designation";
import { Project } from "./project";

export interface Employee{

    id: string,
    name: string,
    email: string,
    phoneNo: number,
    gender: string,
    qualification: string,
    experience: string,
    address: string,
    designation: string,
    project: Project []

    
    
}