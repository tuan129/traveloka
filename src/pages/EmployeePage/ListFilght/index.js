import classNames from 'classnames/bind';
import styles from './ListFilght.module.scss';

const cx = classNames.bind(styles);

function ListFilght() {
    return (
        <div className={cx('wrapper-list-flight')}>
            <div className={cx('content')}>
                <h1>Danh sách các chuyến bay:</h1>
                <div className={cx('list-flight')}>
                    <ul className={cx('list-flight-items')}>
                        <li className={cx('flight-item')}>
                            <h3>AirAsia</h3>
                            <h4>08:00 - 10:00</h4>
                            <div>
                                giá vé: <p>người lớn: 1,500,000 VNĐ</p> <br />
                                <p>người lớn: 1,500,000 VNĐ</p> <br />
                                <p>người lớn: 1,500,000 VNĐ</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ListFilght;
