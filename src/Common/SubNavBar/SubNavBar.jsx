import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export  function SubNavBar() {

  return (
    <div >
    <Link to="/produse/copii">
      <Button variant="link" style={{
      margin:"10px",
      padding:"4px",
      color:"green",
      fontWeight:"700"}}>Produse pentru Copii</Button>
        </Link>
    
      <Link to="/produse/adulti">
      <Button variant="link" style={{
      margin:"10px",
      padding:"4px",
      color:"green",
      fontWeight:"700"}}>Produse pentru Adulti</Button>
        </Link>
        <Link to="/produse/naturiste">
      <Button variant="link" style={{
      margin:"10px",
      padding:"4px",
      color:"green",
      fontWeight:"700"}}>Produse Naturiste</Button>
        </Link>
        <Link to="/produse/vitamine">
      <Button variant="link" style={{
      margin:"10px",
      padding:"4px",
      color:"green",
      fontWeight:"700"}}>Vitamine</Button>
        </Link>
        <Link to="/produse/deSlabit">
      <Button variant="link" style={{
      margin:"10px",
      padding:"4px",
      color:"green",
      fontWeight:"700"}}>Produse de Slabit</Button>
        </Link>
        <Link to="/produse/deIngrijire">
      <Button variant="link" style={{
      margin:"10px",
      padding:"4px",
      color:"green",
      fontWeight:"700"}}>Produse de frumusete si ingrijire</Button>
        </Link>
  </div>


  );
}

