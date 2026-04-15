export default function Button({ children, variant = "primary", ...props }) {
  const base = "px-6 py-3 rounded-lg transition";

  const styles = {
    primary: "bg-purple-600 hover:bg-purple-700 text-white",
    outline: "border border-gray-600 text-gray-300 hover:text-white",
  };

  return (
    <button className={`${base} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}