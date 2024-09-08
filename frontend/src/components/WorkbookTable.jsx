import React from 'react'
import "./WorkbookTable.css"
const WorkbookTable = () => {
  return (
    <div className="container-fluid">

          <main className="main-content">
            <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>Data</th>
                                <th>Date</th>
                                <th>Source</th>
                                <th>CM First Name</th>
                                <th>CM Last Name</th>
                                <th>CM Phone</th>
                                <th>Alternate Number</th>
                                <th>Agent Name</th>
                                <th>Language</th>
                                <th>Disease</th>
                                <th>Age</th>
                                <th>Height</th>
                                <th>Weight</th>
                                <th>State</th>
                                <th>City/District</th>
                                <th>Remark</th>
                                <th>Comment</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </main> 
    </div>

  )
}

export default WorkbookTable