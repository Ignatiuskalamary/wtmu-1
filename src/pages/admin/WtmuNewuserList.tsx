import React from "react";

import WtmuUserTable from "../../componentes/admin/WtmuUserTable";

const WtmuNewuserList: React.FC = () => {
  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="mt-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">New Users List</h1>
        </div>
        <div className="relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <table className="w-full text-sm text-gray-500">
            <tbody>
              <WtmuUserTable />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WtmuNewuserList;
