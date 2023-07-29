![Color Picker](https://github.com/ReyGuillaume/react-custom-color-picker/blob/main/ColorPicker.png "ColorPicker.jsx")

This color picker developed for react lets you choose from a number of predefined colors.

## Quick Start with React

Install:

```sh
npm i react-custom-color-picker
```

Simple usage:

```js
import ColorPicker from 'react-custom-color-picker'

const MyComponent = () => {
  const [color, setColor] = useState('#fff')

  return <ColorPicker onChange={c => setColor(c)} colorList={['#fff', '#000']} />
}
```

## Basic Usage

This component can take three parameters :

- `onChange` : function that handles color change.
- `colorList` : optional - The list of colors suggested by the color picker. ([] default)
- `styleSize` : optional - Number corresponding to the font size used for the style. (16 default)

Example :

```js
import ColorPicker from 'react-custom-color-picker'

const MyComponent = () => {
  const [color, setColor] = useState('#fff')

  return <ColorPicker onChange={setColor} colorList={['#fff', '#000']} styleSize={20} />
}
```