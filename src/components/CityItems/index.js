import classNames from 'classnames/bind';
import styles from './CityItems.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CityItems() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('info')}>
                <FontAwesomeIcon className={cx('icon')} icon={faPlane} />
                <div className={cx('info-airfield')}>
                    <div className={cx('name-airfield')}>
                        <p>Sân bay Tân Sơn Nhất</p>
                        <span className={cx('code-airfield')}> SGN</span>
                    </div>
                    <p className={cx('name-country')}>TP HCM, VietNam</p>
                </div>
            </div>
        </div>
    );
}

export default CityItems;
