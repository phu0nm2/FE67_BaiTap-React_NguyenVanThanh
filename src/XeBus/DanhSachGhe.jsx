import React, { Component } from "react";
import GheItem from "./GheItem";

export default class DanhSachGhe extends Component {
  renderChair = () => {
    const renderHTML = this.props.chairs.map((item) => {
      return (
        <div className="col-3" key={item.SoGhe}>
          <GheItem ghe={item} chooseChair={this.props.chooseChair}></GheItem>
        </div>
      );
    });
    return renderHTML;
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderChair()}</div>
      </div>
    );
  }
}
