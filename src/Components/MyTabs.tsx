import { BookOpenIcon } from '@heroicons/react/24/outline'
import { Tabs, Tab, Card, CardBody } from '@nextui-org/react'

const MyTabs = (): React.JSX.Element => (
  <>
    <div className="flex flex-col items-end">
      <Tabs
        variant="bordered"
        classNames={{
          tabList: 'border-emerald-400 w-full',
        }}
      >
        <Tab
          key="techs"
          className="w-full"
          title={
            <span className="flex items-center gap-2 text-emerald-400">
              <BookOpenIcon width={24} />
              <p className="hidden md:block ">Tecnologias</p>
            </span>
          }
        >
          <Card isBlurred shadow="sm" className="p-5">
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
                  <a href="https://react.dev/" target="_blank" rel="noreferrer">
                    <img
                      alt="react"
                      src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                    />
                  </a>
                </li>
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
            <span className="flex items-center gap-2 text-emerald-400">
              <SparklesIcon width={24} />
              <p className="hidden md:block">Outros Interesses</p>
            </span>
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
            <span className="flex items-center gap-2 text-emerald-400">
              <CommandLineIcon width={24} />
              <p className="hidden md:block">Projetos recentes</p>
            </span>
          }
        >
          <Card isBlurred shadow="sm" className="p-10">
            <CardBody className="p-0">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab> */}
      </Tabs>
    </div>
  </>
)

export default MyTabs
