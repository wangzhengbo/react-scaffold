import React from 'react'

type Props = {
}

type State = {
    user: {
        name: string,
        age: number
    }
}

export default class SetState extends React.Component {
    componentDidMount() {
        console.log('#SetState#state#1', this.state)
        this.setState(void 0)
        console.log('#SetState#state#2', this.state)
        this.setState(null)
        console.log('#SetState#state#3', this.state)
        // eslint-disable-next-line
        // this.state = {
        //     a: 1
        // }
        this.setState({
            a: 1
        })
        console.log('#SetState#state#4', this.state)
        this.setState({
            b: 2
        }, () => {
            console.log('#SetState#state#41', JSON.stringify(this.state))
        })
        console.log('#SetState#state#5', JSON.stringify(this.state))
        setTimeout(() => {
            console.log('#SetState#state#6', JSON.stringify(this.state))
            this.setState({
                c: 3
            })
            console.log('#SetState#state#7', JSON.stringify(this.state))
        }, 1000)
        // this.setState()
        // console.log('#SetState#state#4', this.state)
    }

    render() {
        return (
            <div>
                State: { this.state ? JSON.stringify(this.state) : '' }
            </div>
        )
    }
}