import React from 'react'

type Props = {
}

type State = {
    user: {
        name: string,
        age: number
    }
}

class TestComponent extends React.Component<Props, State> {
    hello() {
        console.log('hello, world')
    }
    
    render() {
        return (
            <div>
                TestComponent
            </div>
        )
    }
}

export default class RefComponent extends React.Component<Props, State> {
    render() {
        return (
            <div>
                RefComponent
                <TestComponent ref={e => {
                    console.log('ref1', e)
                    if (e) {
                        console.log('ref1.hello', e.hello())
                    }
                }} />
                <input id="haha" ref={e => {
                    console.log('ref2', e)
                    if (e) {
                        console.log('ref2.id', e.id)
                    }
                }}></input>
            </div>
        )
    }
}