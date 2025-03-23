import React from "react";
import LayoutHeaderAdmin from "../../layouts/LayoutHeaderAdmin";
import ChartDashboard from "../../components/admin/ChartDashboard";

export default function DashboardAdmin() {
  return (
    <>
      <LayoutHeaderAdmin content={<ChartDashboard />} />
    </>
  );
}
