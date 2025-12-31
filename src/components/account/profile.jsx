import React from "react";

export default function Profile() {
  return (
    <main className="flex-1 border border-gray-200 rounded-lg p-6">
      <h2 className="font-bold text-lg text-[#D8A85B] mb-4">
        Edit Your Profile
      </h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">
            First Name*
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Email*</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Phone*</label>
          <input
            type="text"
            placeholder="Enter Phone Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Password Change
          </label>
          <div className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="Current Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
            />
            <input
              type="password"
              placeholder="New Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-2">
          <button className="border px-4 py-2 rounded-lg">Cancel</button>
          <button className="bg-[#D8A85B] text-white px-6 py-2 rounded-lg">
            Save Changes
          </button>
        </div>
      </form>
    </main>
  );
}
