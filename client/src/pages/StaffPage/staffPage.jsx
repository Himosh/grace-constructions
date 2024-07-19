import React from 'react';
import EmployeeCard from '../../components/EmployeeCard/EmployeeCard.jsx';
import FirstEmployeeCard from '../../components/FirstEmloyeeCard/FirstEmployeeCard.jsx';
import './staffPage.css'; // Import CSS for layout styling
import { Directors, Heads, Architects, EngineeringTrainees, TechnicalOfficers, Supervisors, NDT, HNDE, Surveyers, Accountant } from '../../data/staff.js';


const StaffPage = () => {
    return (
        <div>
            <div className='top'>
                <h3>Meet the Masters of Grace</h3>
                <p>Welcome to the heart of Grace Construction's triumph! Here, we invite you to discover the architects of our success - from the strategic guidance of our visionary Managing Director to the collective brilliance of our talented team members. Each individual brings their unique expertise to the table, propelling our projects to new heights and shaping the landscape of construction excellence.</p>

            </div>
            <div className='head'>
                <div className='adjust front'>
                    <div className='work'>
                        <h2>300+</h2>
                        <p>Working Employees</p>
                    </div>
                    <div className='year'>
                        <h2>15+</h2>
                        <p> Years of Experience</p>
                    </div>
                </div>
                <div className="employee-container">
                    {Directors.map(employee => (
                        <FirstEmployeeCard
                            image={employee.image}
                            key={employee.name}
                            name={employee.name}
                            role={employee.role}
                            degree={employee.degree}

                        />
                    ))}
                </div>
                <div className='adjust last'>
                    <div className='work'>
                        <h2>300+</h2>
                        <p>Working Employees</p>
                    </div>
                    <div className='year'>
                        <h2>15+</h2>
                        <p> Years of Experience</p>
                    </div>
                </div>
            </div>

            <div className="employee-container">
                {Heads.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {Architects.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {EngineeringTrainees.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {TechnicalOfficers.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {Surveyers.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {NDT.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {HNDE.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {Supervisors.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
            <div className="employee-container">
                {Accountant.map(employee => (
                    <EmployeeCard
                        image={employee.image}
                        key={employee.name}
                        name={employee.name}
                        role={employee.role}
                        degree={employee.degree}

                    />
                ))}
            </div>
        </div>

    );
}


export default StaffPage;
