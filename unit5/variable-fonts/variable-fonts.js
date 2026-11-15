const controls = {
    weight: document.querySelector("#weight-control"),
    slant: document.querySelector("#slant-control"),
    casual: document.querySelector("#casl-control"),
    mono: document.querySelector("#mono-control"),
};

const sample = document.querySelector("#font-sample");
const output = document.querySelector("#font-output");

function updateSample() {
    const weight = controls.weight.value;
    const slant = controls.slant.value;
    const casual = controls.casual.value;
    const mono = controls.mono.value;

    sample.style.setProperty("--demo-weight", weight);
    sample.style.setProperty("--demo-slant", slant);
    sample.style.setProperty("--demo-casl", casual);
    sample.style.setProperty("--demo-mono", mono);

    document.querySelector("#weight-value").value = weight;
    document.querySelector("#slant-value").value = slant;
    document.querySelector("#casl-value").value = casual;
    document.querySelector("#mono-value").value = mono;
    output.textContent = `font-weight: ${weight}; font-style: oblique ${slant}deg; font-variation-settings: 'slnt' ${slant}, 'CASL' ${casual}, 'MONO' ${mono};`;
}

Object.values(controls).forEach((control) => {
    control.addEventListener("input", updateSample);
});

updateSample();
