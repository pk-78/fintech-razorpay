/* eslint-disable no-unused-vars */


export default function Card2({Icon,title,description}) {
  return (
    <div className="max-w-sm w-full bg-[#252525] hover:shadow-green-500 rounded-xl shadow-lg hover:scale-105 p-6 text-center my-4 md:my-0">
      <div className="flex justify-center mb-4">
        <div className="bg-white p-3 rounded-full">
          <Icon className="h-8 w-8 text-[#252525]" />
        </div>
      </div>
      <h2 className="text-sm font-semibold text-white mb-2">{title}</h2>
      <p className="text-white text-sm p-2">
       {description}
      </p>
    </div>
  );
}
