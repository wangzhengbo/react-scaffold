import React from 'react'

type Props = {
    message: string
}

type State = {
    upperMessage: string
}

export default class DefaultProps extends React.Component<Props, State> {
    static defaultProps = {
        message: 'hello'
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('#DefaultProps#getDerivedStateFromProps', nextProps, prevState)
        return {
            upperMessage: nextProps.message.toUpperCase()
        }
    }

    constructor(props) {
        super(props)
        console.log('#DefaultProps#constructor', JSON.stringify(props))
    }

    render() {
        return (
            <div>
                DefaultProps
                <div>
                    message: { this.props.message }, upperMessage: { this.state.upperMessage }
                </div>
            </div>
        )
    }
}
