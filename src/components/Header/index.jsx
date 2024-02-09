import Navbar from "../Navbar";

export default function Header() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <p style={{paddingLeft:'20px'}}>Portfolio</p>
      <Navbar/>
    </div>
  );
}