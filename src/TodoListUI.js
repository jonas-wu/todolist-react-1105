import React, {Component} from 'react'
import { Input, Button, List } from 'antd'

const TodoListUI = (props) => {
  return (
    <div style={{marginLeft:'10px', marginTop:'10px'}}>
      <div>
        <Input placeholder='please input'
          value={props.inputValue}
          style={{width: '300px', marginRight: '10px'}}
          onChange={props.handleInputChange}/>
        <Button type="primary"
          onClick={props.handleAddItem}>Submit</Button>
      </div>
      <List
        style={{marginTop:'10px', width:'300px'}}
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={() => {
            props.handleDeleteItem(index)
          }}>
            {item}
          </List.Item>
        )}
      />
    </div>
  )
}

export default TodoListUI