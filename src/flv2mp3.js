import { exec } from 'child_process';

export async function flv2mp3 (filename) {
  return new Promise((resolve, reject) => {
    const mp3 = filename.replace('.flv', '.mp3');
    exec(`ffmpeg -i ${filename}  -q:a 5 ${mp3}`, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`${mp3} converted`);
        resolve();
      }
    });
  });
}