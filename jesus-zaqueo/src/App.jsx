import { Welcome } from './Views/Welcome';
import { CharacterSelect } from './Views/CharacterSelect';
import { useState } from 'react';
import { Minigame } from './Views/Minigame';
import { SaveAnswer } from './Views/SaveAnswer';
import { SeeAnswer } from './Views/SeeAnswer';

function App() {
  const [show, setShow] = useState(0);

  switch (show) {
    case 0:
      return <Welcome setShow={setShow} />;
    case 1:
      return <CharacterSelect setShow={setShow} />;
    case 2:
      return <Minigame setShow={setShow} />;
    case 3:
      return <SaveAnswer />;
    case 4:
      return <SeeAnswer setShow={setShow} />;
    default:
      return <h1>NOT FOUND (404)</h1>
  }
}

export default App;