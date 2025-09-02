export const FooterCtaSection = () => {
  return (
    <section className="py-8 px-4">
      <div className="container mx-auto text-center">
        <p className="text-white text-base md:text-3xl">
          Already have an account?{" "}
          <a
            href="/login/customer"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            Login
          </a>
        </p>
      </div>
    </section>
  )
}

export default FooterCtaSection;
