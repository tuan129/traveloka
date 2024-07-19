import classNames from 'classnames/bind';
import styles from './HeaderEmployee.module.scss';
import Button from '~/components/Button';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function HeaderEmployee() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav-bar')}>
                <div className={cx('content-employee')}>
                    <div className={cx('logo')}>
                        <a href="/listfilght">
                            <img src={images.logo} alt="Traveloka" />
                        </a>
                    </div>
                    <Button outline to="/addflight" className={cx('btn-nav-bar')}>
                        Thêm chuyến bay
                    </Button>
                    <Button outline to="/viewcustomer" className={cx('btn-nav-bar')}>
                        Xem thông tin khách hàng
                    </Button>
                    <Button outline to="/revenuestats" className={cx('btn-nav-bar')}>
                        Thống kê doanh thu
                    </Button>
                    <Button primary className={cx('btn-nav-bar')}>
                        Đăng xuất
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default HeaderEmployee;
