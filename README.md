# Toxicity Detection

Record your conversation and predict its toxicity. We do not take your conversation, everything runs on your browser, and you can see it in the previous code.

Page of repo: https://eddynelson.github.io/toxicity-detection/

## Run with docker

``` sh
docker run -d -p 8080:80 --name toxicity-detection:1.0.0 toxicity_detection
```

## Resouce

This implementation of toxicity detection if powered by tensorflow.js and based on the tensorflow.js [oficial model](https://github.com/tensorflow/tfjs-models/tree/master/toxicity)
