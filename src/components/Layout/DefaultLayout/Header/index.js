import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button to={'/'} className={cx('logo')}>
                    <img src={images.logo} alt="Traveloka" />
                </Button>
                <ul className={cx('nav')}>
                    <li>
                        <img className={cx('percent')} src={images.percent} alt="khuyen_mai" />
                        <a href="/">Khuyến Mãi</a>
                    </li>

                    <li>
                        <a href="/">Hỗ Trợ</a>
                    </li>
                    <li>
                        <a href="/">Hợp Tác Với Chúng Tôi</a>
                    </li>
                    <Button outline to="/login" leftIcon={<img src={images.user} alt="User" />}>
                        Đăng Nhập
                    </Button>

                    <Button primary to="/register">
                        Đăng Ký
                    </Button>
                </ul>
            </div>
            <div className={cx('title-page')}>
                <a href="/">Vé máy bay</a>
            </div>
        </header>
    );
}

export default Header;
