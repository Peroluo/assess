import React, { Component } from 'react'
import { connect } from 'dva';
import styles from './index.less';
import {
  NavBar, Icon, List
} from 'antd-mobile';

@connect(({ user }) => ({ user }))
class Index extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <NavBar
          mode="light"
          rightContent={
            <div style={{
              height: '100%',
              padding: '0 15px',
              marginRight: '-15px',
              display: 'flex',
              alignItems: 'center',
            }}
            >
              <Icon type="ellipsis" />
            </div>
          }
        >
          我的
        </NavBar> 
        <div className={styles.header}>
          <img className={styles.avatar} src="/images/yay.jpg" />
        </div>
        <List renderHeader={() => '基本信息'} className={styles['list-header']}>
          <List.Item arrow="horizontal" extra={'查看'}>个人档案</List.Item>
          <List.Item arrow="horizontal" extra={'查看'}>测评记录</List.Item>
          <List.Item arrow="horizontal" >设置</List.Item>
          <List.Item arrow="horizontal" >兑换入口</List.Item>
        </List>
      </div>
    )
  }
}
export default Index;
