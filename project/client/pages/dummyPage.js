import React, { Component } from 'react'
import {connect} from 'react-redux'
import {dummyFetch} from '../../store/actions'

 class Dummy extends Component {

    componentDidMount(){

        this.props.dummyFetch();

    }

    renderList(){
      return  this.props.dummy.map(x=>{
            return <li key={x.id}>{x.name}</li>
        })
    }
    render() {

        console.log("from Dummy",this.props.dummy);
        return (
            <div>
                !!!!Dummy Here!!!!

                <ul>
                    
                {this.renderList()}
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    dummy:state.dummy
})

const mapDispatchToProps = {
    
    dummyFetch
}


// export default connect(mapStateToProps,mapDispatchToProps)(Dummy)

export default {
    component:connect(mapStateToProps,mapDispatchToProps)(Dummy),
    loadData:({dispatch})=>dispatch(dummyFetch())
} 

