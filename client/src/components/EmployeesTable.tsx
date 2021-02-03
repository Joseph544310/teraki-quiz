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

const employeeKeys: (keyof IEmployee)[] = ['id', 'name', 'address', 'role', 'department', 'salary']

const EmployeesTable: React.FC = props => {
    const [employees, setEmployees] = useState<IEmployee[]>([])
    const [searchKey, setSearchKey] = useState('')
    const [sortingOption, setSortingOption] = useState<keyof IEmployee>('id')

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
            {employees.length>0?
            <div className='controls'>
                <input 
                type='text' 
                value={searchKey} 
                onChange={e => setSearchKey(e.target.value)}
                placeholder='Search by name...'/>

                <label htmlFor='sort-by'>Sort By</label>
                <select
                onChange={e => setSortingOption(employeeKeys[Number(e.target.value)])}
                id='sort-by'>
                    {employeeKeys.map((key, index) =>
                    <option key={key} value={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</option>)}
                </select>
            </div>: null}

            {employees.length>0?  
            <Table>
                <thead>
                    <tr>
                        {employeeKeys.map(key =>
                        <th key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {employees?.filter(employee => employee.name.includes(searchKey))
                    .sort((a, b) => {
                        if (a[sortingOption] < b[sortingOption]) return -1
                        else return 1
                    })
                    .map(employee => 
                        <tr key={employee.id}>
                            {Object.entries(employee).map(entry => 
                                <td key={entry[0]}>{entry[1]}</td>)}
                        </tr>
                    )}
                </tbody>
            </Table>:
            <p>No Data Yet!!</p>}
        </div>
    )
}

export default EmployeesTable