import { useEffect, useState, FC } from 'react'
import './ColorPicker.css'

interface ColorPickerProps {
  onChange: (color: string) => void
  colorList?: string[]
  styleSize?: number
}

const ColorPicker: FC<ColorPickerProps> = ({ onChange, colorList = [], styleSize = 16 }) => {
  /* Liste des couleurs proposées par le color picker */
  const customColorList: string[] = [...colorList]

  /* Couleur actuellement sélectionnée */
  const [color, setColor] = useState<string>(customColorList[0] || '#ffffff')

  /* Etat ouvert ou fermé de l'interface de choix de couleur */
  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    colorList.map((c: string) => {
      if (!c.startsWith('#')) console.error("ColorPicker's Colors must start by '#'. " + c + ' is not valid.')
      if (![4, 7, 9].includes(c.length)) console.error("ColorPicker's Colors must be a valid CSS hexa color. " + c + ' is not valid.')
    })
  }, [])

  /* Mise à jour du composant parent grâce à onChange */
  useEffect(() => onChange(color), [color])

  /* Action lors de la selection d'une couleur */
  const selectColor = (c: string) => {
    setColor(c)
    setOpen(false)
  }

  return (
    <div className="rccp color-picker" style={{fontSize: `${styleSize}px`}}>
      <div className="picker" onClick={_ => setOpen(old => !old)} style={{ backgroundColor: color }}></div>
      {open && (
        <div className="color-picker-interface">
          {customColorList.map((c, i) => (
            <div key={i} className={`item ${c === color ? 'selected' : ''}`} style={{ backgroundColor: c }} onClick={_ => selectColor(c)}></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ColorPicker
