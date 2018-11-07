import React, {Component} from 'react'
import 'antd/dist/antd.css'
import store from './store'
import { connect } from 'react-redux'
import * as actionCreator from './store/actions'
import TodoListUI from './TodoListUI'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8080'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // console.log(store.getState())
    // this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    // store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    // const action = actionCreator.getTodoList()
    // store.dispatch(action)

    // axios.get('/list/get')
    //   .then((res) => {
    //     const data = res.data
    //     console.log("http get:", data)
    //     store.dispatch(actionCreator.initListAction(data.list))
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     store.dispatch(actionCreator.initListAction(['err', 'err2']))
    //   })

    const action = actionCreator.getInitList()
    store.dispatch(action)
  }

  handleStoreChange() {
    console.log('handleStoreChange ', store.getState())
    this.setState(store.getState())
  }

  handleInputChange(e) {
    store.dispatch(actionCreator.changeInputAction(e.target.value))
  }

  handleAddItem() {
    if (this.props.inputValue) {
      store.dispatch(actionCreator.addListItemAction(this.props.inputValue))
    }
  }

  handleDeleteItem(index) {
    store.dispatch(actionCreator.deleteListItemAction(index))
  }

  render() {
    return <TodoListUI inputValue={this.props.inputValue}
              list={this.props.list}
              handleInputChange={this.handleInputChange}
              handleAddItem={this.handleAddItem}
              handleDeleteItem={this.handleDeleteItem}/>
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, null)(TodoList)