import { useContext } from "react";
import { FaQuestionCircle } from "react-icons/fa";
import ThemeContext from "../themeProvider/ThemeContext";

const FAQSection = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
     
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              What is Group Study Platform?
            </div>
            <div className="collapse-content">
              <p className={`${theme === "light" ? 'text-gray-600': 'text-whiite' }`}>
                Group Study Platform is an online web application where you can
                create assignments, collaborate with friends, and grade each
                other’s work in a friendly environment.
              </p>
            </div>
          </div>


          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              How do I create assignments?
            </div>
            <div className="collapse-content">
              <p className={`${theme === "light" ? 'text-gray-600': 'text-whiite' }`}>
                Once you&apos;re logged in, you can create assignments by navigating
                to the &apos;Assignments&apos; section and clicking on &apos;Create
                Assignment&lsquo;. You can then add details like title, description,
                marks, and due date.
              </p>
            </div>
          </div>

      
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              Can I grade my friends&lsquo; assignments?
            </div>
            <div className="collapse-content">
              <p className={`${theme === "light" ? 'text-gray-600': 'text-whiite' }`}>
                Yes! Once your friends submit their assignments, you can grade
                them by providing feedback and marking them according to the
                given criteria.
              </p>
            </div>
          </div>

          {/* FAQ 4 */}
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              Is the platform free to use?
            </div>
            <div className="collapse-content">
              <p className={`${theme === "light" ? 'text-gray-600': 'text-whiite' }`}>
                Yes! The platform is completely free to use for all registered
                users. You can create, complete, and grade assignments without
                any cost.
              </p>
            </div>
          </div>

          {/* FAQ 5 */}
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              How do I reset my password?
            </div>
            <div className="collapse-content">
              <p className={`${theme === "light" ? 'text-gray-600': 'text-whiite' }`}>
                If you’ve forgotten your password, you can reset it by clicking
                on the &apos;Forgot Password&apos; link on the login page. You&apos;ll receive
                instructions to reset it via email.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
