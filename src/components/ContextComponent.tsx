import React from 'react';
import PropTypes from 'prop-types';

type MessageType = {
    text: string
}

const Button2 = ({children}, context) =>
  <button style={{background: context.color}}>
    {children}
  </button>;

Button2.contextTypes = {color: PropTypes.string};


class Button extends React.Component {
  static contextTypes = {
    color: PropTypes.string
  }

  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

// Button.contextTypes = {
//   color: PropTypes.string
// };

type MessageProps = {
  text: string
}

class Message extends React.Component<MessageProps> {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button><Button>Add</Button>
      </div>
    );
  }
}

type MessageListProps = {
  messages: MessageType[]
}

export default class MessageList extends React.Component<MessageListProps> {
  static childContextTypes = {
    color: PropTypes.string
  }

  // https://zh-hans.reactjs.org/docs/legacy-context.html#gatsby-focus-wrapper
  // 当 state 或者 props 改变的时候，getChildContext 函数就会被调用
  // 问题是，如果组件提供的一个 context 发生了变化，而中间父组件的 shouldComponentUpdate 
  // 返回 false，那么使用到该值的后代组件不会进行更新。使用了 context 的组件则完全失控，
  // 所以基本上没有办法能够可靠的更新 context
  getChildContext() {
    return {
      color: 'purple'
    }
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}

// MessageList.childContextTypes = {
//   color: PropTypes.string
// };
