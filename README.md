# clmtrackr-smile-recognition
this package is a support package to [clmtrackr](https://github.com/auduno/clmtrackr) for smile recognition.

# Usage
```js
npm i clmtrackr-smile-recognition
```
```js
import SmileClassifier from 'clmtrackr-smile-recognition';
```
```js
const smileClassifier = new SmileClassifier();
const trackParameters = clmtrackr.getCurrentParameters();
const smileDetection = smileClassifier.meanPredict(trackParameters);
if (!smileDetection) { return; }
console.log('Great your smile was detected! =D');
```

For usage of clmtrackr please view the readme into [repository](https://github.com/auduno/clmtrackr)

=D
