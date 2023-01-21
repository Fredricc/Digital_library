import React from "react";

const LibraryComponent = (props) => {
    return (
        <div>
            <hr />
            <h2>Library</h2>
            <div className="row">
            {/* SEARCH LIBRARY */}
            <div className="col-md-4">
                <div className="card border border-secondary shadow-0">
                    <div className="card-header bg-secondary text-white"><b>Search</b> Library<span className="glyphicon glyphicon-search"></span></div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-7">
                                    <label className="form-label">&nbsp;</label>
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
            </div>
        </div>
        )
}

export default LibraryComponent;