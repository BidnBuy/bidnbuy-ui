
// Use the most common layout wrapper
import Layout from "@/components/layout/Layout";

export default function TermsPage() {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="text-base text-gray-200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod, urna eu tincidunt consectetur, nisi nisl aliquam enim, vitae facilisis enim urna eu enim.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">User Responsibilities</h2>
          <p className="text-base text-gray-200">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Limitations of Liability</h2>
          <p className="text-base text-gray-200">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Privacy Policy</h2>
          <p className="text-base text-gray-200">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Governing Law</h2>
          <p className="text-base text-gray-200">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Contact Information</h2>
          <p className="text-base text-gray-200">For any questions, please contact us at <a href="mailto:support@example.com" className="underline">support@example.com</a>.</p>
        </section>
      </div>
    </Layout>
  );
}
