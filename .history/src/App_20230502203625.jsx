import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'
import { Post } from './Components/Post'

import styles from './App.module.css'

import './global.css'


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/84347013?v=4',
      name: "Diego Fernades",
      role: 'CTO @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋", },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-02 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: "Mayk Brito",
      role: 'Educator @ Rocketseat'
    },
    content: [
      { type: 'paragraph', content: "Fala galeraa 👋", },
      { type: 'paragraph', content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2023-05-04 20:00:00')
  },
];


function App() {
  return (
    <>
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
      </div>

    </>
  )

}

export default App
