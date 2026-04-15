export const WidgetItem = () => {
  return (
    <div className="md:col-span-2 lg:col-span-1">
      <div className="h-full py-8 px-6 space-y-6 rounded-xl border border-[#D1C9B0] bg-white">
        <div>
          <h5 className="text-base font-medium text-[#78716C] text-center">
            Global Activities
          </h5>

          <div className="mt-2 flex justify-center items-baseline gap-3">
            <h3 className="text-3xl font-medium text-[#292524]">$23,988</h3>
            <div className="flex items-center gap-1 text-[#16A34A] text-sm font-medium">
              <svg
                className="w-2.5 h-2.5"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                  fill="currentColor"
                />
              </svg>
              <span>2%</span>
            </div>
          </div>

          <span className="block text-center text-sm text-[#A8A29E] mt-1">
            Compared to last week $13,988
          </span>
        </div>
      </div>
    </div>
  );
};
