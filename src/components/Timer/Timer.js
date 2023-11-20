import styles from './Timer.module.scss'

const Timer = ({ time }) => {
    const formatTime = milliseconds => {
        const hours = Math.floor(milliseconds / (1000 * 60 * 60)).toString().padStart(2, '0');
        const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000).toString().padStart(2, '0');
        const millisecondsFormatted= (milliseconds % 1000).toString().padStart(3, '0');
      
        return `${hours}:${minutes}:${seconds}.${millisecondsFormatted}`;
    };

    return (
        <div className={styles.timer}>
            {formatTime(time)}
        </div>
    );
};

export default Timer;