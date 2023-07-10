import ColorPicker from "./ColorPicker"

const App = () => {

  return (
    <>
      <ColorPicker onChange={(color) => console.log(color)} colorList={['#45298777', '#814288', '#zzz']} />
    </>
  )
}

export default App
