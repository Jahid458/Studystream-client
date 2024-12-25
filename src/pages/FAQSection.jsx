import { FaQuestionCircle } from "react-icons/fa";

const FAQSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {/* FAQ 1 */}
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              What is Group Study Platform?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Group Study Platform is an online web application where you can
                create assignments, collaborate with friends, and grade each
                other’s work in a friendly environment.
              </p>
            </div>
          </div>

          {/* FAQ 2 */}
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              How do I create assignments?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
                Once you're logged in, you can create assignments by navigating
                to the 'Assignments' section and clicking on 'Create
                Assignment'. You can then add details like title, description,
                marks, and due date.
              </p>
            </div>
          </div>

          {/* FAQ 3 */}
          <div className="collapse collapse-plus border border-base-300 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-xl font-medium">
              <FaQuestionCircle className="inline-block mr-3 text-blue-500" />
              Can I grade my friends' assignments?
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">
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
              <p className="text-gray-600">
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
              <p className="text-gray-600">
                If you’ve forgotten your password, you can reset it by clicking
                on the 'Forgot Password' link on the login page. You'll receive
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
