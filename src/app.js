const convertButton = document.getElementById('convert');
        const degreesInput = document.getElementById('degrees');
        const fromTypeSelect = document.getElementById('fromType');
        const toTypeSelect = document.getElementById('toType');
        const resultField = document.getElementById('result');

        function convertTemperature(degrees, fromType, toType) {
            if (fromType === toType) {
                return degrees;
            }

            switch (fromType) {
                case 'celsius':
                    if (toType === 'fahrenheit') {
                        return (degrees * 9/5) + 32;
                    } else if (toType === 'kelvin') {
                        return degrees + 273.15;
                    }
                    break;
                case 'fahrenheit':
                    if (toType === 'celsius') {
                        return (degrees - 32) * 5/9;
                    } else if (toType === 'kelvin') {
                        return (degrees - 32) * 5/9 + 273.15;
                    }
                    break;
                case 'kelvin':
                    if (toType === 'celsius') {
                        return degrees - 273.15;
                    } else if (toType === 'fahrenheit') {
                        return (degrees - 273.15) * 9/5 + 32;
                    }
                    break;
                default:
                    return NaN;
            }
        }

        convertButton.addEventListener('click', () => {
            const degrees = parseFloat(degreesInput.value);
            const fromType = fromTypeSelect.value;
            const toType = toTypeSelect.value;

            if (isNaN(degrees)) {
                alert('Please enter some value to convert!!!');
            } else {
                const convertedValue = convertTemperature(degrees, fromType, toType);
                if (!isNaN(convertedValue)) {
                    resultField.value = `${convertedValue.toFixed(2)}°${toType.charAt(0).toUpperCase()}`;
                } else {
                    alert('Invalid conversion types!');
                }
            }
        });