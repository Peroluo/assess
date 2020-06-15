import React, { Fragment, createRef } from 'react';
import styles from './index.less';
let requestAnimationFrame =
  window.requestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.msRequestAnimationFrame;
let cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;

class ScrollTabItem extends React.Component {
  render() {
    const { children } = this.props;
    return <div className={styles.scrollTabItem}>{children}</div>;
  }
}

class ScrollTab extends React.Component {
  static plain = ScrollTabItem;
  constructor(props) {
    super(props);
    this.tabRef = createRef();
    this.funcSCroll = this.rafThrottle(this.listenScroll);
    this.timeOutId = null;
  }
  state = {
    scroolTagHeight: [], // 每个模块的高度
    offsetTop: 0, // 距离顶部距离
    scrollY: 0, // 窗口滚动距离
    tabH: 0, // tab高度
    isFixed: false, // tabs是否固定
    limitCase: [], //限制区间
  };
  componentDidMount() {
    this.computedState();
    window.addEventListener('scroll', this.funcSCroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.funcSCroll);
    clearInterval(this.timeOutId);
  }
  // computedState 计算state初始化值
  computedState() {
    const scroolTags = document.getElementsByClassName('scrollTag');
    const offsetTop = scroolTags[0].offsetTop;
    const tabH = this.tabRef.current.clientHeight;

    let heights = [],
      limitCase = [],
      max = offsetTop - tabH,
      min = offsetTop - tabH;

    for (let i = 0; i < scroolTags.length; i++) {
      const height = scroolTags[i].clientHeight;
      heights.push(height);
      max += height;
      limitCase.push({ min, max });
      min = max;
    }
    this.setState({
      scroolTagHeight: heights,
      offsetTop,
      tabH,
      isFixed: window.scrollY + tabH >= offsetTop,
      limitCase,
    });
  }
  // listenScroll 监听滚动
  listenScroll() {
    const { offsetTop, tabH } = this.state;
    this.setState({ scrollY: window.scrollY, isFixed: window.scrollY + tabH >= offsetTop });
  }
  // rafThrottle 节流
  rafThrottle(func) {
    const context = this;
    return function() {
      let ticking = false;
      let args = arguments;
      if (!ticking) {
        let id = requestAnimationFrame(function() {
          func.apply(context, args);
          ticking = false;
          cancelAnimationFrame(id);
        });
        ticking = true;
      }
    };
  }
  // 滚动到某个位置
  scrollTo = index => {
    this.props.onChoose(index);
    const { offsetTop, tabH, scroolTagHeight } = this.state;
    let scrollH = offsetTop - tabH;
    for (let i = 0; i < index; i++) {
      scrollH += scroolTagHeight[i];
    }
    this.animationScrollTop(scrollH, 10, 200);
    // new AnimationScrollTop({ y: scrollH }, 100, 5);
  };

  // 滚动到某个位置
  animationScrollTop = (y, speed, delay) => {
    let startStep = window.pageYOffset; //开始位置
    const step = (Math.abs(y - startStep) * speed) / delay; // 计算在单位时间需要滚动的范围
    const isUp = y > startStep; // 是否是向上滑动
    this.timeOutId = setInterval(() => {
      if (isUp) {
        if (startStep >= y || startStep + step > y) {
          clearInterval(this.timeOutId);
        }
        startStep += step;
        startStep = startStep > y ? y : startStep;
      } else {
        if (startStep <= y || startStep + step < y) {
          clearInterval(this.timeOutId);
        }
        startStep -= step;
        startStep = startStep < y ? y : startStep;
      }
      window.scrollTo(0, startStep);
    }, speed);
  };

  render() {
    const { isFixed, limitCase, scrollY } = this.state;
    let activeIndex = 0;
    if (isFixed) {
      for (let i = 0; i < limitCase.length; i++) {
        if (scrollY >= limitCase[i].min && scrollY < limitCase[i].max) {
          activeIndex = i;
          break;
        }
      }
    }
    return (
      <Fragment>
        <div className={styles.tabsContent} ref={this.tabRef}>
          <div className={isFixed ? styles.tabsFixed : ''}>
            {isFixed && (
              <div className={styles.fixLine} style={{ left: 3.5 + 25 * activeIndex + '%' }}></div>
            )}
            <div className={styles.tabsWrap}>
              {limitCase.length &&
                React.Children.map(this.props.children, (child, index) => {
                  return (
                    <div
                      className={
                        activeIndex === index && isFixed ? styles.activeTabItem : styles.tabItem
                      }
                      onClick={() => {
                        clearInterval(this.timeOutId);
                        this.scrollTo(index);
                      }}
                    >
                      {child.props.title}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {React.Children.map(this.props.children, child => {
          return <div className={`scrollTag`}>{child}</div>;
        })}
      </Fragment>
    );
  }
}
export default ScrollTab;
