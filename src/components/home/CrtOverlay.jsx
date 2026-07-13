const CrtOverlay = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_rgba(0,0,0,0.35)_100%)]" />
    </div>
  );
};

export default CrtOverlay;