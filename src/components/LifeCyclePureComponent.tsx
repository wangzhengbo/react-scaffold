import React from 'react'

type Props = {
    name: string
}

type State = {
    age: number
}

export default class LifiCyclePureComponent extends React.PureComponent<Props, State> {
    constructor(props) {
        super(props)
        console.log('#LifiCyclePureComponent#constructor')
        console.log('#LifiCyclePureComponent#props', props)

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
        console.log('#LifiCyclePureComponent#componentWillMount')
    }

    componentDidMount() {
        console.log('#LifiCyclePureComponent#componentDidMount')
    }

    componentWillUnmount() {
        console.log('#LifiCyclePureComponent#componentWillUnmount')
    }

    componentWillReceiveProps(nextProps) {
        console.log('#LifiCyclePureComponent#componentWillReceiveProps', arguments)
    }

    componentWillUpdate() {
        console.log('#LifiCyclePureComponent#componentWillUpdate')
    }

    componentDidUpdate() {
        console.log('#LifiCyclePureComponent#componentDidUpdate')
    }

    render() {
        console.log('#LifiCyclePureComponent#render')

        return (
            <div>
                LifiCyclePureComponent
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