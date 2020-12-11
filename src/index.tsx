import React from 'react';
import ReactDom from 'react-dom'

interface Props {
  className: string
}
interface State {
  id: string
}
// ReactDom.render(<h1>hello, world</h1>, document.getElementById("root"))



const props: Props = {
  className: 'title'
}

const Index = (props: Props) => {
  const { className } = props
  return (
    <div className={className}>hello, world</div>
  )
}

class Hello extends React.Component<Props, State> {
  state = {
    id: '11'
  }
  render() {
    return React.createElement<Props, HTMLHeadingElement>('h1', props, 'hello')
  }
}





ReactDom.render(<Index {...props} />, document.getElementById("root"))