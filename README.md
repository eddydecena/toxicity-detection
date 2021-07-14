# Toxicity Detection

Record your conversation and detect its toxicity. 

> Note: We do not save your conversation, everything runs on your browser and you can verify it in the code.

Page of repo: `https://eddynelson.github.io/toxicity-detection/`

## Build & Run with Docker

```sh
docker build -t toxicity-detection:1.0.0 .

docker run -d -p 8080:80 --name toxicity-detection:1.0.0 toxicity_detection
```

## Requirements

To use it, you need one of the following browsers,
  - [Chrome](https://www.google.com/chrome/)
  - [Chrome for Android](https://play.google.com/store/apps/details?id=com.android.chrome&hl=en)
  - [Samsung Internet](https://play.google.com/store/apps/details?id=com.sec.android.app.sbrowser&hl=en)

## Resources

The Toxicity implementation is based and powered by [TensorFlow.js](https://www.tensorflow.org/js) [official model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
