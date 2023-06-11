const fs = require("fs");
const { spawn } = require("child_process");

function getFilesInFolder(folderPath) {
  const files = fs.readdirSync(folderPath);
  files.forEach((file) => {
    console.log(file);
  });
  return files;
}

// Usage:

const ffmpegCommand = "ffmpeg";

// FFmpeg arguments

const dir =
  "C:/Users/eladd/Desktop/mini-project/lazyLodingImages/public/images";
const newDirName =
  "C:/Users/eladd/Desktop/mini-project/lazyLodingImages/public/images/resize_imges";

let files_list = getFilesInFolder(dir);

fs.mkdir(`${dir}/resize_imges`, { recursive: true }, (err) => {
  if (err) {
    console.error("Error creating folder:", err);
  } else {
    console.log("Folder created successfully.");
  }
});

files_list.forEach((i) => {
  const outputFilePath = `${newDirName}/${i}`;
  const inputFilePath = `${dir}/${i}`;

  const ffmpegArgs = [
    "-i",
    inputFilePath,
    "-vf",
    "scale=20:-1",
    outputFilePath,
  ];

  const ffmpegProcess = spawn(ffmpegCommand, ffmpegArgs);

  // Event listeners for stdout and stderr
  ffmpegProcess.stdout.on("data", (data) => {
    console.log(`FFmpeg stdout: ${data}`);
  });

  ffmpegProcess.stderr.on("data", (data) => {
    console.error(`FFmpeg stderr: ${data}`);
  });

  // Event listener for process completion
  ffmpegProcess.on("close", (code) => {
    if (code === 0) {
      console.log("FFmpeg process completed successfully.");
    } else {
      console.error(`FFmpeg process exited with code ${code}.`);
    }
  });
});
