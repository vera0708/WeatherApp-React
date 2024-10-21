import "./Loading.module.css";

export const Loading = () => (
  // Стоит наверное выбрать один loading spinner size
  <div className="bg-purple-200">
    <span className="loading loading-spinner loading-xs fuchsia-600"></span>
    <span className="loading loading-spinner loading-sm fuchsia-600"></span>
    <span className="loading loading-spinner loading-md fuchsia-600"></span>
    <span className="loading loading-spinner loading-lg fuchsia-600"></span>
  </div>
);
