export default function getImageColor (image) {
    const colorThief = new ColorThief();
    const color = colorThief.getColor(image);
    return rgbToHex(color);
}

function rgbToHex (color) {
    return color.map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
}
