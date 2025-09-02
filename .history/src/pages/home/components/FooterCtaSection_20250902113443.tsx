export const FooterCtaSection = () => {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: "#01151C" }}>
      <div className="container mx-auto text-center">
        <p className="text-white text-base" style={{ fontFamily: "Open Sans, sans-serif" }}>
          Already have an account?{" "}
          <a
            href="/login"
            className="text-teal-400 hover:text-teal-300 transition-colors"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Login
          </a>
        </p>
      </div>
    </section>
  )
}
