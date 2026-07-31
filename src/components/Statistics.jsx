import Statistics from "../data/Statistics";

const Statistics = () => {
  return (
    <section className="bg-blue-950 text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {statistics.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 justify-center"
              >
                <Icon className="text-red-500 text-4xl" />

                <div>
                  <h2 className="text-3xl font-bold">
                    {item.number}
                  </h2>

                  <p className="text-gray-300">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Statistics;