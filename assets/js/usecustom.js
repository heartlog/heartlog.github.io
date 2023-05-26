function downloadPhoto("https://api.pikwy.com/web/6470e45342841d01fb3b482f.jpg") {
  // Fetch the image data
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      // Create a temporary URL for the Blob object
      var blobUrl = URL.createObjectURL(blob);

      // Create a link element
      var link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'photo.png'; // Set the desired file name here

      // Dispatch a click event on the link
      var event = new MouseEvent('click');
      link.dispatchEvent(event);

      // Clean up the temporary URL
      URL.revokeObjectURL(blobUrl);
    });
}

function dowP(url) {
  // Create an anchor element
  var link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.download = 'photo.png'; // Set the desired file name here

  // Programmatically trigger the download
  var event = document.createEvent('MouseEvents');
  event.initEvent('click', true, false);
  link.dispatchEvent(event);
}
