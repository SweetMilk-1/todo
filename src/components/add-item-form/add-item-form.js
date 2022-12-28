import React, {Component} from "react";
import './add-item-form.css';



export default class AddItemPanel extends Component {

    state = {
        label: ""
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        const {onAdded} = this.props;
        const {label} = this.state;
        if (label == null || label.length === 0)
            return;
        onAdded(label);
        this.setState({
            label: ""
        });
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    render() {
        return (
            <form className="d-flex add-item-form"
                onSubmit={this.onSubmitForm}>
                <input  type='text'
                        onChange={this.onLabelChange}
                        className="form-control add-item-label" 
                        placeholder="What is to be done" 
                        value={this.state.label} /> 
                <button
                    className="btn btn-outline-secondary">
                        Add
                    </button>
            </form>
        );
    }
}

