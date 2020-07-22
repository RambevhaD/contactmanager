import React,{ Component } from 'react'

class Addcontact extends Component{
  state ={
    name:'',
    email:'',
    phone:''
  }
  render(){
    const {name,email,phone} = this.state
    return(
      <div className="card mb-3">
      <div className="card-header">AddContact</div>
      <div className="card-body">
      <form>
      <div className="form-group">
      <label htmlFor='name'>Name</label>
      <input type="text" name="name"
      className="form-control form-control-lg"
      placeholder="enter a name"
      value={name}
      />
      </div>

       <div className="form-group">
      <label htmlFor='email'>Email</label>
      <input type="email" name="email"
      className="form-control form-control-lg"
      placeholder="enter email"
      value={email}
      />
      </div>

       <div className="form-group">
      <label htmlFor='name'>Phone</label>
      <input type="text" name="phone"
      className="form-control form-control-lg"
      placeholder="enter a phone"
      value={phone}
      />
      </div>

      <input type="submit" value="Addcontact" className="btn btn-dark btn-block"/>
      </form>
      </div>
      </div>
    )
  }
}

export default Addcontact