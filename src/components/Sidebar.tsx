
export default function Sidebar() {
  return (
    <aside
      style={{
        width: "80px",
        backgroundColor: "#2d3436",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px 0",
        gap: "20px",
      }}
    >
      {/* Éléments décoratifs */}
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#6c5ce7",
          borderRadius: "10px",
        }}
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#00b894",
          borderRadius: "50%",
        }}
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#fd79a8",
          borderRadius: "10px / 50%",
        }}
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#fdcb6e",
          borderRadius: "15px",
        }}
      />
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: "#0984e3",
          borderRadius: "10px",
        }}
      />
    </aside>
  );
}