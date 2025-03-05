"use client";

export default function FreeSoftwares() {
  return (
    <div className="bg-gray-50 text-gray-900 py-12">
      <p className="text-3xl font-semibold text-center text-gray-800 mb-12 mt-10">
        IITB Inhouse built software
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center mb-24 ml-10">
          <img
            src="null"
            alt="Sequel Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Sequel</h3>
          <p className="text-gray-600 mb-4">
            SEQUEL is a general-purpose circuit simulation package developed at
            IIT Bombay. It provides a GUI for schematic entry and plotting.
            Several simulation examples in electronics and power electronics,
            particularly suitable for teaching engineering courses, are included
            in the package.
          </p>
          <a
            href="https://www.ee.iitb.ac.in/~microel/faculty/mbp/sequel1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Visit Website
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center mb-24 ml-10">
          <img
            src="null"
            alt="pmu simulator Logo"
            className="w-24 h-24 mx-auto mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            PMU Simulator
          </h3>
          <p className="text-gray-600 mb-4"></p>
          <a
            href="https://www.ee.iitb.ac.in/~microel/faculty/mbp/sequel1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Visit Website
          </a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-center mb-24 ml-10">
          <img src="null" alt="ipdc Logo" className="w-24 h-24 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">IPDC</h3>
          <p className="text-gray-600 mb-4"></p>
          <a
            href="https://www.ee.iitb.ac.in/~microel/faculty/mbp/sequel1.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            Visit Website
          </a>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-12">
          Free Software for Research and Engineering
        </h1>
        <p className="text-lg text-center mb-12 text-gray-600">
          Here are some of the most widely used free software tools for
          electrical engineering, research, and programming. These tools are
          essential for simulations, data analysis, and coding tasks.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Octave */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/octave.jpg"
              alt="Octave Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              GNU Octave
            </h3>
            <p className="text-gray-600 mb-4">
              A free, open-source software for numerical computations, useful
              for matrix operations, data analysis, and simulations.
            </p>
            <a
              href="https://www.gnu.org/software/octave/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          {/* Scilab */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/scilab.png"
              alt="Scilab Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Scilab</h3>
            <p className="text-gray-600 mb-4">
              A powerful open-source software for engineering and scientific
              applications, with tools for simulation and numerical
              computations.
            </p>
            <a
              href="https://www.scilab.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          {/* ATPDraw */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/atp.png"
              alt="ATPDraw Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              ATPDraw
            </h3>
            <p className="text-gray-600 mb-4">
              A software tool for simulation and analysis of electrical power
              systems, particularly for transient stability studies.
            </p>
            <a
              href="https://www.atpdraw.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          {/* Python */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
              alt="Python Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Python</h3>
            <p className="text-gray-600 mb-4">
              A versatile programming language widely used in data analysis,
              machine learning, scientific computing, and automation.
            </p>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          {/* Linux */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg"
              alt="Linux Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Linux</h3>
            <p className="text-gray-600 mb-4">
              An open-source operating system used for development, research,
              and running simulations in a variety of fields, including
              electrical engineering.
            </p>
            <a
              href="https://www.linux.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          {/* Xournal */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/xournal.png"
              alt="Xournal Logo"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Xournal
            </h3>
            <p className="text-gray-600 mb-4">
              A free and open-source application for note-taking and PDF
              annotation, useful for documenting research and engineering
              projects.
            </p>
            <a
              href="https://xournalpp.github.io/installation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/libre.png"
              alt="Libre Office"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Libre Office
            </h3>
            <p className="text-gray-600 mb-4">
              LibreOffice is a free, open-source office suite that includes
              tools for word processing, spreadsheets, presentations, and more.
              It’s compatible with major document formats and available on
              Windows, macOS, and Linux.
            </p>
            <a
              href="https://www.libreoffice.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/ltspice.jpg"
              alt="LT Spice"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              LT Spice
            </h3>
            <p className="text-gray-600 mb-4">
              LTspice is a powerful, free simulation software used for circuit
              design and analysis. It allows engineers to model analog and
              digital circuits with accurate simulations. Its user-friendly
              interface and extensive library make it a popular tool for testing
              and debugging electronic designs.
            </p>
            <a
              href="https://www.analog.com/en/resources/design-tools-and-calculators/ltspice-simulator.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/qspice.jpg"
              alt="QSpice"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">QSpice</h3>
            <p className="text-gray-600 mb-4">
              QSpice is an open-source, circuit simulation software used for
              analog and mixed-signal circuit analysis. It provides tools for
              accurate modeling and simulation of electronic circuits, offering
              real-time feedback and waveform analysis. QSpice is widely used
              for both educational and professional purposes due to its
              flexibility and ease of use.
            </p>
            <a
              href="https://www.qorvo.com/design-hub/design-tools/interactive/qspice"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/overleaf.jpg"
              alt="Overleaf"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Overleaf
            </h3>
            <p className="text-gray-600 mb-4">
              Overleaf is an online LaTeX editor that allows users to write,
              edit, and collaborate on scientific documents in real-time. It
              simplifies the LaTeX process with a rich text editor and instant
              preview of the document. Overleaf is widely used in academia for
              creating research papers, reports, and publications.
            </p>
            <a
              href="https://www.overleaf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/matlab.jpg"
              alt="Matlab"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Matlab</h3>
            <p className="text-gray-600 mb-4">
              MATLAB combines a desktop environment tuned for iterative analysis
              and design processes with a programming language that expresses
              matrix and array mathematics directly. It includes the Live Editor
              for creating scripts that combine code, output, and formatted text
              in an executable notebook.
            </p>
            <a
              href="https://www.overleaf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src="/logos/pscad.jpg"
              alt="PSCAD"
              className="w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">PSCAD</h3>
            <p className="text-gray-600 mb-4">
              PSCAD (Power Systems Computer Aided Design) is a software tool
              used for simulating and analyzing electrical power systems. It
              enables engineers to model, test, and optimize complex power
              networks, including transient and dynamic behaviors, for various
              applications like protection, control, and power quality studies.
            </p>
            <a
              href="https://www.overleaf.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-semibold"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
