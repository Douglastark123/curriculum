import { Button } from '@nextui-org/react'
import { useState } from 'react'
import { cn } from '../lib/utils'

const About = (): React.JSX.Element => {
  const [showFullText, setShowFullText] = useState<boolean>(false)
  const text = `Programador júnior apaixonado por JavaScript e TypeScript, buscando
  oportunidades para contribuir com desenvolvimento web e entregar
  soluções de qualidade. Comprometido em aprender e fornecer o melhor
  serviço possível. 🚀💻`

  return (
    <>
      <div
        className="flex flex-col gap-2"
        onClick={() => setShowFullText(!showFullText)}
      >
        <h3 className="text-center text-xl text-teal-400">Sobre mim</h3>
        <p
          className={cn(
            'box-content',
            showFullText ? 'line-clamp-none' : 'line-clamp-2 md:line-clamp-3',
          )}
        >
          {text}
        </p>
        <Button
          color="primary"
          variant="light"
          radius="none"
          className="rounded-md min-[846px]:hidden"
          onClick={() => setShowFullText(!showFullText)}
        >
          {showFullText ? 'Mostrar Menos' : 'Mostrar mais'}
        </Button>
      </div>
    </>
  )
}

export default About
