import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    inputSearch = e => {
        const { value } = e.target
        this.setState({search: value}, () => this.props.searchFor(e.target.value))
    }

    render() {
        return (
            <Form style={{marginRight: '20px'}}>
                <Form.Control type="text" placeholder="Search..." value={this.state.search} onChange={this.inputSearch} />
            </Form>
        )
    }
}

export default SearchBar
