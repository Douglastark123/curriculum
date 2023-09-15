import { BookOpenIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { Card, CardBody, CardHeader, Image, Tab, Tabs } from '@nextui-org/react'

function App(): React.JSX.Element {
  return (
    <div className="flex h-full flex-col items-center gap-5 bg-cardBlack py-5 text-antiFlashWhite">
      <div className="flex h-full w-11/12 max-w-[820px] flex-col justify-between gap-5">
        {/* Intro */}
        <Card className="px-5 py-0" isBlurred shadow="sm">
          <CardBody>
            <div className="flex flex-row-reverse flex-wrap justify-between">
              <Image
                className="w-full min-w-[140px] max-w-[200px]"
                src="https://github.com/douglastark123.png"
                alt="github profile picture"
              />

              <div className="flex flex-col justify-center">
                <h2 className="text-4xl font-bold">Olá, eu sou</h2>
                <h1 className="text-5xl font-bold text-emerald-400">
                  Douglas Antunes
                </h1>
                <p className="flex gap-1 pt-3">
                  <MapPinIcon className="h-6 w-6" />
                  Cacoal, Rondônia, Brasil
                </p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* About me */}
        <Card className="flex gap-3 p-10 pt-7" isBlurred shadow="sm">
          <CardHeader className="flex justify-center p-0 text-xl text-teal-400">
            <h3>Sobre mim</h3>
          </CardHeader>
          <CardBody className="p-0">
            <p>
              Programador júnior apaixonado por JavaScript e TypeScript,
              buscando oportunidades para contribuir com desenvolvimento web e
              entregar soluções de qualidade. Comprometido em aprender e
              fornecer o melhor serviço possível. 🚀💻
            </p>
          </CardBody>
        </Card>

        {/* o que gosto de estudar/fazer */}
        <div className="flex flex-col items-end">
          <Tabs
            // aria-label="Options"
            variant="bordered"
            classNames={{
              tabList: 'border-emerald-400',
            }}
          >
            <Tab
              key="techs"
              className="w-full"
              title={
                <div className="flex items-center gap-2 text-emerald-400">
                  <BookOpenIcon width={24} />
                  <span>Tecnologias</span>
                </div>
              }
            >
              <Card shadow="sm" className="p-5">
                <CardBody className="p-0">
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <a
                        href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="html5"
                          src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"
                        />
                      </a>
                      <a
                        href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="css3"
                          src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"
                        />
                      </a>
                      <a
                        href="https://tailwindcss.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="TailwindCSS"
                          src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                        />
                      </a>
                    </li>
                    {/* languages */}
                    <li className="flex items-center gap-2">
                      <a
                        href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="javascript"
                          src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"
                        />
                      </a>
                      <a
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="typescript"
                          src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
                        />
                      </a>
                    </li>
                    {/* others */}
                    <li className="flex items-center gap-2">
                      <a
                        href="https://nodejs.org/en"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="nodejs"
                          src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"
                        />
                      </a>
                      <a
                        href="https://expressjs.com/pt-br/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="expressjs"
                          src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"
                        />
                      </a>
                      <a
                        href="https://react.dev/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="react"
                          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                        />
                      </a>
                    </li>
                    {/* database */}
                    <li className="flex items-center gap-2">
                      <a
                        href="https://www.postgresql.org/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="postgres"
                          src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
                        />
                      </a>
                      <a
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="MongoDB"
                          src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
                        />
                      </a>
                      <a
                        href="https://www.sqlite.org/index.html"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="SQLite"
                          src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"
                        />
                      </a>
                    </li>
                    <li className="flex items-center gap-2">
                      <a
                        href="https://www.docker.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="Docker"
                          src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white"
                        />
                      </a>
                      <a
                        href="https://git-scm.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="Git"
                          src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"
                        />
                      </a>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Tab>
            {/* <Tab
              key="interests"
              className="w-full"
              title={
                <div className="flex items-center gap-2 text-emerald-400">
                  <SparklesIcon width={24} />
                  <span>Outros Interesses</span>
                </div>
              }
            >
              <Card isBlurred shadow="sm" className="p-10">
                <CardBody className="p-0">
                  <ul className="flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <a
                        href="https://www.gnu.org/software/bash/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img
                          alt="bash"
                          src="https://img.shields.io/badge/GNU%20Bash-4EAA25?style=for-the-badge&logo=GNU%20Bash&logoColor=white"
                        />
                      </a>
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="recent_projects"
              className="w-full"
              title={
                <div className="flex items-center gap-2 text-emerald-400">
                  <CommandLineIcon width={24} />
                  <span>Projetos recentes</span>
                </div>
              }
            >
              <Card isBlurred shadow="sm" className="p-10">
                <CardBody className="p-0">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                </CardBody>
              </Card>
            </Tab> */}
          </Tabs>
        </div>

        {/* Contact me */}
        <Card className="flex gap-3 p-5" shadow="none">
          <CardHeader className="flex justify-center p-0 text-xl text-teal-400">
            <h3>Contato</h3>
          </CardHeader>
          <CardBody className="p-0">
            <span className="flex justify-center gap-20">
              <a
                href="https://www.instagram.com/douglastark/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="instagram"
                  src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white"
                />
              </a>
              <a
                href="mailto:douglasantunesilva@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="gmail"
                  src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/douglastark123/?locale=pt_BR"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="LinkedIn"
                  src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"
                />
              </a>
            </span>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}

export default App
