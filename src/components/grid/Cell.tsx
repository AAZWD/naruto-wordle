import { CharStatus } from '../../lib/statuses'
import classnames from 'classnames'
import { REVEAL_TIME_MS } from '../../constants/settings'
import { getStoredIsHighContrastMode } from '../../lib/localStorage'

type Props = {
  value?: string
  status?: CharStatus
  isRevealing?: boolean
  isCompleted?: boolean
  position?: number
}

export const Cell = ({
  value,
  status,
  isRevealing,
  isCompleted,
  position = 0,
}: Props) => {
  const isFilled = value && !isCompleted
  const shouldReveal = isRevealing && isCompleted
  //added delay to letter reveal
  const animationDelay = `${position * REVEAL_TIME_MS + 100}ms`
  const isHighContrast = getStoredIsHighContrastMode()

  const classes = classnames(
    'w-14 h-14 border-solid border-2 flex items-center justify-center mx-0.5 text-lg font-bold rounded dark:text-white',
    {
      'bg-white dark:bg-slate-900 border-zinc-400 dark:border-zinc-700':
        !status,
      'border-zinc-500 dark:border-zinc-600': value && !status,
      'absent shadowed bg-zinc-400 dark:bg-zinc-700 text-white border-zinc-400 dark:border-zinc-700':
        status === 'absent',
      'correct shadowed bg-blue-700 text-white border-blue-700':
        status === 'correct',
      'present shadowed bg-amber-500 text-white border-amber-500':
        status === 'present',
      'cell-fill-animation': isFilled,
      'cell-reveal': shouldReveal,
/*
      'transition ease-in-out': isRevealing,
      'bg-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 hover:bg-zinc-400 active:bg-zinc-500':        
      !status,
      'bg-zinc-500 dark:bg-zinc-800 text-white': status === 'absent',
      'bg-amber-400 hover:bg-amber-500 active:bg-amber-600 text-white':
        status === 'correct' && isHighContrast,
      'bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white':
        status === 'present' && isHighContrast,
      'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white':
        status === 'correct' && !isHighContrast,
      'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white':
        status === 'present' && !isHighContrast,
*/
    }
  )

  return (
    <div className={classes} style={{ animationDelay }}>
      <div className="letter-container" style={{ animationDelay }}>
        {value}
      </div>
    </div>
  )
}
