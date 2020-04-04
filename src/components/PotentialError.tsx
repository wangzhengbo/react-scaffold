import React from 'react'

type Props = {
}

type State = {
    error?: Error,
    info?: unknown
}

// https://segmentfault.com/a/1190000011379425
export default class PotentialError extends React.Component<Props, State> {   
    constructor(props) {     
      super(props)   
      this.state = {
          error: null
      }
    }

    componentDidCatch(error, info) {     
      console.log('#PotentialError#componentDidCatch', error, info)
      this.setState({
        error,
        info
      });
    }

    render() {
      console.log('this.state.error', this.state.error)
      if (this.state.error) {
        return <h1>Error: {this.state.error.toString()}</h1>;
      }
      return this.props.children;   
    } 
}
