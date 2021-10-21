import Link from 'next/link'
import styles from './exitpreview.module.scss';

interface ExitPreviewProps {
    preview: boolean;
}

export function ExitPreview({ preview }: ExitPreviewProps) {

    return (
        <>
            {preview && (
                <aside className={styles.buttonExitPreview}>
                    <Link href="/api/exit-preview">
                        <a >Sair do modo Preview</a>
                    </Link>
                </aside>
            )}
        </>
    )
}