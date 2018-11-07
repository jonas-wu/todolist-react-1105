import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'
import axios from 'axios'

class InputForm extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {value: this.props.value}
    }

    handleChange(e) {
        this.setState({value: e.target.value})
        // this.setState({value: this.input.value})
    }

    handleSubmit() {
        if (this.state.value) {
            this.props.submit(this.state.value)
            this.setState({value: ''})
        }    
    }

    render() {
        console.log('InputForm render')
        return (
            <div>
                <input value={this.state.value} 
                    onChange={this.handleChange}
                    className='input'
                    ref={(aaa) => {this.input = aaa}}/>
                <button type='submit' 
                    onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }

    
}

class TodoList extends Component {
    constructor(props) {
        // console.log('constructor')
        super(props)
        this.state = {
            inputValue: 'hint',
            list: []
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleItemDelete = this.handleItemDelete.bind(this)
    }

    handleSubmit(value) {
        this.setState((state) => ({
            list: [...state.list, value]
        }), () => {
            // console.log(this.ul.querySelectorAll('li').length)
        })        
    }

    handleItemDelete(index) {
        const list = [...this.state.list]
        list.splice(index, 1)
        this.setState((state) => ({
            list: list
        }))
    }

    getListItems() {
        const {list} = this.state;
        // console.log(this.state.list)
        return list.map((item, index) => 
            <TodoItem 
                content={item} 
                index={index}
                key={item}
                del={this.handleItemDelete}/>
        )
    }

    render() {
        console.log('TodoList render')
        return (
            <Fragment>
                <InputForm value={this.state.inputValue}
                    submit={this.handleSubmit}/>
                <ul ref={(ul) => {this.ul = ul}}>
                    {this.getListItems()}
                </ul>
            </Fragment>
        )
    }

    componentDidMount() {
        axios.get('/api/todolist')
            .then((res) => {
                console.log('res:', res.data)
                this.setState(() => ({
                    list: [...res.data.list]
                }))
            })
            .catch((err) => {
                console.log('err:', err)
            })
            .then(() => {
                // console.log('end')
            })
    }
}

export default TodoList