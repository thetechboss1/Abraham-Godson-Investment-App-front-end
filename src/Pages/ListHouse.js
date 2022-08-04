import React from "react";

const ListHouse = () => {
  return (
    <div>
      <div className="-mt-14 flex justify-end">
        <button className="button">Add +</button>
      </div>
      <table className="list_property_table mt-10">
        <thead className="bg-gray-200">
          <tr>
            <th>S/N</th>
            <th>Name</th>
            <th>Location</th>
            <th>Price</th>
            <th>Bedroom</th>
            <th>Bathroom</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3, 4, 5].map((idx) => (
            <tr>
              <td>0{idx}</td>
              <td>2-Bed Apartment | The Orchid</td>
              <td>Ebeju Lekki, Lagos</td>
              <td>₦30,000,000.00</td>
              <td>2</td>
              <td>3</td>
              <td className="flex items-center gap-3 justify-center">
                <i className="ri-pencil-fill cursor-pointer hover:text-primary text-lg"></i>
                <i className="ri-delete-bin-6-line cursor-pointer hover:text-primary text-lg"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListHouse;
