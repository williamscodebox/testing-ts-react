type ButtonTwoProps = {
  label: string;
  primary?: boolean;
  onClick?: () => void;
};

function ButtonTwo({ label, primary = false, onClick }: ButtonTwoProps) {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: primary ? "blue" : "gray",
        color: "white",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
      }}
    >
      {label}
    </button>
  );
}

export default ButtonTwo;
