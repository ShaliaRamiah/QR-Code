let qrBox = document.getElementById("qrBox");
let qrImage = document.getElementById("qrImage");
let qrURL = document.getElementById("qrURL");

function generate() {
  qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrURL.value;
  qrBox.classList.add("show-img");
}

function downloadQR() {
    // Getting data URI of the QR code image
    const dataURI = qrImage.src;

    // Creating a temporary link element
    const link = document.createElement("a");

    // Setting href to the data URI
    link.href = dataURI;

    // Setting download with a filename for the downloaded image
    link.download = "qrcode.png";

    // Appending link to the document
    document.body.appendChild(link);

    // Triggering a click on the link to initiate the download
    link.click();

    // Removing the link from the document
    document.body.removeChild(link);
}
