import React from 'react'

export const Profile = () => {
  return (
    <div className="row">
        <div className="col-md-3">
            <img className="img-fluid" src="https://via.placeholder.com/500x500" alt="Profile Image" title="Profile Image" />
        </div>
        <div className="col-md-9">
              <form action="">
                  <div className="form-group">
                      <div className="row">
                          <div className="col-6">
                              <input type="text" className="form-control" name="first_name" aria-describedby="helpId" placeholder="First Name" />
                          </div>
                          <div className="col-6">
                              <input type="text" className="form-control" name="last_name" aria-describedby="helpId" placeholder="Last Name" />
                          </div>
                      </div>
                  </div>
                  <div className="form-group">
                      <input type="email"
                          className="form-control" name="email" aria-describedby="helpId" placeholder="Email" />
                  </div>
                  <div className="form-group">
                      <input type="password"
                          className="form-control" name="password" aria-describedby="helpId" placeholder="Password" />
                  </div>
                  <div className="form-group">
                      <input type="password"
                          className="form-control" name="confirm-password" aria-describedby="helpId" placeholder="Confirm Password" />
                  </div>
                  <input className="btn btn-primary" type="submit" value="Update Profile" />
              </form>
        </div>
    </div>
  )
}
