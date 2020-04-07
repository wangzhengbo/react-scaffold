import React from 'react'

type Props = {
    name: string
}

type State = {
    age: number,
    func?: () => string
}

export default class LifeCycleComponent extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        console.log('#LifeCycleComponent#constructor')
        console.log('#LifeCycleComponent#props', props)

        this.state = {
            age: 0,
            func: () => {
                return 'test func'
            }
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

        setTimeout(() => {
            this.setState({
                func: null
            })
        }, 6000)
    }

    componentWillMount() {
        console.log('#LifeCycleComponent#componentWillMount')
    }

    componentDidMount() {
        console.log('#LifeCycleComponent#componentDidMount')
    }

    componentWillUnmount() {
        console.log('#LifeCycleComponent#componentWillUnmount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('#LifeCycleComponent#componentWillReceiveProps', arguments)
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log('#LifeCycleComponent#shouldComponentUpdate')
        console.log('#LifeCycleComponent#nextProps', nextProps)
        console.log('#LifeCycleComponent#nextState', nextState)
        console.log('#LifeCycleComponent#nextContext', nextContext)

        if (nextState.age < 30) {
            return false
        }

        return true
    }

    componentWillUpdate() {
        console.log('#LifeCycleComponent#componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('#LifeCycleComponent#componentDidUpdate')
    }

    componentDidCatch(error, errorInfo) {
        console.log('#LifeCycleComponent#componentDidCatch', error, errorInfo)
    }

    render() {
        console.log('#LifeCycleComponent#render')

        // if (!this.state.func) {
        //     throw new Error('no this.state.func')
        // }

        return (
            <div>
                LifeCycleComponent
                <div>
                    Name: { this.props.name }
                </div>
                <div>
                    Age: { this.state.age }
                </div>
                <div>
                    Func: { this.state.func() }
                </div>
            </div>
        )
    }
}