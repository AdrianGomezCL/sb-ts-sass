import styles from './button.module.scss';

interface Props {
    /**
     * Is this the principal call to action on the page?
     */
    primary: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * Tamaño de la fuente
     */
    size: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label?: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
    primary = true,
    size = 'medium',
    backgroundColor,
    label = 'Sample text',
    ...props
}: Props) => {

    const mode = primary ? styles.primary : styles.secondary;

    const fontSize =
        size === 'small'
            ? styles.small
            : size === 'medium'
            ? styles.medium
            : styles.large;

    return (
        <button
            type='button'
            className={[styles.button, fontSize, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
