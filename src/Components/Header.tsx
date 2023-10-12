import { MapPinIcon } from '@heroicons/react/24/outline'
import { Image } from '@nextui-org/react'

const Header = (): React.JSX.Element => (
  <>
    <div className="flex justify-between gap-5">
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-bold mobile-sm:text-2xl mobile-md:text-3xl md:text-4xl">
          Olá, eu sou
        </h2>
        <h1 className="text-xl font-bold text-emerald-400 mobile-sm:text-3xl mobile-md:text-4xl md:text-5xl">
          Douglas Antunes
        </h1>
        <p className="flex items-center gap-1 pt-1 text-xs font-light mobile-sm:pt-3 mobile-md:text-base md:pt-5">
          <MapPinIcon className="h-6 w-6" />
          Cacoal, Rondônia, Brasil
        </p>
      </div>

      <Image
        src="https://github.com/douglastark123.png"
        className="w-24 max-w-[200px] mobile-sm:w-full"
        radius="lg"
        alt="github profile picture"
      />
    </div>
  </>
)

export default Header
