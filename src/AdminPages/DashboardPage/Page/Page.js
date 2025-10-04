"use client";
import React from "react";
import { useDashboardContext } from "../../../context/DashboardContext/DashboardContext";
import { BarCard } from "./Card/BarCard";
import RecentOrders from "./Card/RecentOrder";
import PieShape from "./Card/PieActiveShape";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineShopping,
  AiOutlineBarChart,
} from "react-icons/ai";
import { toRupiah } from "../../../utils/Money";

export const Page = () => {
  const { ordersBar, orderRecents, products, users, orders, categories } =
    useDashboardContext();

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
        <div className="col-md-6">
          <h6 className="fw-semibold mb-2">Order Daily</h6>
          <div className="card shadow-sm">
            <div className="card-body">
              <BarCard data={ordersBar} />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <h6 className="fw-semibold mb-2">Category Obat</h6>
          <div className="card shadow-sm">
            <div className="card-body">
              <PieShape data={categories} />
            </div>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="mb-3">
        <h6 className="fw-semibold mb-2">Recent Order</h6>
        <RecentOrders data={orderRecents} />
      </div>
    </div>
  );
};
