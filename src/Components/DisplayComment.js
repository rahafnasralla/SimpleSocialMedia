import React from 'react' 


class DisplayComment extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            comment : props.comment
            ,date : props.date
        }
    }
    render() {
        return(
            <div className='me-4 ms-4 p-3'>
                <div>{this.state.comment}</div>
                <div>{this.state.date}</div>
            </div>
        )
    }
    

}


export default DisplayComment;