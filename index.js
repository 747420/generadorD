function applyBorderRadius() {
    var topLeft = document.getElementById('topLeft').value;
    var topRight = document.getElementById('topRight').value;
    var bottomLeft = document.getElementById('bottomLeft').value;
    var bottomRight = document.getElementById('bottomRight').value;

    var preview = document.getElementById('preview');
    const borders = `${topLeft}% ${100 - topLeft}% ${bottomRight}% ${100 - bottomRight}% / ${100 - bottomLeft}% ${topRight}% ${100 - topRight}% ${bottomLeft}%`;
    preview.style.borderRadius = borders;

    updateCode();
}
function applyBorderRadiusS() {
    var bbb = document.getElementById('BBB').value;

    var preview = document.getElementById('preview');
    const borders = ` ${bbb}%`;
    preview.style.borderRadius = borders;

    updateCode();
}

function applyBorderPreset() {
var borderPreset = document.getElementById('borderPreset').value;
var bordeComplejo = document.getElementById('bordeComplejo');
var bordeSimple = document.getElementById('bordeSimple');
if (borderPreset === 'simple') {
bordeComplejo.style.display = "none";
bordeSimple.style.display = "block";
} else if (borderPreset === 'complex') {
bordeComplejo.style.display = "block";
bordeSimple.style.display = "none";
}else if (borderPreset === 'null') {
var preview = document.getElementById('preview');
    const borders = ` 0%`;
    preview.style.borderRadius = borders;
    bordeComplejo.style.display = "none";
bordeSimple.style.display = "none";
}

// Actualizar código y vista previa
updateCode();
}

function applyBorderSize() {
    var borderSize = document.getElementById('borderSize').value;
    var preview = document.getElementById('preview');
    preview.style.borderWidth = borderSize + "px";
    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}

function applyBorderStyle() {
    var borderStyle = document.getElementById('borderStyle').value;
    var preview = document.getElementById('preview');
    preview.style.borderStyle = borderStyle;
    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}

function applyBorderColor() {
    var borderColor = document.getElementById('borderColor').value;
    var preview = document.getElementById('preview');
    preview.style.borderColor = borderColor;
    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}

function applyBackgroundColor() {
    var backgroundColor = document.getElementById('backgroundColor').value;
    var preview = document.getElementById('preview');
    preview.style.background = backgroundColor;
    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}

function applyBackgroundGradient() {
    var backgroundGradient = document.getElementById('backgroundGradient').checked;
    var gradientControls = document.getElementById('gradientControls');
    if (backgroundGradient) {
        gradientControls.style.display = 'block';
        generateGradientBackground();
    } else {
        gradientControls.style.display = 'none';
        applyBackgroundColor(); // Restaurar el color de fondo normal
    }
}

function addGradientColor() {
    var gradientColorsContainer = document.getElementById('gradientColorsContainer');
    var input = document.createElement('input');
    input.type = 'color';
    input.className = 'color-input';
    input.value = '#ffffff';
    input.onchange = applyBackgroundGradient;

    var removeBtn = document.createElement('button');
    removeBtn.className = 'remove-color-btn';
    removeBtn.textContent = 'Eliminar';
    removeBtn.onclick = function () {
        gradientColorsContainer.removeChild(input);
        gradientColorsContainer.removeChild(removeBtn);
        applyBackgroundGradient();
    };

    gradientColorsContainer.appendChild(input);
    gradientColorsContainer.appendChild(removeBtn);

    applyBackgroundGradient(); // Actualizar la vista previa en tiempo real
}

function generateGradientBackground() {
    var gradientColors = [];
    var gradientColorsInputs = document.querySelectorAll('.color-input');
    gradientColorsInputs.forEach(function (input) {
        gradientColors.push(input.value);
    });

    var gradientDirection = document.getElementById('gradientDirection').value + 'deg';
    var gradientCount = document.getElementById('gradientCount').value;

    var preview = document.getElementById('preview');
    preview.style.background = `linear-gradient(${gradientDirection}, ${gradientColors.join(', ')})`;

    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}

function applyBoxShadow() {
    var shadowCount = document.getElementById('shadowCounters').value;
    var boxShadowControls = document.getElementById('boxShadowControls');
    if (shadowCount > 0) {
        boxShadowControls.style.display = 'block';
        generateBoxShadow();
    } else {
        boxShadowControls.style.display = 'none';
        generateBoxShadow(); // Seleccionar la sombra única
    }
}

