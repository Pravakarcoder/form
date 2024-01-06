import React from "react";

const Form = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Comprehensive Site Details
        </h1>
        <form>
          {/* Site Basic Details Section */}
          {/* Site Basic Details Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Site Basic Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Site ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="site-id"
                >
                  Site ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="site-id"
                  type="text"
                  placeholder="Site ID"
                />
              </div>
              {/* Site Name */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="site-name"
                >
                  Site Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="site-name"
                  type="text"
                  placeholder="Site Name"
                />
              </div>
              {/* Subcontractor */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="subcontractor"
                >
                  Subcontractor
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="subcontractor"
                  type="text"
                  placeholder="Subcontractor"
                />
              </div>
              {/* Tower Type */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="tower-type"
                >
                  Tower Type
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="tower-type"
                  type="text"
                  placeholder="Tower Type"
                />
              </div>
              {/* Tower Height */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="tower-height"
                >
                  Tower Height (m)
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="tower-height"
                  type="number"
                  placeholder="Tower Height in meters"
                />
              </div>
              {/* Equipment Room */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="equipment-room"
                >
                  Equipment Room
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="equipment-room"
                  type="text"
                  placeholder="Equipment Room"
                />
              </div>
              {/* Solar Site */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="solar-site"
                >
                  Solar Site
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="solar-site"
                  type="text"
                  placeholder="Solar Site"
                />
              </div>
              {/* Guard Room */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="guard-room"
                >
                  Guard Room
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="guard-room"
                  type="text"
                  placeholder="Guard Room"
                />
              </div>
              {/* Fencing */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="fencing"
                >
                  Fencing
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="fencing"
                  type="text"
                  placeholder="Fencing"
                />
              </div>
              {/* Hub Site */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="hub-site"
                >
                  Hub Site
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="hub-site"
                  type="text"
                  placeholder="Hub Site"
                />
              </div>
              {/* Hub Site Type */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="hub-site-type"
                >
                  Hub Site Type
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="hub-site-type"
                  type="text"
                  placeholder="Hub Site Type"
                />
              </div>
            </div>
          </div>
          {/* Repeat for other fields like Site Name, Subcontractor, etc. */}
          {/* Antenna and RRU Details Section */}
          {/* Include fields for Antenna ID, Antenna Type, Antenna Qty, etc. */}
          {/* Antenna and RRU Details Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Antenna and RRU Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Antenna ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="antenna-id"
                >
                  Antenna ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="antenna-id"
                  type="text"
                  placeholder="Antenna ID"
                />
              </div>
              {/* Antenna Type */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="antenna-type"
                >
                  Antenna Type
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="antenna-type"
                  type="text"
                  placeholder="Antenna Type (GSM/MW)"
                />
              </div>
              {/* Antenna Qty */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="antenna-qty"
                >
                  Antenna Qty
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="antenna-qty"
                  type="number"
                  placeholder="Antenna Quantity"
                />
              </div>
              {/* Antenna Height */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="antenna-height"
                >
                  Antenna Height
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="antenna-height"
                  type="number"
                  placeholder="Antenna Height"
                />
              </div>
              {/* Boom Availability */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="boom-availability"
                >
                  Boom Availability
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="boom-availability"
                >
                  <option value="">Select Boom Availability</option>
                  <option value="available">Available</option>
                  <option value="not-available">Not Available</option>
                </select>
              </div>
              {/* No of RRU */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="rru-no"
                >
                  No of RRU
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="rru-no"
                  type="number"
                  placeholder="Number of RRU"
                />
              </div>
              {/* Electrical Tilt */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="electrical-tilt"
                >
                  Electrical Tilt
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="electrical-tilt"
                  type="text"
                  placeholder="Electrical Tilt"
                />
              </div>
            </div>
          </div>
          {/* Power Supply and Backup Systems Section */}
          {/* Include fields for Power System ID, Transformer Brand, Transformer Capacity, etc. */}
          {/* Power Supply and Backup Systems Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Power Supply and Backup Systems
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Power System ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="power-system-id"
                >
                  Power System ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="power-system-id"
                  type="text"
                  placeholder="Power System ID"
                />
              </div>
              {/* Transformer Brand */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="transformer-brand"
                >
                  Transformer Brand
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="transformer-brand"
                  type="text"
                  placeholder="Transformer Brand"
                />
              </div>
              {/* Transformer Capacity */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="transformer-capacity"
                >
                  Transformer Capacity (KVA)
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="transformer-capacity"
                  type="number"
                  placeholder="Transformer Capacity in KVA"
                />
              </div>
              {/* Power Type */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="power-type"
                >
                  Power Type (1P/3P)
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="power-type"
                >
                  <option value="">Select Power Type</option>
                  <option value="1p">1P</option>
                  <option value="3p">3P</option>
                </select>
              </div>
              {/* MCCB Rating */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="mccb-rating"
                >
                  MCCB Rating
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="mccb-rating"
                  type="text"
                  placeholder="MCCB Rating"
                />
              </div>
              {/* Solar Controller Vendor */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="solar-controller-vendor"
                >
                  Solar Controller Vendor
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="solar-controller-vendor"
                  type="text"
                  placeholder="Solar Controller Vendor"
                />
              </div>
              {/* DG/Fuel Cell Vendor */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="dg-fuel-cell-vendor"
                >
                  DG/Fuel Cell Vendor
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="dg-fuel-cell-vendor"
                  type="text"
                  placeholder="DG/Fuel Cell Vendor"
                />
              </div>
              {/* DG/Fuel Cell Capacity */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="dg-fuel-cell-capacity"
                >
                  DG/Fuel Cell Capacity
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="dg-fuel-cell-capacity"
                  type="number"
                  placeholder="DG/Fuel Cell Capacity"
                />
              </div>
              {/* Total Loadshedding Hours */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="total-loadshedding-hours"
                >
                  Total Loadshedding in hours
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="total-loadshedding-hours"
                  type="number"
                  placeholder="Total Loadshedding Hours"
                />
              </div>
              {/* Loadshedding Type */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="loadshedding-type"
                >
                  Periodic/Unperiodic Loadshedding
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="loadshedding-type"
                >
                  <option value="">Select Loadshedding Type</option>
                  <option value="periodic">Periodic</option>
                  <option value="unperiodic">Unperiodic</option>
                </select>
              </div>
            </div>
          </div>
          {/* Battery and Rectifier Details Section */}
          {/* Include fields for Battery ID, Battery Vendor, Battery Type, etc. */}
          {/* Battery and Rectifier Details Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Battery and Rectifier Details
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Battery ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="battery-id"
                >
                  Battery ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="battery-id"
                  type="text"
                  placeholder="Battery ID"
                />
              </div>
              {/* Battery Vendor */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="battery-vendor"
                >
                  Battery Vendor
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="battery-vendor"
                  type="text"
                  placeholder="Battery Vendor"
                />
              </div>
              {/* Battery Type */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="battery-type"
                >
                  Battery Type
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="battery-type"
                  type="text"
                  placeholder="Battery Type"
                />
              </div>
              {/* Battery Capacity */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="battery-capacity"
                >
                  Capacity
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="battery-capacity"
                  type="number"
                  placeholder="Battery Capacity"
                />
              </div>
              {/* Battery Voltage */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="battery-voltage"
                >
                  Volt
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="battery-voltage"
                  type="number"
                  placeholder="Battery Voltage"
                />
              </div>
              {/* Number of Cells */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="no-of-cells"
                >
                  No of Cell
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="no-of-cells"
                  type="number"
                  placeholder="Number of Cells"
                />
              </div>
              {/* Rectifier Model */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="rectifier-model"
                >
                  Rectifier Model
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="rectifier-model"
                  type="text"
                  placeholder="Rectifier Model"
                />
              </div>
              {/* Number of Rectifier Modules */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="no-of-rectifier-modules"
                >
                  Number of Rectifier modules
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="no-of-rectifier-modules"
                  type="number"
                  placeholder="Number of Rectifier Modules"
                />
              </div>
            </div>
          </div>
          {/* Electrical Load and Grounding Section */}
          {/* Include fields for Electrical Load ID, Site Load(DC), NEA Load, etc. */}
          {/* Electrical Load and Grounding Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Electrical Load and Grounding
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Electrical Load ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="electrical-load-id"
                >
                  Electrical Load ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="electrical-load-id"
                  type="text"
                  placeholder="Electrical Load ID"
                />
              </div>
              {/* Site Load (DC) */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="site-load-dc"
                >
                  Site Load (DC)
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="site-load-dc"
                  type="number"
                  placeholder="Site Load (DC)"
                />
              </div>
              {/* NEA Load (lr, ly, lb, ln) */}
              {/* Assuming NEA Load has multiple components, they can be split into separate fields or combined in one */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="nea-load"
                >
                  NEA Load (lr, ly, lb, ln)
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="nea-load"
                  type="text"
                  placeholder="NEA Load (lr, ly, lb, ln)"
                />
              </div>
              {/* Grounding Values (Pit1, Pit2, Pit3) */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="grounding-values"
                >
                  Grounding Values (Pit1, Pit2, Pit3)
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="grounding-values"
                  type="text"
                  placeholder="Grounding Values (Pit1, Pit2, Pit3)"
                />
              </div>
              {/* No of poles between Tapping point and LT panel */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="no-of-poles"
                >
                  No of poles between Tapping point and LT panel
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="no-of-poles"
                  type="number"
                  placeholder="No of poles"
                />
              </div>
            </div>
          </div>
          {/* Maintenance and Civil Work Section */}
          {/* Include fields for Task ID, Maintenance Date, Civil Work Required, etc. */}
          {/* Maintenance and Civil Work Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Maintenance and Civil Work
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Task ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="task-id"
                >
                  Task ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="task-id"
                  type="text"
                  placeholder="Task ID"
                />
              </div>
              {/* Maintenance Date */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="maintenance-date"
                >
                  Maintenance Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="maintenance-date"
                  type="date"
                  placeholder="Maintenance Date"
                />
              </div>
              {/* Civil Work Required */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="civil-work-required"
                >
                  Civil Work Required
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="civil-work-required"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {/* Branch Cutting Requirement */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="branch-cutting-required"
                >
                  Branch Cutting Requirement
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="branch-cutting-required"
                >
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
              {/* Gravel Laying */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="gravel-laying"
                >
                  Gravel Laying
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="gravel-laying"
                >
                  <option value="">Select</option>
                  <option value="completed">Completed</option>
                  <option value="pending">Pending</option>
                </select>
              </div>
              {/* Remarks Civil Database */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="remarks-civil-database"
                >
                  Remarks Civil Database
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="remarks-civil-database"
                  placeholder="Remarks"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          {/* Site Operational History Section */}
          {/* Include fields for Operational History ID, Commissioning Date, etc. */}
          {/* Site Operational History Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Site Operational History
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Operational History ID */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="operational-history-id"
                >
                  Operational History ID
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="operational-history-id"
                  type="text"
                  placeholder="Operational History ID"
                />
              </div>
              {/* Commissioning Date */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="commissioning-date"
                >
                  Commissioning Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="commissioning-date"
                  type="date"
                  placeholder="Commissioning Date"
                />
              </div>
              {/* Recent Modification Date */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="recent-modification-date"
                >
                  Recent Modification Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="recent-modification-date"
                  type="date"
                  placeholder="Recent Modification Date"
                />
              </div>
              {/* Operational Status */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="operational-status"
                >
                  Operational Status
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="operational-status"
                >
                  <option value="">Select Status</option>
                  <option value="operational">Operational</option>
                  <option value="non-operational">Non-Operational</option>
                  <option value="under-maintenance">Under Maintenance</option>
                </select>
              </div>
            </div>
          </div>
          {/* Project Management Section */}
          {/* Include fields for Project Manager, Start Date, End Date, etc. */}
          {/* Project Management Section */}
          <div className="form-section mb-8">
            <h2 className="text-xl font-semibold mb-6 text-gray-800">
              Project Management
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {/* Project Manager */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="project-manager"
                >
                  Project Manager
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="project-manager"
                  type="text"
                  placeholder="Project Manager Name"
                />
              </div>
              {/* Project Start Date */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="project-start-date"
                >
                  Start Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="project-start-date"
                  type="date"
                  placeholder="Project Start Date"
                />
              </div>
              {/* Project End Date */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="project-end-date"
                >
                  End Date
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="project-end-date"
                  type="date"
                  placeholder="Project End Date"
                />
              </div>
              {/* Project Current Status */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="project-current-status"
                >
                  Current Status
                </label>
                <select
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="project-current-status"
                >
                  <option value="">Select Status</option>
                  <option value="planning">Planning</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="on-hold">On Hold</option>
                </select>
              </div>
              {/* Remarks Power Database */}
              <div>
                <label
                  className="block text-gray-600 text-sm font-medium mb-2"
                  htmlFor="remarks-power-database"
                >
                  Remarks Power Database
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="remarks-power-database"
                  placeholder="Remarks"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-6">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
