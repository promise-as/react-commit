import React, { Component } from 'react'

// 定义组件
export default class addCommit extends Component {
  constructor(props){
    super(props)

    // 修正 this 指向
    this.addCommit = this.addCommit.bind(this);
  }

  addCommit(){
    // 获取用户输入的评论
    const username = this.refs.username.value.trim();
    const content = this.refs.content.value.trim();

    // 判断用户名和内容是否为空
    if (!username | !content) {
      alert('不能为空哦！')
      return null
    }

    // 输入内容之后清空输入框
    this.refs.username.value = '';
    this.refs.content.value = '';

    // 从父亲获取数据
    const { add } = this.props;
    // 调用父亲的add方法
    add({username, content})
  }

  render() {
    return (
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label>用户名</label>
            <input type="text" className="form-control" placeholder="用户名"
              ref="username" />
          </div>
          <div className="form-group">
            <label>评论内容</label>
            <textarea className="form-control" rows="6" placeholder="评论内容"
              ref="content"></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-primary pull-right" onClick={this.addCommit}>提交</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}