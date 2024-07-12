import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <h2>Login</h2>
                <div className={cx('input')}>
                    <div className={cx('input-form')}>
                        <label>
                            <span>Email/ SDT: </span>
                            <input type="text" />
                        </label>
                    </div>
                    <div className={cx('input-form')}>
                        <label>
                            <span>Password: </span>
                            <input type="password" />
                        </label>
                    </div>
                    <Button primary>Login</Button>
                </div>
                <div className={cx('login-orthers')}>
                    <p>
                        Don't have an account? <Button to="/register">Register</Button>
                    </p>
                    <p>
                        Forget Password ? <Button to="/register">Reset password</Button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
