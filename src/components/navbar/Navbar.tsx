import {
  ChartBarIcon,
  CogIcon,
  InformationCircleIcon,
} from '@heroicons/react/outline'
import { GAME_TITLE } from '../../constants/strings'

type Props = {
  setIsInfoModalOpen: (value: boolean) => void
  setIsStatsModalOpen: (value: boolean) => void
  setIsSettingsModalOpen: (value: boolean) => void
}

export const Navbar = ({
  setIsInfoModalOpen,
  setIsStatsModalOpen,
  setIsSettingsModalOpen,
}: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-content px-5">
      
      {/*CHANGES TO FONT COLOURS*/}

        <p className="text-2xl ml-2.5 font-bold text-blue-800 dark:text-white">{GAME_TITLE}</p>
        <div className="right-icons">
          <ChartBarIcon
            className="h-6 w-6 mr-3 cursor-pointer text-amber-500 dark:stroke-white"
            onClick={() => setIsStatsModalOpen(true)}
          />
          <InformationCircleIcon
          className="h-6 w-6 mr-2 cursor-pointer text-amber-500 dark:stroke-white"
          onClick={() => setIsInfoModalOpen(true)}
          />
          <CogIcon
            className="h-6 w-6 cursor-pointer text-amber-500 dark:stroke-white"
            onClick={() => setIsSettingsModalOpen(true)}
          />
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
