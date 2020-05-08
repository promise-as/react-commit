import React, { Component } from 'react'

// 定义组件
export default class App extends Component {
  constructor(props) {
    super(props)

    // 评论列表数据
    this.state = {
      commentsList: [
        {
          username: '张三',
          content: 'React不错'
        },
        {
          username: '李四',
          content: 'React有点难'
        }
      ]
    }

    // 修正 this 指向
    this.add = this.add.bind(this);

  }

  // 增加评论
  add() {
    // 获取用户填写的数据
    const username = this.refs.username.value.trim();
    const content = this.refs.content.value.trim();

    // 判断用户是否填写内容
    if(!username || !content){
      alert('请输入内容')
    }
    
  }

  render() {
    // 获取评论列表
    const { commentsList } = this.state;

    //判断是否显示或隐藏
    const display = commentsList.length ? 'none' : 'block'

    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>

        <div className="container">

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
                  <button type="button" className="btn btn-default pull-right" onClick={this.add}>提交</button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-8">
            <h3 className="reply">评论回复：</h3>
            <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
            <ul className="list-group">

              {
                commentsList.map((item, index) =>
                  <li key={index} className="list-group-item">
                    <div className="handle">
                      <a href="www.baidu.com">删除</a>
                    </div>
                    <p className="user"><span>{item.username}</span><span>说:</span></p>
                    <p className="centence">{item.content}</p>
                  </li>
                )
              }

            </ul>
          </div>

        </div>

      </div>
    )
  }
}
