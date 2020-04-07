import React from 'react'

type Props = {
    name: string
}

type State = {
    age: number
}

export default class LifeCyclePureComponent extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props)
        console.log('#LifeCyclePureComponent#constructor')
        console.log('#LifeCyclePureComponent#props', props)

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
        console.log('#LifeCyclePureComponent#componentWillMount')
    }

    componentDidMount() {
        console.log('#LifeCyclePureComponent#componentDidMount')
    }

    componentWillUnmount() {
        console.log('#LifeCyclePureComponent#componentWillUnmount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('#LifeCyclePureComponent#componentWillReceiveProps', arguments)
    }

    componentWillUpdate() {
        console.log('#LifeCyclePureComponent#componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('#LifeCyclePureComponent#componentDidUpdate')
    }

    render() {
        console.log('#LifeCyclePureComponent#render')

        return (
            <div>
                LifeCyclePureComponent
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