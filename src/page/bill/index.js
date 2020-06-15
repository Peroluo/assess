import React from 'react';
import styles from './index.less';
class Bill extends React.PureComponent {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    // canvas分辨率
    this.canvasRatio = [1000, 1000];
    this.state = {
      src: '',
    };
  }

  componentDidMount() {
    this.createCavasImg(
      '倩倩',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2026068992,3762484348&fm=26&gp=0.jpg',
    );
  }
  createCavasImg = (userInfo, backgroundImg) => {
    const [x, y] = this.canvasRatio;
    const canvasDom = this.canvasRef.current;
    const ctx = canvasDom.getContext('2d');
    var img = new Image();
    img.src = backgroundImg;
    img.setAttribute('crossOrigin', 'Anonymous');
    img.onload = () => {
      ctx.drawImage(img, 0, 0, x, y);
      ctx.font = '50px Verdana';
      ctx.fillStyle = '#fff';
      ctx.fillText(`2020年，[${userInfo}]的学校类型是：`, 100, 80);
      this.setState({ src: canvasDom.toDataURL('image/png') });
    };
  };
  aa = src => {
    var alink = document.createElement('a');
    alink.href = src;
    alert(src);
    alink.download = 'pic'; // 图片名
    alink.click();
  };
  render() {
    const [x, y] = this.canvasRatio;
    const { src } = this.state;
    return (
      <div id={styles.bill}>
        {src ? (
          <img
            src={src}
            onClick={this.aa.bind(this, src)}
            alt="ss"
            className={styles.crateImg}
          ></img>
        ) : (
          <canvas className={styles.inner} ref={this.canvasRef} width={x} height={y}></canvas>
        )}
      </div>
    );
  }
}

export default Bill;
