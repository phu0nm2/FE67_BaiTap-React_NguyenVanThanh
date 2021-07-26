import React, { Component } from "react";

export default class DanhSachGheDangDat extends Component {
  renderChairList = () => {
    const renderChairItem = this.props.chairsList.map((item) => {
      const { SoGhe, Gia } = item.chair;
      return (
        <div key={item.chair.SoGhe}>
          <div className="row">
            <span className="ml-3">Số: {SoGhe}</span>
            <span className="ml-3 mr-2">${Gia}</span>
            <p style={{ color: "red" }}> Hủy</p>
          </div>
        </div>
      );
    });
    return renderChairItem;
  };
  render() {
    return (
      <div className="container">
        <div className="colum">{this.renderChairList()}</div>
      </div>
    );
  }
}
