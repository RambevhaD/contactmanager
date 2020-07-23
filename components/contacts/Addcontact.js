import React,{ Component } from 'react'

class Addcontact extends Component{
  state ={
    name:'',
    email:'',
    phone:''
  };
  onChange=(e) =>this.setState({[e.target.name]:e.target.value});

  onSubmit = e =>{
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    const {name,email,phone} = this.state
    return(
      <div className="card mb-3">
      <div className="card-header">AddContact</div>
      <div className="card-body">
      <form onSubmit={this.onSubmit}>

      <div className="form-group">
      <label htmlFor='name'>Name</label>
      <input type="text" name="name"
      className="form-control form-control-lg"
      placeholder="enter a name"
      value={name}
      onChange={this.onChange}
      />
      </div>

       <div className="form-group">
      <label htmlFor='email'>Email</label>
      <input type="email" name="email"
      className="form-control form-control-lg"
      placeholder="enter email"
      value={email}
      onChange={this.onChange}
      />
      </div>

       <div className="form-group">
      <label htmlFor='name'>Phone</label>
      <input type="text" name="phone"
      className="form-control form-control-lg"
      placeholder="enter a phone"
      value={phone}
      onChange={this.onChange}
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