import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Display = () => {
  const [Users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/c/post')
      .then(response => setUsers(response.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="border-b">
                <tr>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">S.no</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">First-name</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Company</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Email</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Phone-number</th>
                  <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Message</th>
                </tr>
              </thead>
              <tbody>
                {Users.map((user, index) => (
                  <tr className="border-b" key={user._id}>
                  return  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.firstname}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.company}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.phoneNumber}</td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{user.message}</td>
                  </tr>
                ))};
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
