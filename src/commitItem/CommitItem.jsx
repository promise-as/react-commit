import React, { Component } from 'react'

// 定义组件
export default class CommitItem extends Component {
  constructor(props) {
    super(props)

    // 修正 this 指向
    this.delCommit = this.delCommit.bind(this);
  }

  delCommit(index) {
    const { del } = this.props;

    // 调用父亲的方法
    del(index)
  }

  render() {
    // 从父亲组件获取数据
    const { item, index } = this.props;

    return (
      <li className="list-group-item">
        <div className="handle">
          <span className="btn btn-danger" onClick={() => this.delCommit(index)}>删除</span>
        </div>
        <p className="user"><span>{item.username}</span><span>说:</span></p>
        <p className="centence">{item.content}</p>
      </li>
    )
  }
}