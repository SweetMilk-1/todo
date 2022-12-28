import React, {Component} from "react";
import './item-status-filter.css'

export default class ItemStatusFilter extends Component {

    onChangeFilter = (e) => this.props.onChangeFilter(e.target.name)

    additionalStyle = (name) => {

        const {selected} = this.props;
        if (name === selected)
            return "btn-primary"; 
        return "btn-outline-secondary"
    }

    render() {
       
        return (
            <div className="btn-group" onClick={this.onChangeFilter}>
                <button type="button"
                        name="all"
                        className={"btn " + this.additionalStyle('all')}>All</button>
                <button type="button"
                        name="active"
                        className={"btn " + this.additionalStyle('active')}>Active</button>
                <button type="button"
                        name="done"
                        className={"btn " + this.additionalStyle('done')}>Done</button>
            </div>
        );
    }
}

