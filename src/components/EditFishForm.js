import React from "react";

class EditFishForm extends React.Component {
  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value
    };
    console.log(updatedFish);
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          onChange={this.handleChange}
          name="name"
          value={this.props.fish.name}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="price"
          value={this.props.fish.price}
        />
        <select
          type="text"
          onChange={this.handleChange}
          name="status"
          value={this.props.fish.status}
        >
          <option value="avaiable">Fresh</option>
          <option value="unavailable">Sold out</option>
        </select>
        <textarea
          type="text"
          onChange={this.handleChange}
          name="desc"
          value={this.props.fish.desc}
        />
        <input
          type="text"
          onChange={this.handleChange}
          name="image"
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.index)}>
          Delete {this.props.fish.name}
        </button>
      </div>
    );
  }
}

export default EditFishForm;
