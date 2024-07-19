import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!email || !password) {
            setError('Email và mật khẩu không được để trống.');
            return;
        }

        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.status === 200) {
                const { role } = data;
                // Chuyển hướng người dùng dựa trên vai trò của họ
                if (role === 'admin') {
                    navigate('/admin-dashboard');
                } else if (role === 'customer') {
                    navigate('/');
                } else if (data.role === 'employee') {
                    navigate('/listfilght');
                }
            }
        } catch (error) {
            setError('Email hoặc mật khẩu không chính xác.');
        }
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('login')}>
                <h2>Login</h2>
                <div className={cx('input')}>
                    <div className={cx('input-form')}>
                        <label>
                            <span>Email:</span>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </label>
                    </div>
                    <div className={cx('input-form')}>
                        <label>
                            <span>Password: </span>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </label>
                    </div>
                    {error && <p className={cx('error')}>{error}</p>}
                    <Button primary onClick={handleLogin}>
                        Login
                    </Button>
                </div>
                <div className={cx('login-orthers')}>
                    <p>
                        Don't have an account?
                        <Button className={cx('btn-register')} text to="/register">
                            Register
                        </Button>
                    </p>
                    <p>
                        Forget Password ?
                        <Button text to="/register">
                            Reset password
                        </Button>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
