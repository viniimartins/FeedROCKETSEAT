import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'


interface CommentProps {
    content: string;
    onDeleteComment: () => void
}


export function Comment({ content, onDeleteComment }) {
    const [linkCount, setLikeCount] = useState(0)


    function handleLinkComment() {
        // setLikeCount(linkCount + 1)
        setLikeCount((state) => {
            return state + 1
        })
    }

    function handleDeleteComment() {
        onDeleteComment(content)
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/84347013?v=4" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Diego Fernandes</strong>
                            <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atras</time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentario'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        {content}
                    </p>
                </div>
                <footer>
                    <button onClick={handleLinkComment}>
                        <ThumbsUp />
                        Aplaudir <span>{linkCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}