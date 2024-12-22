import { useNavigate } from "react-router-dom";

import { useAppDispatch } from '../store/app/hooks';
import { sendBoardData } from '../store/gameActions';

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { useState } from "react";

const gameModes = [
  { title: "Classic", image: "/placeholder.svg?height=200&width=300" },
  { title: "Duet", image: "/placeholder.svg?height=200&width=300" },
]

const dictionaries = [
  "Standard",
  "Pop Culture",
  "Science & Technology",
  "Movies & TV Shows",
  "Food & Drink"
]

const CreateGamePage = () => {

  const [selectedMode, setSelectedMode] = useState<string | null>(null)
  const [isRedTeam, setIsRedTeam] = useState(true)
  const [selectedDictionary, setSelectedDictionary] = useState(dictionaries[0])

  const handleModeSelect = (mode: string) => {
    setSelectedMode(mode)
  }

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-3xl font-bold text-center">Codenames Game Setup</h1>

      <div className="space-y-8">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Choose Game Mode</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {gameModes.map((mode, index) => (
              <Card
                key={index}
                className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${selectedMode === mode.title ? 'ring-2 ring-primary' : ''
                  }`}
              >
                <CardContent className="relative p-0 overflow-hidden group">
                  <div className="overflow-hidden">
                    <img
                      src={mode.image}
                      alt={`${mode.title} mode`}
                      width={300}
                      height={200}
                      className="object-cover w-full h-auto transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
                    <Button
                      variant="secondary"
                      className="font-semibold"
                      onClick={() => handleModeSelect(mode.title)}
                    >
                      Select Mode
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="bg-primary">
                  <h3 className="w-full text-xl font-semibold text-center text-primary-foreground">{mode.title}</h3>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="mb-4 text-2xl font-semibold">Game Options</h2>
          <div className="flex items-center space-x-2">
            <Switch
              id="team-switch"
              checked={isRedTeam}
              onCheckedChange={setIsRedTeam}
            />
            <Label htmlFor="team-switch">
              Team: <span className={isRedTeam ? 'text-red-600' : 'text-blue-600'}>
                {isRedTeam ? 'Red' : 'Blue'}
              </span>
            </Label>
          </div>
          <div className="space-y-2">
            <Label htmlFor="dictionary-select">Select Dictionary</Label>
            <Select value={selectedDictionary} onValueChange={setSelectedDictionary}>
              <SelectTrigger id="dictionary-select" className="w-full">
                <SelectValue placeholder="Select a dictionary" />
              </SelectTrigger>
              <SelectContent>
                {dictionaries.map((dict) => (
                  <SelectItem key={dict} value={dict}>
                    {dict}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          className="w-full"
          disabled={!selectedMode}
          onClick={() => {
            console.log('Starting game with:', {
              mode: selectedMode,
              team: isRedTeam ? 'Red' : 'Blue',
              dictionary: selectedDictionary
            })
            // Add your game start logic here
          }}
        >
          Start Game
        </Button>
      </div>
    </div>
  )
}



export default CreateGamePage