import React from 'react';
import { Prompt } from 'react-router-dom';
import Router from 'umi/router';
import { Modal } from 'antd-mobile';
import Track from '@/utils/track';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isComplete: false,
    };
  }
  render() {
    const { when, sureUrl, backHome, isQues } = this.props;
    const { isComplete } = this.state;
    return (
      <Prompt
        when={true}
        message={location => {
          if (isComplete === true) {
            return true;
          }
          if (!when) {
            if (backHome === true) {
              const state = localStorage.getItem('state');
              const base = sureUrl || '/';
              this.setState({ isComplete: true }, () => {
                Router.push(base + `?${state}`);
              });
            } else {
              Modal.alert(
                '',
                <div className="modal_content">
                  <div>中途退出将不保存{isQues ? '诊断' : '测评'}记录</div>
                  <div>确认退出吗？</div>
                </div>,
                [
                  {
                    text: <span className="modal_green_btn">取消</span>,
                    onPress: () => {
                      Track.tcFnc('10023');
                    },
                  },
                  {
                    text: <span className="modal_grey_btn">确定</span>,
                    onPress: () => {
                      Track.tcFnc('10024');
                      this.setState({ isComplete: true }, () => {
                        const state = localStorage.getItem('state');
                        const base = sureUrl || '/';
                        this.setState({ isComplete: true }, () => {
                          Router.push(base + `?${state}`);
                        });
                      });
                    },
                  },
                ],
              );
            }
          }

          return when;
        }}
      ></Prompt>
    );
  }
}
export default Index;
