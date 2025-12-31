import React from "react";

export default function AddressBook() {
  return (
    <main className="flex-1 border border-gray-200 rounded-lg p-6">
      <h2 className="font-bold text-lg text-[#D8A85B] mb-4">
        Edit Your Address
      </h2>

      <form className="space-y-4">
        {/* Country */}
        <div>
          <label className="block text-sm md:text-base font-semibold text-gray-900 mb-2">
            Country
          </label>
          <select
            name="country"
            className="w-full px-4 py-2.5 md:py-3 text-sm md:text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D8A85B] transition-all appearance-none bg-white cursor-pointer"
            required
          >
            <option value="">Select Country</option>
            <option value="usa">United States</option>
            <option value="uk">United Kingdom</option>
            <option value="canada">Canada</option>
            <option value="australia">Australia</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Street Address*
          </label>
          <input
            type="email"
            placeholder="Street no.."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Apartment, floor, etc. (Optional)
          </label>
          <input
            type="text"
            placeholder="Apartment/floor, etc."
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">Town/City*</label>
          <input
            type="text"
            placeholder="Enter City"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
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
