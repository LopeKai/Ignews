import styles from './styles.module.scss'

interface SubscribeButtonProps {
    priceId: string
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
    function handleSubcribe() {

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