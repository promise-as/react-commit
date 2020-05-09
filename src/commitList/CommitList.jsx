import React, { Component } from 'react'

import CommitItem from '../commitItem/CommitItem.jsx'

// 定义组件
export default class CommitList extends Component {

  render() {
    // 从父亲组件获取数据
    const { commitList, del } = this.props;
    // 判读是否有评论
    const display = commitList.length ? 'none' : 'block';

    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{ display }}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            commitList.map((item, index) => {
              return (
                // del={del} 是要把爷爷的属性传递给孙子
                <CommitItem item={item} key={index} index={index} del={del}/>
              )
            })
          }
        </ul>
      </div>
    )
  }
}