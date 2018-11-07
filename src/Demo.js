import React, {
  Component,
  Fragment
} from 'react'
import './style.css'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      list: []
    }
    this.handleToggle = this.handleToggle.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
  }

  handleToggle() {
    this.setState((state) => ({
      visible: !state.visible
    }))
  }

  handleAddItem() {
    this.setState((state) => ({
      list: [...state.list, 'new item']
    }))
  }

  render() {
    return ( 
      <Fragment>
        {/* <CSSTransition
          in={this.state.visible}
          timeout={1000}
          classNames='fade'
          unmountOnExit
          onEnter={(el) => {
            el.style.color='blue'
          }}
          onExit={(el) => {
            el.style.color='black'
          }}
          appear={true}>
          <div className = {
            this.state.visible ? 'show1' : 'hide1'
          }>
            Hello world!
          </div>
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item, index) => {
              return (
                <CSSTransition
                  timeout={1000}
                  classNames='fade'
                  unmountOnExit
                  onEnter={(el) => {
                    el.style.color='green'
                  }}
                  onExit={(el) => {
                    el.style.color='black'
                  }}
                  appear={true}
                  key={index}>
                  <div>{item}</div>
                </CSSTransition>                
              )
            })
          }
        </TransitionGroup>        
        <button onClick = {this.handleAddItem}>
          {this.state.visible ? 'hide' : 'show'} 
        </button> 
      </Fragment>
    )
  }
}

export default Demo