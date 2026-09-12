import { useState } from 'react'
import { robots } from './data/robots.js'
import RobotCard from './components/RobotCard.jsx'
import RobotDetail from './components/RobotDetail.jsx'

function RobotList({ onSelect, selectedRobot }) {
  return (
    <main>
      <div className="hero">
        <h1>Robot Monsters</h1>
        <p>Explore la collection de petits robots monstres</p>
      </div>
      <div className="grid">
        {robots.map((robot) => (
          <RobotCard
            key={robot.id}
            robot={robot}
            onSelect={() => onSelect(robot)}
            isSelected={selectedRobot?.id === robot.id}
          />
        ))}
      </div>
    </main>
  )
}

export default function App() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <header className="topbar">
        <span className="logo">🤖 Botmon</span>
      </header>

      {selected ? (
        <RobotDetail
          robot={selected}
          onClose={() => setSelected(null)}
          onShowList={() => setSelected(null)}
        />
      ) : (
        <RobotList onSelect={setSelected} selectedRobot={selected} />
      )}
      <footer className="footer">
        <p>
          Le concept Botmon est sous licence{' '}
          <a href="https://creativecommons.org/publicdomain/zero/1.0/" target="_blank" rel="noreferrer">
            Creative Commons CC0 (domaine public)
          </a>
          .
        </p>
      </footer>
    </>
  )
}