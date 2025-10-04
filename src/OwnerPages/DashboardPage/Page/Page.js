"use client";
import React from "react";
import { useDashboardContext } from "../../../context/DashboardContext/DashboardContext";
import { BarCard } from "./Card/BarCard";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineBarChart,
} from "react-icons/ai";
import { toRupiah } from "../../../utils/Money";
import LineChartCard from "./Card/LineChartCard";
export const Page = () => {
  const { ordersBar, products, users, orders } =
    useDashboardContext();

    const dataLineCharts = [
        { name: 'Page A', uv: 4000 },
        { name: 'Page B', uv: 3000 },
        { name: 'Page C', uv: 2000 },
        { name: 'Page D', uv: 6000 },
        { name: 'Page E', uv: 1890 },
        { name: 'Page F', uv: 2390 },
        { name: 'Page G', uv: 3490 },
];


  const revenue = ordersBar.reduce(
    (total, item) => total + Number(item.incomeCompleted),
    0
  );

  return (
    <div className="vh-100 overflow-auto">
      {/* Statistik Card */}
      <div className="row g-3 mb-3">
        {/* Revenue */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <div className="fs-2 text-success">
                <AiOutlineBarChart />
              </div>
              <div>
                <h6 className="small text-muted fw-semibold">Revenue</h6>
                <p className="fw-bold mb-0">
                  {toRupiah(revenue)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Orders */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <div className="fs-2 text-primary">
                <AiOutlineShoppingCart />
              </div>
              <div>
                <h6 className="small text-muted fw-semibold">Orders</h6>
                <p className="fw-bold mb-0">{orders.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Products */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <div className="fs-2 text-warning">
                <AiOutlineShopping />
              </div>
              <div>
                <h6 className="small text-muted fw-semibold">Products</h6>
                <p className="fw-bold mb-0">{products.length}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Users */}
        <div className="col-12 col-sm-6 col-lg-3">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex align-items-center gap-3">
              <div className="fs-2 text-purple">
                <AiOutlineUser />
              </div>
              <div>
                <h6 className="small text-muted fw-semibold">Users</h6>
                <p className="fw-bold mb-0">{users.length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="row g-3 mb-3">
        <div className="w-full">
          <h6 className="fw-semibold mb-2">Order Daily</h6>
          <div className="card shadow-sm">
            <div className="card-body">
              <LineChartCard data={ordersBar} />
              {/* <BarCard data={ordersBar} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
