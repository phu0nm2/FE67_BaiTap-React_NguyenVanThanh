import React, { Component } from "react";

export default class GheItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBooking: false,

      backgroundColor: "",
    };
  }

  handleChooseChair = () => {
    this.props.chooseChair(this.props.ghe);
    if (this.props.ghe.TrangThai) {
      console.log(this.props.ghe.TrangThai);
    }
    //
    this.setState({
      // Click đổi màu và ngược lại (!isBooking)
      isBooking: !this.state.isBooking,
      backgroundColor: "red",
    });
    console.log(this.props.ghe.TrangThai);
  };

  render() {
    const { SoGhe, TrangThai } = this.props.ghe;
    return (
      <div className=" m-3">
        {TrangThai ? (
          <button
            style={{
              width: 45,
              height: 40,
              borderRadius: 5,
            }}
            className="btn btn-danger disabled"
          >
            {SoGhe}
          </button>
        ) : (
          <button
            style={{
              width: 45,
              height: 40,
              borderRadius: 5,
            }}
            className={
              this.state.isBooking ? "btn btn-success" : "btn btn-secondary"
            }
            onClick={this.handleChooseChair}
          >
            {SoGhe}
          </button>
        )}
      </div>
    );
  }
}
