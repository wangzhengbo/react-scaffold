import React from 'react'

type Props = {
}

type State = {
    user: {
        name: string,
        age: number
    }
}

export default class ForceUpdate extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                name: '张三',
                age: 20
            }
        }
    }

    shouldComponentUpdate() {
        console.log('#ForceUpdate#shouldComponentUpdate')
        return true
    }

    render() {
        return (
            <div>
                ForceUpdate
                <div>
                    Name: <input onChange={e => {
                        this.state.user.name = e.target.value // eslint-disable-line
                    }} />
                    Age: <input onChange={e => {
                        const user = this.state.user
                        user.age = e.target.value as any
                        this.setState({
                            user
                        })
                    }} />
                </div>
                <div>
                    Name: {this.state.user.name},
                    Age: {this.state.user.age}
                    <button onClick={() => {
                        this.forceUpdate()
                    }}>Force update</button>
                </div>
            </div>
        )
    }
}