import React from "react";

export default function ReviewCard({ review  }) {
  return (
    <div className="rounded-xl bg-white border border-gray-200 p-4 md:p-5 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="flex flex-col  gap-3">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-base">{"⭐".repeat(review.rating)}</span>
            <span className="text-xs text-gray-600 font-medium">{review.rating}.0</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base text-gray-900">
                {review.user}.
              </p>
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <svg
                  className="w-2.5 h-2.5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              {review.comment}
            </p>
          </div>
        </div>
        <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
          <svg
            className="w-5 h-5 text-gray-600"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="6" cy="12" r="1" />
            <circle cx="12" cy="12" r="1" />
            <circle cx="18" cy="12" r="1" />
          </svg>
        </button>
      </div>

      <p className="text-xs text-gray-500">{review.date}</p>
    </div>
  );
}
