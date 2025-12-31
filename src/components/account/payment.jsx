import React from "react";

export default function Payment() {
  return (
    <main className="flex-1 border border-gray-200 rounded-lg p-6">
      <h2 className="font-bold text-lg text-[#D8A85B] mb-4">Edit Your Card</h2>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-1">Card*</label>
          <input
            type="text"
            placeholder="Card Number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Name on card*
          </label>
          <input
            type="text"
            placeholder="Name on card"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1">
            Card Number
          </label>
          <input
            type="text"
            placeholder="78945-45456"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col flex-1">
            <label className="block text-sm font-semibold mb-1">
              Expire Date*
            </label>
            <input
              type="text"
              placeholder="08/25"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-gray-100"
            />
          </div>

          <div className="flex flex-col flex-1">
            <label className="block text-sm font-semibold mb-1">CVC*</label>
            <input
              type="text"
              placeholder="925"
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
