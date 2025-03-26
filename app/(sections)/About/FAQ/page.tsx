import { Questions } from "@/app/data/Data";
const FaqPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-4">
      <div className="card_main bg-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-4xl mx-4">
        <h1 className="text-4xl md:text-6xl mb-6 md:mb-8 text-primary font-bold text-center">
          FAQ{"'"}s
        </h1>
        <div className="space-y-4 w-full">
          {Questions.map((item) => (
            <details
              key={item.id}
              className="group bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 ease-in-out"
            >
              <summary className="flex justify-between items-center p-3 md:p-4 cursor-pointer font-semibold text-base md:text-lg text-gray-700">
                {item.summary}
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 transform group-open:rotate-180 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <p className="p-3 md:p-4 pt-2 text-md md:text-base text-gray-600 font-semibold">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
