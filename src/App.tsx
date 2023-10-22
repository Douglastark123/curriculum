import { Card, CardBody, Divider } from '@nextui-org/react'
import { About, Header, MyTabs } from './Components'

function App(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center bg-cardBlack font-mono text-antiFlashWhite mobile-md:py-5">
      <div className="flex w-full max-w-[820px] flex-col items-center gap-1 mobile-sm:gap-3 mobile-md:w-11/12 md:gap-5">
        <Card
          isBlurred
          shadow="sm"
          radius="none"
          className="w-full mobile-md:rounded-lg mobile-md:px-5"
        >
          <CardBody>
            <Header />
            <Divider className="my-4" />
            <About />
            <Divider className="my-4" />
            <MyTabs />
          </CardBody>
          <Divider className="my-4" />
        </Card>
      </div>
    </div>
  )
}

export default App
