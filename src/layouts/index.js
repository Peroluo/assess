import { Component } from 'react';
import { connect } from 'dva';
import initReactFastclick from 'react-fastclick';
@connect(({ globalStat }) => ({ globalStat }))
class BasicLayout extends Component {
  componentDidMount() {
    window.onpageshow = function(event) {
      if (event.persisted && !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.location.reload();
      }
    };
    this.fixIosClick();
    initReactFastclick();
  }

  // fix Ios键盘收起后，click失效的问题
  fixIosClick() {
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
      document.addEventListener(
        'blur',
        e => {
          if (['input', 'textarea'].includes(e.target.localName)) {
            let id = setTimeout(function() {
              window.scrollTo(0, window.pageYOffset);
              clearTimeout(id);
            }, 200);
          }
        },
        true,
      );
    }
  }

  render() {
    const { children } = this.props;
    return children;
  }
}
export default BasicLayout;
