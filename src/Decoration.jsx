import './Decoration.css'

function Curve() {
    return (
      <svg fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40.0077 221.006C40.0017 110.506 129.998 41.0006 219.998 40.9957L219.996 0.995728C99.9957 1.00229 9.57504e-05 81.0078 0.00773621 221.008L40.0077 221.006Z" fill="#24222E"/>
      </svg>
    );
  }
  
export default function Decoration() {
  return(
    <div id="decoration">
      <div className="decoration-row">
        <Curve />
        <Curve />
        <Curve />
        <Curve />
        <Curve />
      </div>
      <div className="decoration-row">
        <Curve />
        <Curve />
        <Curve />
        <Curve />
        <Curve />
      </div>
      <div className="decoration-row">
        <Curve />
        <Curve />
        <Curve />
        <Curve />
        <Curve />
      </div>
    </div>
  );
}
  