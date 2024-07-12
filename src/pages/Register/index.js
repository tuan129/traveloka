import classNames from 'classnames/bind';
import Button from '~/components/Button';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('wrapper')}>
            <h2>Register</h2>
            <div className={cx('register')}>
                <div className={cx('input')}>
                    <div className={cx('account')}>
                        <div className={cx('input-form')}>
                            <label>
                                <span>Họ và tên: </span>
                                <input className={cx('name-account')} type="text" />
                            </label>
                        </div>
                        <div className={cx('input-form')}>
                            <label>
                                <span>SĐT/ Email: </span>
                                <input className={cx('name-login')} type="text" />
                            </label>
                        </div>
                    </div>
                    <div className={cx('pass')}>
                        <div className={cx('input-form')}>
                            <label>
                                <span>Password: </span>
                                <input className={cx('password')} type="text" />
                            </label>
                        </div>
                        <div className={cx('input-form')}>
                            <label>
                                <span>Re-Pass </span>
                                <input className={cx('re-pass')} type="text" />
                            </label>
                        </div>
                    </div>
                </div>
                <Button primary>REGISTER</Button>

                <div className={cx('login-orthers')}>
                    <span>
                        have an account? <Button to="/login">Login</Button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Register;
