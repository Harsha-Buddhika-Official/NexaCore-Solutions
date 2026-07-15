import Container from "../common/Container";

const MetricsSection = ({ project }) => {
  const { metrics } = project;

  if (!metrics || metrics.length === 0) return null;

  return (
    <section className="pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center sm:text-left">
              <p className={`text-4xl font-extrabold sm:text-5xl ${metric.color}`}>
                {metric.value}
              </p>
              <p className="mt-2 font-mono text-xs font-medium tracking-wide uppercase text-slate-500">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;