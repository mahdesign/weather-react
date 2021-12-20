import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city ..."
              className="form-control"
              autocomplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="submit"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
