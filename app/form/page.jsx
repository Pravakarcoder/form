import React from "react";
import CustomForm from "../components/CustomForm";

const FirstForm = [
  {
    label: "Site ID",
    id: "site-id",
    type: "text",
    placeholder: "Site ID",
  },
  {
    label: "Site Name",
    id: "site-name",
    type: "text",
    placeholder: "Site Name",
  },
  {
    label: "Subcontractor",
    id: "subcontractor",
    type: "text",
    placeholder: "Subcontractor",
  },
  {
    label: "Tower Type",
    id: "tower-type",
    type: "text",
    placeholder: "Tower Type",
  },
  {
    label: "Tower Height (m)",
    id: "tower-height",
    type: "number",
    placeholder: "Tower Height in meters",
  },
  {
    label: "Equipment Room",
    id: "equipment-room",
    type: "text",
    placeholder: "Equipment Room",
  },
  {
    label: "Solar Site",
    id: "solar-site",
    type: "text",
    placeholder: "Solar Site",
  },
  {
    label: "Guard Room",
    id: "guard-room",
    type: "text",
    placeholder: "Guard Room",
  },
  {
    label: "Fencing",
    id: "fencing",
    type: "text",
    placeholder: "Fencing",
  },
  {
    label: "Hub Site",
    id: "hub-site",
    type: "text",
    placeholder: "Hub Site",
  },
  {
    label: " Hub Site Type",
    id: "hub-site-type",
    type: "text",
    placeholder: "Hub Site Type",
  },
];
const SecondForm = [
  {
    label: "Antenna ID",
    id: "antenna-id",
    type: "text",
    placeholder: "Antenna ID",
  },
  {
    label: "Antenna Type",
    id: "antenna-type",
    type: "text",
    placeholder: "Antenna Type (GSM/MW)",
  },
  {
    label: "Antenna Qty",
    id: "antenna-qty",
    type: "number",
    placeholder: "Antenna Quantity",
  },
  {
    label: "Antenna Height",
    id: "antenna-height",
    type: "number",
    placeholder: "Antenna Height",
  },
  {
    id: "boom-availability",
    label: "Boom Availability",
    type: "select",
    options: [
      { value: "", label: "Select Boom Availability" },
      { value: "available", label: "Available" },
      { value: "not-available", label: "Not Available" },
    ],
  },
  {
    label: "No of RRU ",
    id: "rru-no",
    type: "number",
    placeholder: "Number of RRU",
  },

  {
    label: "Electrical Tilt",
    id: "electrical-tilt",
    type: "text",
    placeholder: "Electrical Tilt",
  },
];
const ThirdForm = [
  {
    label: "Power System ID",
    id: "power-system-id",
    type: "text",
    placeholder: "Power System ID",
  },
  {
    label: "Transformer Brand",
    id: "transformer-brand",
    type: "text",
    placeholder: "Transformer Brand",
  },
  {
    label: "Transformer Capacity (KVA)",
    id: "transformer-capacity",
    type: "number",
    placeholder: "Transformer Capacity in KVA",
  },

  {
    id: "power-type",
    label: "Power Type (1P/3P)",
    type: "select",
    options: [
      { value: "", label: "Select Power Type" },
      { value: "1p", label: "1p" },
      { value: "3p", label: "3p" },
    ],
  },
  {
    label: "MCCB Rating",
    id: "mccb-rating",
    type: "text",
    placeholder: "MCCB Rating",
  },

  {
    label: "Solar Controller Vendor",
    id: "solar-controller-vendor",
    type: "text",
    placeholder: "Solar Controller Vendor",
  },
  {
    label: "DG/Fuel Cell Vendor",
    id: "dg-fuel-cell-vendor",
    type: "text",
    placeholder: "DG/Fuel Cell Vendor",
  },
  {
    label: "DG/Fuel Cell Capacity",
    id: "dg-fuel-cell-capacity",
    type: "number",
    placeholder: "DG/Fuel Cell Capacity",
  },
  {
    label: "Total Loadshedding in hours",
    id: "total-loadshedding-hours",
    type: "number",
    placeholder: "Total Loadshedding Hours",
  },
  {
    label: "Periodic/Unperiodic Loadshedding",
    id: "loadshedding-type",
    type: "number",
    type: "select",
    options: [
      { value: "", label: "Select Loadshedding Type" },
      { value: "periodic", label: "Periodic" },
      { value: "unperiodic", label: "Unperiodic" },
    ],
  },
];
const FourthForm = [
  {
    label: "Battery ID",
    id: "battery-id",
    type: "text",
    placeholder: "Battery ID",
  },
  {
    label: "Battery Vendor",
    id: "battery-vendor",
    type: "text",
    placeholder: "Battery Vendor",
  },
  {
    label: "Battery Type",
    id: "battery-type",
    type: "text",
    placeholder: "Battery Type",
  },
  {
    label: "Capacity",
    id: "battery-capacity",
    type: "number",
    placeholder: "Battery Capacity",
  },

  {
    id: "Volt",
    label: "battery-voltage",
    type: "number",
    placeholder: "Battery Voltage",
  },
  {
    label: "No of Cell",
    id: "no-of-cells",
    type: "number",
    placeholder: "Number of Cells",
  },

  {
    label: "Rectifier Model",
    id: "rectifier-model",
    type: "text",
    placeholder: "Rectifier Model",
  },
  {
    label: "Number of Rectifier modules",
    id: "no-of-rectifier-modules",
    type: "number",
    placeholder: "Number of Rectifier Modules",
  },
];
const FifthForm = [
  {
    label: "Electrical Load ID",
    id: "electrical-load-id",
    type: "text",
    placeholder: "Electrical Load ID",
  },
  {
    label: " Site Load (DC)",
    id: "site-load-dc",
    type: "number",
    placeholder: "Site Load (DC)",
  },
  {
    label: "NEA Load (lr, ly, lb, ln)",
    id: "nea-load",
    type: "text",
    placeholder: "NEA Load (lr, ly, lb, ln)",
  },
  {
    label: "Grounding Values (Pit1, Pit2, Pit3)",
    id: "grounding-values",
    type: "text",
    placeholder: "Grounding Values (Pit1, Pit2, Pit3)",
  },

  {
    id: "No of poles between Tapping point and LT panel",
    label: "no-of-poles",
    type: "number",
    placeholder: "No of poles",
  },
];
const SixthForm = [
  {
    label: "Task ID",
    id: "task-id",
    type: "text",
    placeholder: "Task ID",
  },
  {
    label: "Maintenance Date",
    id: "maintenance-date",
    type: "date",
    placeholder: "Maintenance Date",
  },
  {
    id: "civil-work-required",
    label: "Civil Work Required",
    type: "select",
    options: [
      { value: "", label: "Select" },
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "branch-cutting-required",
    label: "Branch Cutting Requirement",
    type: "select",
    options: [
      { value: "", label: "Select" },
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    id: "branch-cutting-required",
    label: "Gravel Laying",
    type: "select",
    options: [
      { value: "", label: "Select" },
      { value: "completed", label: "Completed" },
      { value: "pending", label: "Pending" },
    ],
  },
  {
    label: "Remarks Civil Database",
    id: "remarks-civil-database",
    type: "textarea",
    placeholder: "Remarks",
  },
];
const SeventhForm = [
  {
    label: "Operational History ID",
    id: "operational-history-id",
    type: "text",
    placeholder: "Operational History ID",
  },
  {
    label: "Commissioning Date",
    id: "commissioning-date",
    type: "date",
    placeholder: "Commissioning Date",
  },

  {
    label: "Recent Modification Date",
    id: "recent-modification-date",
    type: "date",
    placeholder: "Recent Modification Date",
  },
  {
    id: "perational-status",
    label: "Operational Status",
    type: "select",
    options: [
      { value: "", label: "Select Status" },
      { value: "operational", label: "Operational" },
      { value: "non-operational", label: "Non-Operational" },
      { value: "under-maintenance", label: "Under Maintenance" },
    ],
  },
  {
    label: "Remarks Civil Database",
    id: "remarks-civil-database",
    type: "textarea",
    placeholder: "Remarks",
  },
];
const EighthForm = [
  {
    label: "Project Manager",
    id: "project-manager",
    type: "text",
    placeholder: "Project Manager Name",
  },
  {
    label: "Start Date",
    id: "project-start-date",
    type: "date",
    placeholder: "Project Start Date",
  },

  {
    label: "End Date",
    id: "project-end-date",
    type: "date",
    placeholder: "Project End Date",
  },
  {
    id: "project-current-status",
    label: "Operational Status",
    type: "select",
    options: [
      { value: "", label: "Select Status" },
      { value: "planning", label: "Planning" },
      { value: "in-progress", label: "In Progress" },
      { value: "completed", label: "Completed" },
      { value: "on-hold", label: "On Hold" },
    ],
  },
  {
    label: "Remarks Power Database",
    id: "remarks-power-database",
    type: "textarea",
    placeholder: "Remarks",
  },
];

const sitebasicdetails = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-gray-700">
          Comprehensive Site Details
        </h1>

        <CustomForm formName={"Site Basic Details"} formData={FirstForm} />
        <CustomForm
          formName={"Power Supply and Backup Systems"}
          formData={SecondForm}
        />
        <CustomForm
          formName={"Power Supply and Backup Systems "}
          formData={ThirdForm}
        />
        <CustomForm
          formName={"Battery and Rectifier Details "}
          formData={FourthForm}
        />
        <CustomForm
          formName={"Electrical Load and Grounding"}
          formData={FifthForm}
        />
        <CustomForm
          formName={"Maintenance and Civil Work"}
          formData={SixthForm}
        />
        <CustomForm
          formName={"Site Operational History"}
          formData={SeventhForm}
        />
        <CustomForm formName={"Project Management"} formData={EighthForm} />
        <div className="flex items-center justify-between mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default sitebasicdetails;
