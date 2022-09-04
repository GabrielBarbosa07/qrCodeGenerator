import "./App.css";
import QRCode from "react-qr-code";
import QRCodeLink from "qrcode";
import { useState } from "react";

function App() {
  const [url, setUrl] = useState("");
  const [qrcodeUrl, setQrcodeUrl] = useState("");

  const handleQrcode = (e) => {
    setUrl(e.target.value);
    handleGenerate(e.target.value)
  };

  const handleGenerate = (url) => {
    QRCodeLink.toDataURL(url,{
      width: 500,
      margin: 3,
    }, (err,url) => {
      setQrcodeUrl(url)
    })
  }

  return (
    <div className="App">
      <QRCode value={url} />

      <input
        type="text"
        className="input"
        placeholder="Digite sua url aqui.."
        value={url}
        onChange={(e) => handleQrcode(e)}
      />
      
      <a href={qrcodeUrl} download={`qrcode.jpeg`} >Baixar QrCode</a>
    </div>
  );
}

export default App;
