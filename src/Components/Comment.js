import React from 'react';
import DisplayComment from './DisplayComment';

class Comment extends React.Component {
    // constructor(props) 
    // {
    //     super(props)
    // }

    render() {
    return (
        <div className='m-4 mb-2 p-3'>
            <form>
                <input type="text" className=' shadow-lg p-3 bg-white rounded'/>
                <div>
                 <DisplayComment comment="hi" date={new Date().toDateString()}/>
                </div>
            </form>
        </div>
    )
    }


}


export default Comment;