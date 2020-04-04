import React from 'react'

type Props = {
    message: string
}

type State = {
    upperMessage: string
}

export default class GetSnapshotBeforeUpdate extends React.Component<Props, State> {
    constructor(props) {
        super(props)
        console.log('#GetSnapshotBeforeUpdate#constructor', JSON.stringify(props))
        this.state = {
            upperMessage: this.props.message.toUpperCase()
        }
        setTimeout(() => {
            this.setState({
                upperMessage: 'Xxxx'
            })
        }, 2000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('#GetSnapshotBeforeUpdate#getSnapshotBeforeUpdate', prevProps, prevState)
    }

    componentDidUpdate() {
        console.log('#GetSnapshotBeforeUpdate#componentDidUpdate')
    }

    render() {
        console.log('#GetSnapshotBeforeUpdate#render')
        return (
            <div>
                GetSnapshotBeforeUpdate
                <div>
                    message: { this.props.message }
                </div>
            </div>
        )
    }
}
