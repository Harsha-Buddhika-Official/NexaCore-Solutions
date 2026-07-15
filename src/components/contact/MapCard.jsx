import { officeLocation } from "../../data/contactPageData";

// Lightweight decorative placeholder — swap the inner div for an
// embedded Google Maps iframe or a Places-powered map once you're
// ready to wire in real geolocation.
const MapCard = () => {
  return (
    <div className="relative h-64 overflow-hidden border rounded-2xl border-slate-700/60 bg-base-800/50">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="relative flex w-4 h-4">
          <span className="absolute inline-flex w-full h-full bg-indigo-400 rounded-full animate-ping opacity-60" />
          <span className="relative inline-flex w-4 h-4 bg-indigo-400 rounded-full" />
        </span>
      </div>

      <div className="absolute px-3 py-2 font-mono text-xs border rounded-md bottom-4 left-4 border-slate-700 bg-base-900/80 text-slate-300 backdrop-blur-sm">
        {officeLocation.label}
      </div>
    </div>
  );
};

export default MapCard;