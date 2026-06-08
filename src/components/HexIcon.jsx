// Icona esagonale riusabile. children = icona/contenuto, label sotto.
function HexIcon({ children, label }) {
  return (
    <div className="hex">
      <span className="hex__shape">{children}</span>
      {label && <span className="hex__label">{label}</span>}
    </div>
  );
}

export default HexIcon;
