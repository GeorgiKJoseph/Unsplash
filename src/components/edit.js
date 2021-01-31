import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router'
import {modifyStoreData} from '../actions/dataActions'

class Edit extends Component{
    constructor(props, match){
        super(props)
        this.state = {
            redirect: false,
            data : this.props.data,
            id: '',
            title: '',
            user: '',
            description: '',
            url: ''
        }
    }

    componentDidMount() {
        let i = 0
        const id = this.props.match.params.id
        const items = this.state.data
        for(i=0; i<items.length; i++){
            if (items[i].id === id){
                this.setState({
                    id : items[i].id,
                    description : items[i].alt_description,
                    user : items[i].user.name,
                    url : items[i].urls.small,
                })
                break
            }
        }
    }
    userChangeHandler = (event) => {
        this.setState({
            user: event.target.value
        })
    }

    descChangeHandler = (event) => {
        this.setState({
            description: event.target.value
        })
    }
    onSubmitHandler = (event) => {
        let items = this.state.data, i=0
        for(i=0; i<items.length; i++){
            if (items[i].id === this.props.match.params.id){
                items[i].alt_description = this.state.description
                items[i].user.name = this.state.user
                items[i].urls.small = this.state.url
                break
            }
        }
        this.setState({
            redirect: true
        })
        this.props.modifyStoreData(items)
        event.preventDefault()
    }
    render() {
        const item = this.state
        if(this.state.redirect){
            return (
                <Redirect push to='/'/>
            )
        } else {
            return (
                <div>
                    <h2>Edit</h2>
                    <img key={'img'+ item.id} src={item.url}/>
                    <form onSubmit={this.onSubmitHandler}>
                        <input onChange={this.userChangeHandler} type="text" value={item.user}/>
                        <input onChange={this.descChangeHandler} type="text" value={item.description}/>
                        <button type="submit">Change</button>
                        {/* <button type="submit">Change</button> */}
                    </form>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    data: state.data
})
const mapDispatchToProps = dispatch => bindActionCreators({
    modifyStoreData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Edit);