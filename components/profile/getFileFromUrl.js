/**
 * Please ignore this file, it will be removed when we can generate the 2d image
 */
var getFileBlobUsingURL = function (url, convertBlob) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.addEventListener('load', function () {
    convertBlob(xhr.response);
  });
  xhr.send();
};

var blobToFile = function (blob, name) {
  blob.lastModifiedDate = new Date();
  blob.name = name;
  return blob;
};

const getFileFromUrl = (filePathOrUrl) =>
  new Promise((resolve) => {
    getFileBlobUsingURL(filePathOrUrl, function (blob) {
      const file = blobToFile(blob, 'testFile.jpg');
      resolve(file);
    });
  });

export default getFileFromUrl;
