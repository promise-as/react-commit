import React, { Component } from 'react'

import AddCommit from '../addCommit/AddCommit.jsx'
import CommitList from '../commitList/CommitList.jsx'

// 定义组件
export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      commitList: [
        {
          username: '张三',
          content: 'react不难'
        },
        {
          username: '李四',
          content: 'react难学'
        }
      ]
    }

    // 修正 this 指向
    this.add = this.add.bind(this);
    this.del = this.del.bind(this);
  }

  add(item) {
    // 获取数据
    const { commitList } = this.state;
    // 从顶部添加数据
    commitList.unshift(item);
    // 更新 this.state 的数据
    this.setState({
      commitList
    })
  }

  del(index) {
    // 获取数据
    const { commitList } = this.state;
    if (window.confirm(`是否要删除${commitList[index].username}这条评论`)) {
      // 删除对应的item
      commitList.splice(index, 1);
      // 更新 this.state 的数据
      this.setState({
        commitList
      })
    }

  }

  render() {
    // 获取数据
    const { commitList } = this.state;

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
          {/* add方法是通过标签的属性传递给AddCommit组件 */}
          <AddCommit add={this.add}/>

          <CommitList commitList={commitList} del={this.del}/>

        </div>

      </div>
    )
  }
}
