import styles from './Viewcustomer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Viewcustomer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}></div>
        </div>
    );
}

export default Viewcustomer;
