import React from 'react';
import * as ReactDOM from 'react-dom';

import Pop from './index';

// class PopPlus extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: false,
//     };
//   }
//   componentDidMount() {
//     this.props.onRef(this);
//   }
//   close = () => {
//     this.setState({
//       isShow: false,
//     });
//   };
//   show = () => {
//     this.setState({
//       isShow: true,
//     });
//   };
//   render() {
//     const { title, btnText, children } = this.props;
//     const { isShow } = this.state;
//     return;
//   }
// }
// export default PopPlus;

export default function PopPlus({ title, btnText, content }) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(
    <Pop
      title={title}
      popClose={() => {
        ReactDOM.unmountComponentAtNode(div);
        if (div && div.parentNode) {
          div.parentNode.removeChild(div);
        }
      }}
      btnText={btnText}
    >
      {content}
    </Pop>,
    div,
  );
}
