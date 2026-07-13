import Button from "../common/Button";
import Container from "../common/Container";

const CTASection = () => {
  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-indigo-950/60 via-base-800 to-base-800 px-6 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.15),_transparent_60%)]" />

          <div className="relative">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Great Together
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm text-slate-400 sm:text-base">
              Ready to transform your digital presence? Our engineers are
              standing by to bring your vision to life with precision and
              scale.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button as="a" href="/contact" size="lg">
                Contact Us Now
              </Button>
              <Button as="a" href="/schedule-call" variant="ghost" size="lg">
                Schedule a Call
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;