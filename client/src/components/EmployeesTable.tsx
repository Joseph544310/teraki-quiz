import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Table} from 'react-bootstrap'

interface Employee {
    id: string
    name: string,
    address: string,
    role: string,
    department: string,
    salary: number
}

const EmployeesTable: React.FC = props => {
    const [employees, setEmployees] = useState<Employee[]>([])

    useEffect(() => {
        // Fetch all employees
        Axios({
            method: 'GET',
            url: 'http://localhost:8000/api/employees/'
        }).then(res => {
            console.log(res.data)
            setEmployees(res.data)
        }).catch(err => console.log(err))
    }, [])

    return (
        <Table>
            <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Salary</th>
                    </tr>
            </thead>
            <tbody>
                {employees?.map(employee => {
                    return (
                        <tr key={employee.id}>
                            <td>{employee.name}</td>
                            <td>{employee.address}</td>
                            <td>{employee.role}</td>
                            <td>{employee.department}</td>
                            <td>{employee.salary}</td>
                        </tr>
                    )
                }
                )}
            </tbody>
        </Table>
    )
}

export default EmployeesTable