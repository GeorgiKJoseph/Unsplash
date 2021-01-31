import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import {requestApiData, updateIsLoaded} from '../actions/dataActions'

class Home extends Component{
    componentDidMount() {
        console.log(this.props.isLoaded)

        if(!this.props.isLoaded){
            this.props.requestApiData()
            this.props.updateIsLoaded()
        }

    }
    clickHandler = id => {
        console.log("test");
    }
    render(){
        const data = this.props.data
        return (
            <div>
                <h2 key='home'>Home</h2>
                {data.map(item =>
                    <div onClick={this.clickHandler(item.id)}>
                        <img key={'img'+ item.id} src={item.urls.small}/>
                        <h3 key={item.id}>
                            <Link to={`/edit/${item.id}`}>
                                {item.alt_description}
                            </Link>
                        </h3>
                    </div>
                )}
            </div>

        )
    }
}

const mapStateToProps = state => ({
    data: state.data,
    isLoaded: state.isLoaded
})
const mapDispatchToProps = dispatch => bindActionCreators({
    requestApiData,
    updateIsLoaded
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);