import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import {Table} from 'react-bootstrap'

interface IEmployee {
    id: string
    name: string,
    address: string,
    role: string,
    department: string,
    salary: number
}

const EmployeesTable: React.FC = props => {
    const [employees, setEmployees] = useState<IEmployee[]>([])
    const [searchKey, setSearchKey] = useState('')

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
        <div>
            <input 
            type='text' 
            value={searchKey} 
            onChange={e => setSearchKey(e.target.value)}
            placeholder='Search by name...'/>

            <Table>
                <thead>
                        <tr>
                            {Object.keys(employees[0]).map(key =>
                            <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>)}
                        </tr>
                </thead>
                <tbody>
                    {employees?.filter(employee => employee.name.includes(searchKey)).map(employee => {
                        return (
                            <tr key={employee.id}>
                                {Object.entries(employee).map(entry => 
                                    <td key={entry[0]}>{entry[1]}</td>)}
                            </tr>
                        )
                    }
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default EmployeesTable