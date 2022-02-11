import '../../scss/base.scss';
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

    const mode = primary ? 'bg-gray-900' : 'bg-gray-400';

    const fontSize =
        size === 'small'
            ? 'text-sm'
            : size === 'medium'
            ? 'text-base'
            : 'text-lg';

    return (
        <button
            type='button'
            className={['text-white', 'px-2 py-2', 'rounded-lg', styles.button, fontSize, mode].join(' ')}
            style={{ backgroundColor }}
            {...props}
        >
            {label}
        </button>
    );
};
