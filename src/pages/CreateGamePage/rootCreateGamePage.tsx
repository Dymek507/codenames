import { useNavigate } from "react-router-dom";

import { useAppDispatch } from '../../store/app/hooks';
import { sendBoardData } from '../../store/gameActions';

import { useState } from "react";
import { Button, FormControl, FormLabel, ListItemText, MenuItem, Select, SelectChangeEvent, Switch } from "@mui/material";
import { SendIcon } from "lucide-react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const dictionaryOptions = [
  'Standard',
  'GPT-3,5',
];

const CreateGamePage = () => {

  // const [twoPlayers, setTwoPlayers] = useState(false);
  const twoPlayers = false;

  const [color, setColor] = useState('blue');

  const [dictionary, setDictionary] = useState<string>('Standard');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const handleTwoPlayersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTwoPlayers(event.target.checked);
  //   if (event.target.checked) {
  //     setColor('blue');
  //   }
  // };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.checked ? 'red' : 'blue');
  };

  const handleChange = (event: SelectChangeEvent<typeof dictionary>) => {
    setDictionary(event.target.value);
  };

  const createGameHandler = (twoPlayers: boolean, color: string, database: string) => {
    dispatch(sendBoardData(twoPlayers, color, database));
    navigate("/master");
  }

  return (
    <div className="flex-col flex-center wh-full bg-neutral-100">
      {/* <div className="flex flex-row mb-2">
        <FormLabel sx={{ fontSize: "2rem", mb: "4px" }} component="legend">Więcej</FormLabel>
        <Switch onChange={handleTwoPlayersChange} sx={{ mb: "4px" }} />
        <FormLabel sx={{ fontSize: "2rem", mb: "4px" }} component="legend">Dwie osoby</FormLabel>
      </div> */}
      <div className="flex flex-row mb-2">
        <FormLabel sx={{ fontSize: "2rem", mb: "4px" }} component="legend">Niebieski</FormLabel>
        <Switch onChange={handleColorChange} sx={{ mb: "4px" }} disabled={twoPlayers} />
        <FormLabel sx={{ fontSize: "2rem", mb: "4px" }} component="legend">Czerwony</FormLabel>
      </div>
      <div>
        <FormControl sx={{ m: 1, width: 300 }}>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            value={dictionary}
            onChange={handleChange}
            MenuProps={MenuProps}
          >
            {dictionaryOptions.map((name) => (
              <MenuItem key={name} value={name}>
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      <Button sx={{ fontSize: "2rem", mt: "18px" }} variant="outlined" size="large" onClick={() => { createGameHandler(twoPlayers, color, dictionary) }} endIcon={<SendIcon />}>Start</Button>

    </div >
  );
}



export default CreateGamePage
