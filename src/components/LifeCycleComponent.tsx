import React from 'react'

type Props = {
    name: string
}

type State = {
    age: number
}

export default class LifiCycleComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        console.log('#LifiCycleComponent#constructor')
        console.log('#LifiCycleComponent#props', props)

        this.state = {
            age: 0
        }

        setTimeout(() => {
            this.setState({
                age: 20
            })
        }, 2000)

        setTimeout(() => {
            this.setState({
                age: 40
            })
        }, 4000)
    }

    componentWillMount() {
        console.log('#LifiCycleComponent#componentWillMount')
    }

    componentDidMount() {
        console.log('#LifiCycleComponent#componentDidMount')
    }

    componentWillUnmount() {
        console.log('#LifiCycleComponent#componentWillUnmount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('#LifiCycleComponent#componentWillReceiveProps', arguments)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('#LifiCycleComponent#shouldComponentUpdate')
        console.log('#LifiCycleComponent#nextProps', nextProps)
        console.log('#LifiCycleComponent#nextState', nextState)
        console.log('#LifiCycleComponent#nextContext', nextContext)

        if (nextState.age < 30) {
            return false
        }

        return true
    }

    componentWillUpdate() {
        console.log('#LifiCycleComponent#componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('#LifiCycleComponent#componentDidUpdate')
    }

    render() {
        console.log('#LifiCycleComponent#render')

        return (
            <div>
                LifiCycleComponent
                <div>
                    Name: { this.props.name }
                </div>
                <div>
                    Age: { this.state.age }
                </div>
            </div>
        )
    }
}