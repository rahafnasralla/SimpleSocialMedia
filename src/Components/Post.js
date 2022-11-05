import React from 'react';
import Comment from './Comment';

class Post extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            post : props.display ,
            color : 'btn-warning'
        }

    }
    changeColor() {
        this.setState({color : 'btn-primary'})
    }

    render() {
        return(
            <div>
            <form className='m-4 p-3'>
                <div className=' shadow-lg p-3 bg-white rounded'>{this.state.post}</div>
                <div className='d-flex flex-row'>
                <button className='btn btn-warning m-3' onClick={this.changeColor.bind(this)}>like</button>
                <button className='btn btn-warning m-3'>comment</button>
                </div>
              
            </form>
            <div>
                <Comment/>
            </div>
            </div>
        )
    }
}

export default Post;