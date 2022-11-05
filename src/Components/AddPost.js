import React from 'react' ;
class AddPost extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        post : "",
        posts: []
    }
  }

  write(e) {
    this.setState({
        post : e.target.value
    })
  }

  add(e) {
    e.preventDefault();
    console.log(this.state.post)
    let _posts = JSON.parse(JSON.stringify(this.state.posts));
    _posts = _posts.push(this.state.post)
    this.setState({ posts : _posts,
        post : ""})

  }



  render() {
    return(

    <div className='m-4 p-3'>
    <form>
    <div>
    <textarea name="" id="" cols="60" rows="6" placeholder='write what you think' onChange={this.write.bind(this)} value={this.state.post} 
    className='shadow-sm p-3  bg-white rounded'></textarea>
    </div>
    <div className='d-flex flex-row'>
    <button type='submit' onClick={this.add.bind(this)} className='btn btn-success m-3'>add post</button>
    </div>
    </form>
    </div>)
  }
}

export default AddPost;