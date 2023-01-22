import React from "react";
import axios from "axios";

const LibraryComponent = (props) => {
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
                                    <input className="form-control" placeholder="Enter Name" name="name" type="text" />
                                </div>
                                <div className="col-md-5">
                                    <label className="form-label">&nbsp;</label>
                                    <div className="btn-toolbar">
                                        <button type="button" className="btn btn-primary form-control">Search</button>
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
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="form-control" type="text" value="Name" /></td>
                                <td><input className="form-control" type="text" value="Address" /></td>
                                <td><input className="form-control" type="text" value="Telephone" /></td>
                                <td>
                                    <div className="btn-toolbar">
                                        <button className="btn btn-info m-1 mt-0 mb-0">Edit</button>
                                        <button className="btn btn-success m-1 mt-0 mb-0">Save</button>
                                        <button className="btn btn-danger m-1 mt-0 mb-0">Delete</button>
                                        
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        )
}

export default LibraryComponent;