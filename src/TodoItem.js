import React from 'react'
import PropTypes from 'prop-types'

class TodoItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        // console.log(this.props.index)
        const {del, index} = this.props
        del(index)
        // this.props.delete(this.props.index)
    }

    render() {
        // console.log('TodoItem', this.props.index, ' render')
        const {content, test} = this.props
        return (
            <li onClick={this.handleDelete}>{content}</li>
            // React.createElement('li', {}, content)
        )
    }

    shouldComponentUpdate(newProps, newState) {
        if (this.props.content !== newProps.content) {
            return false
        }
        return true
    }
}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    content: PropTypes.string,
    del: PropTypes.func,
    index: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

TodoItem.defaultProps = {
    test: 'hello world!'
}

export default TodoItem