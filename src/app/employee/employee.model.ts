import { Department } from '../department/department.model';

export interface Employee {
    id:number,
    email:string,
    name: string,
    surname: string,
    address:number,
    qualification:string,
    contactNumber:number,
    departmentId:number,
    department:Department;
}
