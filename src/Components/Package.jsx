import React from "react";

const Package = ({ isActive, title, price, category }) => {
  return (
    <div className={isActive ? `${isActive} package` : "package"}>
      <h4 className="category">{category}</h4>
      <h2>{title}</h2>
      <ul>
        <li>
          <i class="lni lni-checkmark"></i> Package offer 1
        </li>
        <li>
          <i class="lni lni-checkmark"></i> Package offer 1
        </li>
        <li>
          <i class="lni lni-checkmark"></i> Package offer 1
        </li>
        <li>
          <i class="lni lni-checkmark"></i> Package offer 1
        </li>
      </ul>

      <h1>{price} tk</h1>

      <button>Select Package</button>
    </div>
  );
};

export default Package;
