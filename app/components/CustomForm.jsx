import React from "react";
import Input from "./Input";

const formData = [
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

const CustomForm = ({ formName, formData }) => {
  return (
    <form>
      <div className="form-section mb-8">
        <h2 className="text-xl font-semibold mb-6 text-gray-800">{formName}</h2>
        <div className="grid grid-cols-2 gap-6">
          {formData.map((data, index) => (
            <Input
              id={data.id}
              label={data.label}
              type={data.type}
              placeholder={data.placeholder}
              options={data.options || []} // Pass options to the Input component
              key={index}
            />
          ))}
        </div>
      </div>
    </form>
  );
};

export default CustomForm;
