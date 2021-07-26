import React, { Component } from "react";
import DanhSachGhe from "./DanhSachGhe";
import DanhSachGheDangDat from "./DanhSachGheDangDat";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chairsList: [],
    };
  }

  chooseChair = (ghe) => {
    const cloneChairs = [...this.state.chairsList];

    const foundIndex = cloneChairs.findIndex((item) => {
      return item.chair.SoGhe === ghe.SoGhe;
    });

    // không có thì push vào, có rồi mà chọn lại thì xóa đi
    if (foundIndex === -1) {
      const chairItem = { chair: ghe };

      cloneChairs.push(chairItem);
    } else {
      cloneChairs.splice(foundIndex, 1);
    }

    console.log(cloneChairs);

    // console.log(this.state);
    this.setState(
      {
        chairsList: cloneChairs,
      },
      () => {}
    );
  };

  chairs = [
    { SoGhe: 1, TenGhe: "số 1 ", Gia: 100, TrangThai: true },
    { SoGhe: 2, TenGhe: "số 2 ", Gia: 100, TrangThai: true },
    { SoGhe: 3, TenGhe: "số 3 ", Gia: 100, TrangThai: false },
    { SoGhe: 4, TenGhe: "số 4 ", Gia: 100, TrangThai: false },
    { SoGhe: 5, TenGhe: "số 5 ", Gia: 100, TrangThai: false },
    { SoGhe: 6, TenGhe: "số 6 ", Gia: 100, TrangThai: false },
    { SoGhe: 7, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
    { SoGhe: 8, TenGhe: "số 7 ", Gia: 100, TrangThai: false },
    { SoGhe: 9, TenGhe: "số 9 ", Gia: 100, TrangThai: false },
    { SoGhe: 10, TenGhe: "số 10 ", Gia: 100, TrangThai: false },
    { SoGhe: 11, TenGhe: "số 11 ", Gia: 100, TrangThai: false },
    { SoGhe: 12, TenGhe: "số 12 ", Gia: 100, TrangThai: false },
    { SoGhe: 13, TenGhe: "số 13 ", Gia: 100, TrangThai: false },
    { SoGhe: 14, TenGhe: "số 14 ", Gia: 100, TrangThai: false },
    { SoGhe: 15, TenGhe: "số 15 ", Gia: 100, TrangThai: false },
    { SoGhe: 16, TenGhe: "số 16 ", Gia: 100, TrangThai: false },
    { SoGhe: 17, TenGhe: "số 17 ", Gia: 100, TrangThai: false },
    { SoGhe: 18, TenGhe: "số 18 ", Gia: 100, TrangThai: false },
    { SoGhe: 19, TenGhe: "số 19 ", Gia: 100, TrangThai: false },
    { SoGhe: 20, TenGhe: "số 20 ", Gia: 100, TrangThai: false },
    { SoGhe: 21, TenGhe: "số 21 ", Gia: 100, TrangThai: false },
    { SoGhe: 22, TenGhe: "số 22 ", Gia: 100, TrangThai: false },
    { SoGhe: 23, TenGhe: "số 23 ", Gia: 100, TrangThai: false },
    { SoGhe: 24, TenGhe: "số 24 ", Gia: 100, TrangThai: false },
    { SoGhe: 25, TenGhe: "số 25 ", Gia: 100, TrangThai: false },
    { SoGhe: 26, TenGhe: "số 26 ", Gia: 100, TrangThai: false },
    { SoGhe: 27, TenGhe: "số 27 ", Gia: 100, TrangThai: false },
    { SoGhe: 28, TenGhe: "số 28 ", Gia: 100, TrangThai: false },
    { SoGhe: 29, TenGhe: "số 29 ", Gia: 100, TrangThai: false },
    { SoGhe: 30, TenGhe: "số 30 ", Gia: 100, TrangThai: true },
    { SoGhe: 31, TenGhe: "số 31 ", Gia: 100, TrangThai: false },
    { SoGhe: 32, TenGhe: "số 32 ", Gia: 100, TrangThai: false },
    { SoGhe: 33, TenGhe: "số 33 ", Gia: 100, TrangThai: false },
    { SoGhe: 34, TenGhe: "số 34 ", Gia: 100, TrangThai: false },
    { SoGhe: 35, TenGhe: "số 35 ", Gia: 100, TrangThai: false },
  ];

  render() {
    return (
      <div className="container-fluid">
        <div className="text-warning" style={{ fontSize: 35 }}>
          ĐẶT VÉ XE BUS HÃNG CYBERSOFT
        </div>
        <div className="row">
          <div className="col-6">
            <h4 className="">Tài xế</h4>
            <DanhSachGhe
              chairs={this.chairs}
              chooseChair={this.chooseChair}
            ></DanhSachGhe>
          </div>
          <div className="col-6">
            <h4 className="text-warning"> Danh Sách Ghế Đã Đặt</h4>

            <DanhSachGheDangDat
              chairsList={this.state.chairsList}
            ></DanhSachGheDangDat>
          </div>
        </div>
      </div>
    );
  }
}
