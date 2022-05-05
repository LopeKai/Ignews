import { useSession, signIn } from 'next-auth/react'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    const { data: session } = useSession()

    function handleSubcribe() {
        if (!session) {
            signIn('github')
            return
        }

        // criaçao da checkout session
    }
    return (
        <button
            type="button"
            className={styles.subscribeButton}
            onClick={handleSubcribe}
        >
            Subscribe now
        </button>
    )
}