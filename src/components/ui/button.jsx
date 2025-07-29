export const Button = ({ children, onClick }) => {
  return <button onClick={onClick} style={{ padding: "0.5rem 1rem", background: "#0070f3", color: "white", border: "none", borderRadius: "5px" }}>{children}</button>;
};