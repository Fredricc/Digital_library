import React, { useState } from "react";
import axios from "axios";


const LibraryComponent = (props) => {

    /* LIST LIBRARIES */
    const [LibrariesList, setLibrariesList] = useState([]);

    /* SEARCH */
    const [searchParameterName, setSearchParameterName] = useState('');
    const handleInputChange = (event) => {
        setSearchParameterName(event.target.value.toString());
    }
    const searchItems = () => {
        let URL = searchParameterName != "" ? ("https://localhost:7005/api/Library/Search?prName=" + searchParameterName) : "https://localhost:7005/api/Library/GetAll"; 
        axios.get(URL).then(response => { 
            setLibrariesList(response.data);
        })
    }

    return (
        <div>
            <hr />
            <h2>Library</h2>
            <div className="row">
            {/* SEARCH LIBRARY */ }
            <div className="col-md-4">
                <div className="card border border-secondary shadow-0">
                    <div className="card-header bg-secondary text-white"><b>Search</b> Library<span className="glyphicon glyphicon-search"></span></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text" value={searchParameterName} onChange={handleInputChange.bind(this)} />
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control" onClick={searchItems.bind(this)}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* NEW LIBRARY */ }
                <div className="col-md-8">
                    <div className="card border border-secondary shadow-0">
                        <div className="card-header bg-secondary text-white"><b>New</b> Library</div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    <label className="form-label">Name</label>
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text"/>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Address</label>
                                    <input className="form-control" placeholder="Enter Address" name="address" type="text" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">Telephone</label>
                                    <input className="form-control" placeholder="Enter Telephone" name="Telephone" type="text" />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label">&nbsp;</label>
                                    <button type="button" className="btn btn-success form-control">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            {/* DISPLAY LIBRARIES*/}
            <div className="card border border-secondary shadow-0">
                <div className="card-header bg-secondary text-white"><b>Display</b> Library</div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Telephone</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {LibrariesList.map(item =>
                                <tr key={item.name}>
                                    <td>{item.name}</td>
                                    <td>{item.address}</td>
                                    <td>{item.telephone}</td>
                                </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
}

export default LibraryComponent;