function addBoxShadowControls() {
    var shadowCount = document.getElementById('shadowCounters').value;
    var boxShadowControlsContainer = document.getElementById('boxShadowControls');
    boxShadowControlsContainer.innerHTML = ''; // Limpiar controles existentes

    for (var i = 1; i <= shadowCount; i++) {
        var boxShadowContainer = document.createElement('div');
        boxShadowContainer.className = 'box-shadow-container';

        boxShadowContainer.innerHTML = `
<h4>Sombra: ${i}</h4>
    <div class="slider-container">
        <label for="boxShadowX${i}">Desplazamiento X:</label>
        <input type="number" id="boxShadowX${i}" min="-50" max="50" value="0" step="1" onchange="generateBoxShadow()">
    </div>

    <div class="slider-container">
        <label for="boxShadowY${i}">Desplazamiento Y:</label>
        <input type="number" id="boxShadowY${i}" min="-50" max="50" value="0" step="1" onchange="generateBoxShadow()">
    </div>

    <div class="slider-container">
        <label for="boxShadowBlur${i}">Desenfoque:</label>
        <input type="number" id="boxShadowBlur${i}" min="0" max="50" value="0" step="1" onchange="generateBoxShadow()">
    </div>

    <div class="slider-container">
        <label for="boxShadowColor${i}">Color de sombra:</label>
        <input type="color" id="boxShadowColor${i}" onchange="generateBoxShadow()">
    </div>

    <div class="slider-container">
        <label for="boxShadowInset${i}">Sombra Interior:</label>
        <input type="checkbox" id="boxShadowInset${i}" onchange="generateBoxShadow()">
    </div>
`;

        boxShadowControlsContainer.appendChild(boxShadowContainer);
    }

    generateBoxShadow(); // Actualizar la vista previa en tiempo real
}

function applyPreviewSize() {
    var previewWidth = document.getElementById('previewWidth').value;
    var previewHeight = document.getElementById('previewHeight').value;
    var preview = document.getElementById('preview');

    preview.style.width = previewWidth + '%';
    preview.style.height = previewHeight + '%';

    updateCode();
}


function generateBoxShadow() {
    var shadowCount = document.getElementById('shadowCounters').value;
    var preview = document.getElementById('preview');
    var boxShadowArray = [];

    for (var i = 1; i <= shadowCount; i++) {
        var boxShadowX = document.getElementById(`boxShadowX${i}`);
        var boxShadowY = document.getElementById(`boxShadowY${i}`);
        var boxShadowBlur = document.getElementById(`boxShadowBlur${i}`);
        var boxShadowColor = document.getElementById(`boxShadowColor${i}`);
        var boxShadowInset = document.getElementById(`boxShadowInset${i}`);

        if (boxShadowX && boxShadowY && boxShadowBlur && boxShadowColor && boxShadowInset) {
            var shadow = `${boxShadowX.value}px ${boxShadowY.value}px ${boxShadowBlur.value}px ${boxShadowColor.value} ${boxShadowInset.checked ? 'inset' : ''}`;
            boxShadowArray.push(shadow);
        }
    }

    var boxShadow = boxShadowArray.join(', ');

    // Establecer las sombras
    preview.style.boxShadow = boxShadow;

    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}





function updateCode() {
var codeContainer = document.getElementById('codeContainer');
var preview = document.getElementById('preview');

var code = '';

function addStyle(property, value) {
if (value !== '' && parseFloat(value) !== 0 && value !== 'none')   {
    code += `${property}: ${value};\n`;
}
}

addStyle('width', preview.style.width);
addStyle('height', preview.style.height);
addStyle('border-radius', preview.style.borderRadius);
addStyle('border-width', preview.style.borderWidth);
addStyle('border-style', preview.style.borderStyle);
addStyle('border-color', preview.style.borderColor);
addStyle('background', preview.style.background);
addStyle('box-shadow', preview.style.boxShadow);

codeContainer.textContent = code;
}

function generateGradientBackground() {
    var gradientColors = [];
    var gradientColorsInputs = document.querySelectorAll('.color-input');
    gradientColorsInputs.forEach(function (input) {
        gradientColors.push(input.value);
    });

    var gradientType = document.getElementById('gradientType').value;

    var gradientDirection = document.getElementById('gradientDirection').value + 'deg';

    var preview = document.getElementById('preview');

    if (gradientType === 'linear') {
        preview.style.background = `linear-gradient(${gradientDirection}, ${gradientColors.join(', ')})`;
    } else if (gradientType === 'radial') {
        preview.style.background = `radial-gradient(${gradientColors.join(', ')})`;
    }

    applyBorderRadius(); // Actualizar la vista previa en tiempo real
}


// Actualizar los valores de los <output> cuando se cambia el rango
var sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(function (slider) {
    slider.addEventListener('input', function () {
        document.querySelector(`output[for="${slider.id}"]`).textContent = this.value + (slider.id === 'borderSize' ? 'px' : "%");
        applyBorderRadius(); // Actualizar la vista previa en tiempo real
    });
});

// Actualizar el valor del <select> cuando se cambia la opción
document.getElementById('borderStyle').addEventListener('change', function () {
    applyBorderStyle(); // Actualizar la vista previa en tiempo real
});

// Actualizar el valor del <checkbox> cuando se cambia la opción
document.getElementById('backgroundGradient').addEventListener('change', function () {
    applyBackgroundGradient(); // Actualizar la vista previa en tiempo real
});