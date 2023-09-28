import { Storage } from "@aws-amplify/storage";


export async function uploadMedia(uri, setMessage) {
  try {
    const response = await fetch(uri);
    const blob = await response.blob();
    const key = uri.split('/').pop();
    await Storage.put(key, blob, {
      contentType: blob.type,
    });
    setMessage('Success!');
  } catch (err) {
    console.log('Error uploading file:', err);
    setMessage('Error uploading the media!');
  }
}
