export default function News() {
  return (
    <>
      {/* News Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Dynamic Voltage Restorer",
                description:
                  "A Dynamic Voltage Restorer (DVR) is designed to provide protection and maintain power quality by restoring voltage during power sags or outages.",
              },
              {
                title: "Electric Traction Power Supply System (eTPSS)",
                description:
                  "The eTPSS simulation software includes modules for the study of traction load movement, power flow for fundamental and harmonic frequencies, short circuits, and interference in signaling cables providing an integrated solution to the simulation of traction power system.",
              },
              {
                title: "Impact of Inverter Based Resources on Power Systems",
                description: (
                  <>
                    <div>Date: 4-5 November 2024</div>
                    <div>Prof. Anil Kulkarni</div>
                  </>
                ),
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:translate-y-2"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <div className="text-sm">{item.description}</div>{" "}
                {/* Use div instead of p */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
