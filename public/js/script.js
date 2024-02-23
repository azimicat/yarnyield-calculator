document.querySelector('#calculate').addEventListener('click', function (event) {
    calculateResults();
});

function formatResult(value) {
    // 小数点2桁まで表示し、末尾の0を取り除く
    return parseFloat(value.toFixed(2));
}

function calculateResults() {
    const gaugeStitches = parseFloat(document.querySelector('#gauge-stitches').value);
    const gaugeRows = parseFloat(document.querySelector('#gauge-rows').value);
    const weightG = parseFloat(document.querySelector('#weight-g').value);
    const lengthM = parseFloat(document.querySelector('#length-m').value);
    const desiredWidth = parseFloat(document.querySelector('#desired-width').value);
    const desiredHeight = parseFloat(document.querySelector('#desired-height').value);
    console.log({ gaugeStitches, gaugeRows, weightG, lengthM, desiredWidth, desiredHeight })

    // 計算式に従って結果を計算
    const resultStitches = (gaugeStitches / 10) * desiredWidth;
    const resultRows = (gaugeRows / 10) * desiredHeight;

    const perStitchLengthCm = (lengthM * 100) / gaugeStitches;
    const totalLengthM = (perStitchLengthCm / 100) * desiredWidth;

    const perMeterWeightG = weightG / lengthM;
    const totalWeightG = perMeterWeightG * totalLengthM;

    // 結果を表示（小数点第二位まで丸める）
    const resultStitchesForm = document.querySelector('#result-stitches')
    resultStitchesForm.value = formatResult(resultStitches)
    const resultRowsForm = document.querySelector('#result-rows')
    resultRowsForm.value = formatResult(resultRows);
    document.querySelector('#result-weight').value = formatResult(totalWeightG);
    document.querySelector('#result-length').value = formatResult(totalLengthM);
}
